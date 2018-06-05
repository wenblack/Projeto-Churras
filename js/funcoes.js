﻿$(function(){
	var operacao = "A"; //"A"=Adição; "E"=Edição

	var indice_selecionado = -1;

	var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados

	tbClientes = JSON.parse(tbClientes); // Converte string para objeto

	if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tbClientes = [];


	function Adicionar(){


		var cli = GetCliente("Codigo", $("#txtCodigo").val());
		var cliente = JSON.stringify({
			Codigo   : $("#txtCodigo").val(),
			Nome     : $("#txtNome").val(),
			Telefone : $("#txtTelefone").val(),
			Email    : $("#txtEmail").val()
		});

		tbClientes.push(cliente);

		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		swal("", "", "success" , 200000000);
		alert("Registro adicionado com Sucesso!")
		
		return true;
		
		

	}

	function Editar(){
		tbClientes[indice_selecionado] = JSON.stringify({
				Codigo   : $("#txtCodigo").val(),
				Nome     : $("#txtNome").val(),
				Telefone : $("#txtTelefone").val(),
				Email    : $("#txtEmail").val()
			});
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		swal("", "", "success");
		alert("Informações editadas.");
		operacao = "A";
		return true;
	}

	function Listar(){
		$("#tblListar").html("");
		$("#tblListar").html(
			"<thead>"+
			"	<tr>"+
			"<th>Editar/Excluir</th>"+
			"	<th>Nome</th>"+
			"	<th>Ponto</th>"+
			"	<th>Data</th>"+
			"	<th>Observação</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(var i in tbClientes){
			var cli = JSON.parse(tbClientes[i]);
		  	$("#tblListar tbody").append("<tr>"+
									 	 "	<td><img src='edit.png' alt='"+i+"' class='btnEditar'/><img src='delete.png' alt='"+i+"' class='btnExcluir'/></td>" + 
										 "	<td>"+cli.Codigo+"</td>" + 
										 "	<td>"+cli.Nome+"</td>" + 
										 "	<td>"+cli.Telefone+"</td>" + 
										 "	<td>"+cli.Email+"</td>" + 
		  								 "</tr>");
		 }
	}

	function Excluir(){
		tbClientes.splice(indice_selecionado, 1);
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		swal("Registro excluído.", "", "error");
	}

	function GetCliente(propriedade, valor){
		var cli = null;
        for (var item in tbClientes) {
            var i = JSON.parse(tbClientes[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
	}

	Listar();

	$("#frmCadastro").on("submit",function(){
		if(operacao == "A")
			return Adicionar();
		else
			return Editar();		
	});

	$("#tblListar").on("click", ".btnEditar", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var cli = JSON.parse(tbClientes[indice_selecionado]);
		$("#txtCodigo").val(cli.Codigo);
		$("#txtNome").val(cli.Nome);
		$("#txtTelefone").val(cli.Telefone);
		$("#txtEmail").val(cli.Email);
		$("#txtCodigo").attr("readonly","readonly");
		$("#txtNome").focus();
	});

	$("#tblListar").on("click", ".btnExcluir", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});
});

$(function () {
	 $('#btnSalvar').on('click', function (event) {
    	swal("Operação não Realizada", "Favor verificar se todos os campos estão preenchidos", "error");
  });
});
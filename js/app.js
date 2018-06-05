$('.collection')
    .on('click', '.collection-item', function(){
        var nomeProduto = this.firstChild.textContent;
        Materialize.toast('Operação realizada com sucesso', 2000);


    })
    .on('click', '.badge', function() {
        $(this).remove();
        return false;
    });

$('.modal-trigger').leanModal();

$('#confirmar').on('click', function() {
    var texto = "";

    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });

    $('#resumo').empty().text(texto);
});

$('.acao-limpar').on('click', function() {
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$(function () {
  $('#whats').on('click', function (event) {
    var teste = localStorage.getItem("relatorio");
    swal(teste);
    window.location = 'whatsapp://send?text=' + teste;
  });
});
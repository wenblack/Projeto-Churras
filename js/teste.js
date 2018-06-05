var valor_kg;
var num_pessoas_a;
var valor_medio_pessoas;
var valor_total_pessoas;
var total_kilo;
var divisor = 2.5;
var multiplicador = 0.400;
var valor_kg_k;
var num_pessoas_k;
var valor_medio_pessoas_k;
var valor_total_pessoas_k;
var total_kilo_k;
var divisor_k = 3.3;
var multiplicador_k = 0.300;

function calcular2(){




valor_kg = document.getElementById('valor_k').value;
valor_kg_k = document.getElementById('valor_k').value;
num_pessoas_a = document.getElementById('qtd_a').value;
num_pessoas_k = document.getElementById('qtd_k').value;


valor_medio_pessoas = valor_kg / divisor;
valor_medio_pessoas_k = valor_kg_k / divisor_k;
valor_total_pessoas = valor_medio_pessoas * num_pessoas_a;
valor_total_pessoas_k = valor_medio_pessoas_k * num_pessoas_k;
total_kilo = num_pessoas_a * multiplicador;
total_kilo_k = num_pessoas_k * multiplicador_k;


var num_formatado = "Total da compra adultos : R$ ";
var resultado_total = "" +num_formatado +valor_total_pessoas;
var num_formatado_k = "Total da compra Crianças : R$ ";
var resultado_total_k = "" +num_formatado_k +valor_total_pessoas_k;


var valor_medio_formatado = "Despesas individuais : R$  " +valor_medio_pessoas ;
var valor_medio_formatado_k = "Despesas individuais : R$ " +valor_medio_pessoas_k;


var total_formatado = "Total de carne (Kg) :  " +total_kilo;
var total_formatado_k = "Total de carne (Kg): " +total_kilo_k;



document.getElementById('valor_compra_a').innerHTML = ""+ resultado_total;		
document.getElementById('valor_compra_k').innerHTML = "" + resultado_total_k;
document.getElementById('quantia_pessoa_a').innerHTML = ""+ valor_medio_formatado;		
document.getElementById('quantia_pessoa_k').innerHTML = "" + valor_medio_formatado_k;
document.getElementById('total_carne_a').innerHTML = ""+ total_formatado;		
document.getElementById('total_carne_k').innerHTML = ""+ total_formatado_k;		


}







function bebida(){

var valor_breja;
var num_bebados;
var valor_medio_bebida;
var valor_total_bebida;
var total_bebida;
var divisor_breja = 2;
var multiplicador_breja = 6;	
	
valor_breja = prompt("Digite o preço do fardo :");

num_bebados = prompt("Digite a quantidade de pessoas que irão beber:");

valor_medio_bebida = valor_breja / divisor_breja;

valor_total_bebida = valor_medio_bebida * num_bebados;

total_bebida = num_bebados * multiplicador_breja;

alert(num_bebados);
alert(valor_medio_bebida);
alert(valor_total_bebida);
alert(total_bebida);

}
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
var num_bebados_2;
var valor_medio_bebida;
var valor_medio_bebida_2;
var valor_total_bebida;
var valor_total_bebida_2;
var total_bebida;
var total_bebida_2;
var divisor_breja = 2;
var divisor_breja_2 = 4;
var multiplicador_breja = 6;
var multiplicador_breja_2 = 3;	



valor_breja = document.getElementById('valor_fardo').value;
num_bebados = document.getElementById('qtd_bedados_1').value;
num_bebados_2 = document.getElementById('qtd_bedados_2').value;

valor_medio_bebida = valor_breja / divisor_breja;
valor_medio_bebida_2 = valor_breja / divisor_breja_2;

valor_total_bebida = valor_medio_bebida * num_bebados;
valor_total_bebida_2 = valor_medio_bebida_2 * num_bebados;

total_bebida = num_bebados * multiplicador_breja;
total_bebida_2 = num_bebados_2 * multiplicador_breja_2;


var compra_formatada_1 = "Total da compra contando 6 latas por pessoa : R$ " +valor_total_bebida;
var compra_formatada_2 =  "Total da compra contando 3 latas por pessoa : R$ " +valor_total_bebida_2;

var medio_formatada_1 = "Despesas individuais : R$ " +valor_medio_bebida;
var medio_formatada_2 = "Despesas individuais : R$ " +valor_medio_bebida_2;


var latas_formatadas_1 = "Total de latas : " +total_bebida;
var latas_formatadas_2 = "Total de latas : " +total_bebida_2;

document.getElementById('valor_compra_breja_1').innerHTML = ""+ compra_formatada_1;
document.getElementById('valor_compra_breja_2').innerHTML = ""+ compra_formatada_2;

document.getElementById('quantia_breja_1').innerHTML = ""+ latas_formatadas_1;
document.getElementById('quantia_breja_2').innerHTML = ""+ latas_formatadas_2;

document.getElementById('media__breja_1').innerHTML = ""+ medio_formatada_1;
document.getElementById('media__breja_2').innerHTML = ""+ medio_formatada_2;


}

function refri(){

var valor_refri;
var num_bebedores;
var valor_medio_refri;
var valor_total_refri;
var total_refri;
var divisor_refri = 2;	

valor_refri = document.getElementById('valor_refri').value;
num_bebedores = document.getElementById('num_bebedores').value;

valor_medio_refri = valor_refri / divisor_refri;

valor_total_refri = valor_medio_refri * num_bebedores;

total_refri = num_bebedores;


var compra_formatada_1 = "Total da compra : R$ " +valor_total_refri;

var medio_formatada_1 = "Despesas individuais : R$ " +valor_medio_refri;

var litros_formatadas_1 = "Total de litros : " +total_refri;

document.getElementById('valor_total_refri').innerHTML = "" + compra_formatada_1;
document.getElementById('quantia_refri').innerHTML = "" + medio_formatada_1;
document.getElementById('media_refri').innerHTML = "" + litros_formatadas_1;



}
 var nome;
var congre;
var horas;
var estudos;
var estudos;
var revisitas;
var videos;
var publicacoes;
var texto;

function enviar(){


nome = prompt("Digite seu nome:");
while(nome == null || nome == ""){
	nome = prompt("Digite seu nome:");
}


congre = prompt("Digite a congregação:");


horas = prompt("Digite a quatidade de horas:");


estudos = prompt("Digite a quatidade de estudos:");


revisitas = prompt("Digite a quatidade de revisitas:");


videos = prompt("Digite a quatidade de videos:");


publicacoes = prompt("Digite a quatidade de publicações:");



var nomeFormatado = "Nome: " +nome + "\n";
var congreFormatado = "Congregação: " +congre + "\n   ";
var horasFormatado = "Horas: " +horas + "\n   ";
var estudosFormatado = "Estudos: " +estudos + "\n   ";
var revisitasFormatado = "Revisitas: " +revisitas + "\n   ";
var videosFormatado = "Vídeos: " +videos + "\n   ";
var publicacoesFormatada = "Publicações: " +publicacoes + "";
var texto = ""+nomeFormatado +congreFormatado +horasFormatado +estudosFormatado +revisitasFormatado +videosFormatado +publicacoesFormatada;


swal(texto);
localStorage.setItem("relatorio", texto);
}

function corrigir(){
alert(localStorage.getItem("relatorio"));
var confirmacao = confirm ("Deseja realmente alterar os dados?");
if (confirmacao == true){

nome = prompt("Digite seu nome:");
while(nome == null || nome == ""){
  nome = prompt("Digite seu nome:");
}

congre = prompt("Digite a congregação:");


horas = prompt("Digite a quatidade de horas:");


estudos = prompt("Digite a quatidade de estudos:");



revisitas = prompt("Digite a quatidade de revisitas:");


videos = prompt("Digite a quatidade de videos:");


publicacoes = prompt("Digite a quatidade de publicações:");



var nomeFormatado = "Nome: " +nome+ "\n   ";
var congreFormatado = "Congregação: " +congre+ "\n   ";
var horasFormatado = "Horas: " +horas+ "\n   ";
var estudosFormatado = "Estudos: " +estudos+ "\n   ";
var revisitasFormatado = "Revisitas: " +revisitas+ "\n   ";
var videosFormatado = "Vídeos: " +videos+ "\n   ";
var publicacoesFormatada = "Publicações: " +publicacoes+ "";
var texto = ""+nomeFormatado +congreFormatado +horasFormatado +estudosFormatado +revisitasFormatado +videosFormatado +publicacoesFormatada;

swal(texto);
localStorage.setItem("relatorio", texto);
}

}

function iniciaJogo(){

	var url = window.location.search;

	var nivel_jogo = url.replace("?", "");

	
	var tempo_segundos = 0;

	if(nivel_jogo == 1){

		tempo_segundos = 120;

	}
	if(nivel_jogo == 2){

		tempo_segundos = 60;	

	}
	if(nivel_jogo == 3){

		tempo_segundos = 30;

	}
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	var qtde_baloes = 10;

	cria_baloes(qtde_baloes);

	//imprimir qtde baloes_inteiros

	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;
	
}

function cria_baloes(qtde_baloes){

	for (var i =1; i <= qtde_baloes; i++) {

		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';

		//função para colocar os elementos dentro da div 'cenario'

		document.getElementById('cenario').appenChild();
		
	}



}
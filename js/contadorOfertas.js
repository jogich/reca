
/*Tiempo inicial en segundos*/
const tiempoInicial = 80;
var tiempo;
var marcadoresTiempo;
var contador;

/**Inicia el contador*/
function contadorOfertas(){
	tiempo = tiempoInicial;
	marcadoresTiempo = document.getElementsByClassName("marcadorTiempo");
	for(let i=0;i<marcadoresTiempo.length;i++){
		marcadoresTiempo[i].innerHTML=calcularMinutos(tiempo)+":"+calcularSegundos(tiempo);
	}
	contador = window.setInterval(contar, 1000);
}


function contar(){
	tiempo--;
	
	for(let i=0;i<marcadoresTiempo.length;i++){
		marcadoresTiempo[i].innerHTML=calcularMinutos(tiempo)+":"+calcularSegundos(tiempo);
	}
	
	//Detener contador cuando el tiempo llega a 0.
	if(tiempo<=0){
		window.clearInterval(contador);
	}
}

/*Calcula la cantidad de segundos por minuto que se mostrarán a partir de una cantidad total de segundos*/
function calcularSegundos(tiempo){
	if(tiempo%60<10){
		return "0"+tiempo%60;
	}else{
		return tiempo%60;
	}
}
/*Calcula la cantidad de minutos que se mostrarán a partir de una cantidad total de segundos*/
function calcularMinutos(tiempo){
	if(tiempo<60){
		return "00";
	}else{
		if(tiempo/60<10){
			return "0"+Math.floor(tiempo/60);
		}else{
			return ""+Math.floor(tiempo/60);
		}
	}
}
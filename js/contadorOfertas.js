
/*Tiempo inicial en segundos*/
const tiempoInicial = 10;
var tiempo = tiempoInicial;
//var marcadorTiempo = document.getElementsByClassName("tiempoMarcador")[0];


function contar(){
	tiempo++;
	tiempoMarcador.innerHTML="Tiempo: "+calcularMinutos(tiempo)+":"+calcularSegundos(tiempo);
	
	
	//Detener contador cuando el tiempo al límite.
	//if(tiempo<=0){
		
	//}
}

/*Calcula la cantidad de segundos que se mostrarán a partir de una cantidad total de segundos*/
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
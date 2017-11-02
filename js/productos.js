window.onload = cargarProductos();

function cargarProductos(){
	var contenedor = document.getElementById("contenedorProd01");
	for(var i=0;i<productos.length;i++){
		
		console.log("a: "+productos[i].id);
		console.log("a: "+productos[i].titulo);
	}
	
}
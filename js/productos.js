
/**
* Carga los productos en el div llamado "contenedorProd" [todo | ordenador | movil | consola]
*/
function cargarProductos(producto){
	var contenedor = document.getElementById("contenedorProd");
	let divProducto;
	let aProducto;
	let imgProducto;
	for(var i=0;i<productos.length;i++){
		if(producto=="todo" || productos[i].tipo==producto){
			divProducto = document.createElement("div");
			divProducto.classList.add("col-lg-3");
			divProducto.classList.add("col-md-4");
			divProducto.classList.add("col-xs-6");

			aProducto = document.createElement("a");
			aProducto.href = "#";
			aProducto.classList.add("d-block");
			aProducto.classList.add("mb-4");
			aProducto.classList.add("h-100");

			imgProducto = document.createElement("img");
			imgProducto.classList.add("img-fluid");
			imgProducto.classList.add("img-thumbnail");
			imgProducto.src = productos[i].imagen;

			aProducto.appendChild(imgProducto);
			divProducto.appendChild(aProducto);
			contenedor.appendChild(divProducto);
		}
	}
}
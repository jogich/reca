
/**
* Carga los productos en el div llamado "contenedorProd" [todo | ordenador | movil | consola]
*/
function cargarProductos(producto){
	var contenedor = document.getElementById("contenedorProd");
	let divProducto;
	let aProducto;
	let imgProducto;
	let pProducto;
	let tituloProducto;
	for(var i=0;i<productos.length;i++){
		if(producto=="todo" || productos[i].tipo==producto){
			divProducto = document.createElement("div");
			divProducto.classList.add("col-lg-3");
			divProducto.classList.add("col-md-4");
			divProducto.classList.add("col-xs-6");
			divProducto.classList.add("productoDiv");

			aProducto = document.createElement("a");
			aProducto.href = "#";
			aProducto.classList.add("d-block");
			aProducto.classList.add("mb-4");

			imgProducto = document.createElement("img");
			imgProducto.classList.add("img-fluid");
			imgProducto.classList.add("img-thumbnail");
			imgProducto.src = productos[i].imagen;

			tituloProducto = document.createElement("h3");
			tituloProducto.innerHTML = productos[i].titulo;

			pProducto = document.createElement("p");
			pProducto.classList.add("productoPrecio");
			pProducto.innerHTML = productos[i].precio;

			aProducto.appendChild(imgProducto);
			divProducto.appendChild(aProducto);
			divProducto.appendChild(tituloProducto);
			divProducto.appendChild(pProducto);
			contenedor.appendChild(divProducto);

		}
	}
}

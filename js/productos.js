
/**
* Carga los productos en el div llamado "contenedorProd" [todo | ordenador | movil | consola]
*
* @param {string} producto Tipo de producto [todo | ordenador | movil | consola].
* @param {number} numProductos Cantidad de productos que se quieren mostrar (entre 1 y 100, cualquier otro num cargará 50).
*/
function cargarProductos(producto, numProductos){
	var contenedor = document.getElementById("contenedorProd");
	let productosMostrados = 0;
	let cantidadMax;
	let divProducto;
	let aProducto;
	let imgProducto;
	let divDatos;
	let tituloProducto;
	let pProducto;
	if(numProductos<=100 && numProductos>0){
		cantidadMax = numProductos;
	}else{
		cantidadMax = 50;
	}
	// Se carga el css del producto en el documento
	addCss("cssProducto");
	
	for(var i=0;i<productos.length;i++){
		if((producto=="todo" || productos[i].tipo==producto) && productosMostrados<cantidadMax){
			// div que contiene el producto
			divProducto = document.createElement("div");
			//divProducto.classList.add("col-lg-3");
			//divProducto.classList.add("col-md-4");
			//divProducto.classList.add("col-xs-6");
			divProducto.classList.add("productoDiv");
			divProducto.style.height="350px";
			// Se añade la función para mostrar el precio al pasar el reatón sobre el producto
			addJSPrecio(divProducto);

			// Enlace que contiene la imagen del producto
			aProducto = document.createElement("a");
			aProducto.href = "#";
			aProducto.classList.add("d-block");
			aProducto.classList.add("mb-4");

			// Imagen del producto
			imgProducto = document.createElement("img");
			imgProducto.classList.add("imgProducto");
			imgProducto.classList.add("img-fluid");
			//imgProducto.classList.add("img-thumbnail");
			imgProducto.src = productos[i].imagen;

			// Div que contiene los datos del producto
			divDatos = document.createElement("div");

			// Título del producto
			tituloProducto = document.createElement("h4");
			tituloProducto.innerHTML = productos[i].titulo;

			// Precio del producto
			pProducto = document.createElement("p");
			pProducto.classList.add("productoPrecio");
			pProducto.innerHTML = productos[i].precio;

			// Se adjuntan los elementos a un div que a su vez es insertado dentro del div "contenedorProd"
			aProducto.appendChild(imgProducto);
			divProducto.appendChild(aProducto);
			divProducto.appendChild(divDatos);
			divDatos.appendChild(tituloProducto);
			divDatos.appendChild(pProducto);
			contenedor.appendChild(divProducto);
			// Se indica que un div ha sido añadido dentro del div "contenedorProd"
			productosMostrados++;
		}
	}
}

/**
* Se carga el css del producto en el documento
*
* @param {string} cssId Id del css
*/
function addCss(cssId){
	if (!document.getElementById(cssId)){
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/producto.css';
	    link.media = 'all';
	    head.appendChild(link);
	}
}

/**
* Se carga el css del producto en el documento
*
* @param {string} cssId Id del css
*/
function addJSPrecio(elementoDiv){
	elementoDiv.onmouseover = function(){mostrar(elementoDiv)};
	elementoDiv.onmouseout = function(){ocultar(elementoDiv)};

	function mostrar(elementoDiv){
    	elementoDiv.getElementsByTagName("p")[0].style.visibility="visible";
	}
	function ocultar(elementoDiv){
	    elementoDiv.getElementsByTagName("p")[0].style.visibility="hidden";
	}
}
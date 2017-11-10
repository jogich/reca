//cargamos el producto de tipo ordenador.
cargarProductos('ordenador');
var elementos = document.getElementsByClassName('productoDiv');
for (i=0;i<elementos.length;i++){
  let num = i;
  elementos[i].onmouseover = function(){aumentar(num)};
  elementos[i].onmouseout = function(){normal(num)};
}
//la visibilidad cuando pasamos el raton es visibe
//cogemos el elemento p y lo hacemos visible
function aumentar(num){
    elementos[num].getElementsByTagName("p")[0].style.visibility="visible";
}
//la visibilidad cuando no pasamos el raton es invisible
//cogemos el elemento p y lo hacemosinvisible
function normal(num){
    elementos[num].getElementsByTagName("p")[0].style.visibility="hidden";
}

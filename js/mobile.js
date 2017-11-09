cargarProductos('movil');

var elementos = document.getElementsByClassName('productoDiv');
for (i=0;i<elementos.length;i++){
  let num = i;
  elementos[i].onmouseover = function(){aumentar(num)};
  elementos[i].onmouseout = function(){normal(num)};
}
function aumentar(num){
    elementos[num].getElementsByTagName("p")[0].style.visibility="visible";
}
function normal(num){
    elementos[num].getElementsByTagName("p")[0].style.visibility="hidden";
}

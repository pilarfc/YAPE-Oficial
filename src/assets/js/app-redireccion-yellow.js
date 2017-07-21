var cargarPagina = function () {
  setTimeout(redireccion, 3000);   
}


var redireccion = function () {
    $(location).attr('href', 'tarjeta.html');
    console.log("funciona");
}


$(document).ready(cargarPagina);
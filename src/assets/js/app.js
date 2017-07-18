var cargarPagina = function () {
    
  $('.carousel.carousel-slider').carousel({fullWidth: true}); 
   habilitandoBoton();
    
}
 
var validandoTelefono = function () {
    var numeroCaracteres = $('#input-numero').val.length;
    if (numeroCaracteres == 10) {
		return true;
	} else {
		return false;
	}
}


var habilitandoBoton = function () {
    if (validandoTelefono()) {
		$('#boton-continuar').removeClass('disabled');
	} else {
        $('#boton-continuar').addClass('disabled');
	}
}


$(document).ready(cargarPagina); 
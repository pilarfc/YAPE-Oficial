var cargarPagina = function () {
    $('select').material_select();
   $('#input-tarjeta').keyup(registroTarjeta);
}

var registroTarjeta = function () {
    var $registrarTarjeta = $('#registrar--tarjeta'); //botón
    var $numeroTarjeta = $('#input-tarjeta').val().length;
   
    
    
    if($numeroTarjeta == 16) {
			$registrarTarjeta.removeClass("disabled");
		} else {
			$registrarTarjeta.addClass("disabled");
     }
}




$(document).ready(cargarPagina); 
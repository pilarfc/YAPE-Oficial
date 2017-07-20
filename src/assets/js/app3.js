var cargarPagina = function () {
   $('#usuario--nombre').keyup(datosUsuario);
   $('#usuario--password').keyup(datosUsuario);
}


var datosUsuario = function () {
    var $botonCrearCuenta = $('#crear-cuenta');
    var $nombreUsuario = $('#usuario--nombre').val().length;
    var $usuarioPassword = $('#usuario--password').val().length; 
    
    if($nombreUsuario >= 2 && $usuarioPassword == 6) {
			$botonCrearCuenta.removeClass("disabled");
		} else {
			$botonCrearCuenta.addClass("disabled");
     }
}


$(document).ready(cargarPagina); 
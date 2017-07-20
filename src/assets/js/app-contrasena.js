var cargarPagina = function () {
  $('#boton--registrar').click(verificarPassword);
}


var verificarPassword = function () {
    var $botonRegistrar = $('#boton--registrar');
    var $inputPassword = $('.input--newpassword').val();
    var $inputIngresarPassword = $('#input--crear--password').val();
    
    if($inputPassword === $inputIngresarPassword) {
			$botonRegistrar.removeClass("disabled");
		} else {
			$botonRegistrar.addClass("disabled");
     }
}

//Falta el local storage para comparar información.


$(document).ready(cargarPagina);
var cargarPagina = function () {
    
  $('.carousel.carousel-slider').carousel({fullWidth: true}); 
    habilitandoBoton();
  $('#input-numero').keyup(habilitandoBoton);
  $('#test5').change(habilitandoBoton);
//  $('#boton-continuar').click(registrarNumero);
   $('#usuario--nombre').keyup(datosUsuario);
   $('#usuario--password').keyup(datosUsuario);
}
 

/*SEGUNDA PANTALLA*/
var habilitandoBoton = function () {
    var $botonContinuar = $('#boton-continuar');
    var $numeroCaracteres = $('#input-numero').val().length;
//    var $checkbox = $('test5');
    
    if($numeroCaracteres == 10 && $('#test5').is(":checked")) {
			$botonContinuar.removeAttr("disabled");
		} else {
			$botonContinuar.attr("disabled", true);
     }
}


//API

//Parametros para hacer un request ajax 

/*URL: http://localhost:3000/api/registerNumber
Método HTTP: POST 
Data: {"phone":"...", "terms":"..."}

En postman en el body, (solo cuando es método post) utilizamos el x-www-form-urlencoded, agregamos las dos llames "phone" y "terms", en value ponemos los valores literales que son el teléfono y el terms que solo puede ser true o false, ya que es si acepta o no los términos y condiciones. Al enviarlo, nos otorga también el código que necesitamos. 

shortHandMethods:

$.post('http://localhost:3000/api/registerNumber', {
    "phone": "5567890965", 
    "terms": true
}).then(function (response) {
   console.log();
}).catch(function(error){
   console.log(error);
})

jQuery tiene su propio metodo de promesas llamado deferred y aqui usamos el deferred.then().

Para la siguiente liga: 
URL: http://localhost:3000/api/resendCode
Método HTTP: POST 
Data: {"phone":"..."}
*/


var registrarNumero = function (e) {
    e.preventDefault(); //Evita que se recargue la página y no me retorne nada. 
   
    var $numeroTelefono = $('#input-numero').val();
    
    $.post('http://localhost:3000/api/registerNumber', {
    "phone": $numeroTelefono, 
    "terms": true
    }).then(function (response) {
       console.log();
    }).catch(function(error){
       console.log(error);
    })
}


/*CUARTA PANTALLA*/

var datosUsuarioEmail = function () {
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/; //Expresión regular para validar el email. 
    
    if (regex.test($('#usuario--email').val.trim())) { //Test es un método de las expresiones regularesque verifica si hay coincidencia en la cadena de texto. Devuelve true o false. 
        return true; 
    } else {
        return false; 
    }
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

var cargarPagina = function () {
   imprimirNumeroHTML(); 
   $('#input--codigo').keyup(compararCodigos);
}



var api = {
    registro: 'http://localhost:3000/api/registerNumber',
    codigo: 'http://localhost:3000/api/resendCode'
}

var $codigoVerificacion = $('#input--codigo').val();
var $numeroTelefono = $('#input-numero').val();


var imprimirNumeroHTML = function () {
    var $telefonoLocalStorage = localStorage.getItem('celular'); 
    console.log($telefonoLocalStorage)
    var $espacionEnHTML = $('#numero-impreso');
    
    $espacionEnHTML.html($telefonoLocalStorage);
}


var compararCodigos = function () {
    if ($codigoVerificacion === localStorage.code) {
        location.href = 'crea-usuario.html'
    }
}



$(document).ready(cargarPagina);
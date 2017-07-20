/*
var api = {
    registro: 'http://localhost:3000/api/registerNumber',
    codigo: 'http://localhost:3000/api/resendCode'
}

var cronometro = function ()  {
    var time = 21; 
    var segundosFinal = $('#cronometro'); 
    
    
    
}



var registrarNumero = function () {
    
    var $numeroTelefono = $('#input-numero').val();
//    var $validarTerminos = $('#test5').is(":checked");
    
    $.post(api.codigo, {
    "phone": $numeroTelefono
    }).then(function (response) {
       alert(response.data.code);
    }).catch(function(error){
       console.log(error);
    })
}
*/


$(document).ready(cronometro);
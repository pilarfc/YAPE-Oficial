var cargarPagina = function () {
  $('#boton-continuar').click(registrarNumero);
}


var api = {
    registro: 'http://localhost:3000/api/registerNumber',
    codigo: 'http://localhost:3000/api/resendCode'
}


var registrarNumero = function () {
    
    var $numeroTelefono = $('#input-numero').val();
//    var $validarTerminos = $('#test5').is(":checked");
    
    $.post(api.registro, {
    "phone": $numeroTelefono, 
    "terms": true
    }).then(function (response) {
       alert(response.data.code);
    }).catch(function(error){
       console.log(error);
    })
}



$(document).ready(cargarPagina);
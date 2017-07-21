var cargarPagina = function () {
  $('#boton-continuar').click(registrarNumero);
}


var api = {
    registro: 'http://localhost:3000/api/registerNumber',
    codigo: 'http://localhost:3000/api/resendCode'
}



var registrarNumero = function () {
    
      
     var $terminos = true; 
     var $numeroTelefono = $('#input-numero').val();
    
    $.post(api.registro, {
    "phone": $numeroTelefono, 
    "terms": $terminos
    }).then(function (response) {
       alert(response.data.code);
        almacenarInformacion(response);
    }).catch(function(error){
       console.log(error);
    })
}

var almacenarInformacion = function (response) {
    
    var $terminos = true; 
    var $numeroTelefono = $('#input-numero').val();
    
    localStorage.setItem("celular", $numeroTelefono);
    localStorage.setItem("terms", $terminos);
    localStorage.setItem("codigo", response.data.code); 
}



$(document).ready(cargarPagina);
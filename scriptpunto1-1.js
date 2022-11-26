//1
var nombre = document.getElementById('nombre');
var subjet = document.getElementById('subjet');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var error = document.getElementById('error');

function enviarformulario(){
  console.log("Enviando formulario...");
  var mensajesError = [];
  if(nombre.value === null || nombre.value === ''){
    mensajesError.push('campo nombre vacio')
  }
  if(subjet.value === null || subjet.value === ''){
    mensajesError.push('Campo subject vacio')
  }
  if(email.value === null || email.value === ''){
    mensajesError.push('Campo email vacio')
  }
  if(phone.value === null || phone.value === ''){
    mensajesError.push('Campo phone vacio')
  }
 error.innerHTML = mensajesError.join(', ');
  return false;
}
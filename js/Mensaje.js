function Enviar(){
    let nombre=document.getElementById('nombre').value;
    let primerapellido=document.getElementById('papellido').value;
    let segundoapellido=document.getElementById('sapellido').value;
    let Correoelectronico=document.getElementById('celectronico').value;
    let textarea=document.getElementById('textarea').value;
    alert(`Sus respuestas son:\nNombre: ${nombre}\nPrimer Apellido: ${primerapellido}\nSegundo Apellido: ${segundoapellido}\nCorreo Electronico: ${Correoelectronico}\nMensaje : ${textarea}\nAl presionar ACEPTAR seras redirigido a la pagina de inicio`)
}
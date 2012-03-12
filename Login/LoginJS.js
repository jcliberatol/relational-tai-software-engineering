/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*
window.onload = function(){
    var boton = document.getElementById('boton2');
    boton.addEventListener('click',validar,false);
}
*/


    
function leer(){
    if (Modernizr.boxshadow){
        alert("SI sombra caja");
    }
    else{
        alert("NO sombra caja");
    }
    /*
    if(document..columnas.login.formularioInicio.caja.usuario.value.length<5){
        alert("Ingrese al menos 5 caracteres");
        document.columnas.login.caja.usuario.value="";
    }*/
    validar(document.getElementById('nombreInicio').value)

}

function verificarEntrada(control)
{
  if (control.value=='')
    alert('Debe ingresar datos');
}

function validar(nombre,tamaño){
    if(nombre.length<tamaño){
        alert("Ingrese al menos 5 caracteres");
    }
}

/*
function login(){
    var nombre = document.getElementById('nombreInicio').value;
    var prueba = comprobarNombre(nombre);
    if(prueva==false){
        alert("Datos incorrectos!!");
    }
    document.getElementById('comp').value = prueba;
}

function comprobarNombre(nombre){
    var caracteres = new Array(nombre.length);
    var bandera=true;
    
    for(var i=0;i<nombre.length;i++){
        caracteres[i]=nombre.charAt(i);
    }
    for(var j=0;j<nombre.length;j++){
        if(!( ((caracteres[j].charCodeAt(0)>64)&&(caracteres[j].charCodeAt(0)<91))||
              ((caracteres[j].charCodeAt(0)>96)&&(caracteres[j].charCodeAt(0)<123))||
              ((caracteres[j].charCodeAt(0)>47)&&(caracteres[j].charCodeAt(0)<58)) )){
                bandera = bandera && false;
        }
    }
    return bandera;
}
*/
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var numero1;
var numero2;
var respuesta;
var CronoID = null;
var CronoEjecutandose = false;
var segundos=0;

function InicializarCrono () {
    segundos = 0;
}

function MostrarCrono() {
    var ValorCrono = segundos;
    document.getElementById('time').value = ValorCrono;
    CronoID = setTimeout("MostrarCrono()", 1000);
    segundos++;

}

function IniciarCrono () {
    DetenerCrono();
    InicializarCrono();
    MostrarCrono();
}

function setearNumeros(){
    numero1 = Math.round(Math.random()*10) + 1;
    numero2 = Math.round(Math.random()*10) + 1;
    repuesta = numero1 * numero2;
    var pregunta = numero1 + "   x   " + numero2;
    document.getElementById('question').value =  pregunta;
    document.getElementById('response').value = "";
}

function validarPregunta(tipo){
    var validado;
    
    if(tipo==0){
        validado = (numero1+numero2==respuesta);
    }
    if(tipo==1){
        validado = (numero1-numero2==respuesta);
    }
    if(tipo==2){
        validado = (numero1*numero2==respuesta);
    }
    if(tipo==3){
        validado = (numero1/numero2==respuesta);
    }
    if((tipo != 1) && (tipo != 2) && (tipo != 3) && (tipo != 0)){
        validado = 'no se puede validar';
    }
    setearNumeros();
    segundos=0;
    return validado;
}
function enterPresionado(numero, e){
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13) validarPregunta(numero);
}
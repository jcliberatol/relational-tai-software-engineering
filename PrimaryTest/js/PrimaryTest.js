/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var tiempoTotal = 0;
var pregunta = 0;
var nivel=3;
var numero1;
var numero2;
var respuesta;
var CronoID = null;
var CronoEjecutandose = false;
var segundos=0;

function inicializarEnteros(){
    
}
function MostrarCrono() {
    var ValorCrono = segundos;
    if(segundos == 10){
        pregunta++;
        setearNumerosEnteros();
        segundos = 0;
        document.getElementById("puntaje").value = pregunta;
        if(pregunta == 10){
            alert("Test Terminado!!");
            location.href='../../index.html';
        }
    }
    document.getElementById('time').value = ValorCrono;
    CronoID = setTimeout("MostrarCrono()", 1000);
    segundos++;

}

function setearNumerosEnteros(){
    numero1 = Math.round(Math.random()*10) + 1;
    numero2 = Math.round(Math.random()*10) + 1;
    repuesta = numero1 * numero2;
    for(var i =0; i<=3; i++){
        document.getElementById('btn' + i+1).value = questionArray[3][i];
    }
    document.getElementById('btn1').focus();
}

function validarRespuesta(tipo){
    var validado;
    
    setearNumerosEnteros();
    tiempoTotal = tiempoTotal + segundos;
    segundos=0;
    return validado;
}
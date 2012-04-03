/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var tiempoTotal = 0;
var preguntaContador=0;
var nivel=3;
var preguntasCorrectas=0;
var numero1;
var numero2;
var respuesta;
var CronoID = null;
var CronoEjecutandose = false;
var segundos=0;
var pregunta;

function inicializarEnteros(){
    
}
function MostrarCrono() {
    var ValorCrono = segundos;
    if(segundos == 10){
        preguntaContador++;
        segundos = 0;
        document.getElementById("puntaje").value = preguntaContador;
        if(pregunta == 10){
            location.href='../../index.html';
        }
    }
    document.getElementById('time').value = ValorCrono;
    CronoID = setTimeout("MostrarCrono()", 1000);
    segundos++;

}

function crearSetPregunta(){
    pregunta =  GenQuestion(10,100,2);
}

function getPregunta(){
    return pregunta[0];
}

function getRespuesta(n){
    return pregunta[4][n];
}

function getRespuestaVerdadera(){
    return pregunta[3];

}

function validarRespuesta(n){
    if(n == pregunta[5]){
        preguntaContador++;
        preguntasCorrectas++;
        crearSetPregunta();
    }
    else{
        preguntaContador++;
        crearSetPregunta();
    }
}

function setearNumerosEnteros(){
    
}
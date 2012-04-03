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
        document.getElementById('puntaje').value = preguntaContador;
//        crearSetPresgunta();
//        var eleccion = (pregunta[5]+2)%4;
//        document.getElementById('btn' + eleccion ).click();
        if(pregunta == 10){
            location.href='../../index.html';
        }
    }
    document.getElementById('time').value = ValorCrono;
    CronoID = setTimeout("MostrarCrono()", 1000);
    segundos++;

}

function crearSetPregunta(){
    pregunta = LevelQuestion(3);
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
        tiempoTotal = tiempoTotal + segundos;
        document.getElementById('puntaje').value = "NaN";
        alert("correcto");
        crearSetPregunta();
        setearNumerosEnteros();
    }
    else{
        tiempoTotal = tiempoTotal + segundos;
        preguntaContador++;
        alert(":(");
        crearSetPregunta();
        setearNumerosEnteros();
    }
}

function setearNumerosEnteros(){
    for(var i = 1; i < 5; i++){
        document.getElementById('btn' + i).value = pregunta[4][i-1];
    }
}
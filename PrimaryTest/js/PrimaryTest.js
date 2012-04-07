/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var tiempoTotal = 0;
var numeroPregunta=0;
var nivel=7;
var preguntasCorrectas=0;
var CronoID = null;
var CronoEjecutandose = false;
var segundos=0;
var pregunta;
var tiempo;

function inicializarEnteros(){

}
function MostrarCrono() {
    if(segundos == tiempo){
        segundos=0;
        var eleccion = (pregunta[5]+2)%4;
        validarRespuesta(eleccion);
        if(numeroPregunta == 10){
            location.href='../../index.html';
        }
    }
    document.getElementById('time').value = tiempo - segundos;
    segundos++;
    CronoID = setTimeout("MostrarCrono()", 1000);
}

function crearSetPregunta(){
    pregunta = LevelQuestion(nivel);
    tiempo = pregunta[6];
    createCookie("pregunta", pregunta[0], 1);
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
        numeroPregunta++;
        preguntasCorrectas++;
        tiempoTotal = tiempoTotal + segundos;
        segundos=0;
        document.getElementById('textoAciertos').value = preguntasCorrectas;
        document.getElementById('textoDesaciertos').value = numeroPregunta - preguntasCorrectas;
        document.getElementById('numeroPregunta').value = '#'+numeroPregunta;
        crearSetPregunta();
        setearNumerosEnteros();
    }
    else{
        tiempoTotal = tiempoTotal + segundos;
        segundos=0;
        numeroPregunta++;
        document.getElementById('textoAciertos').value = preguntasCorrectas;
        document.getElementById('textoDesaciertos').value = numeroPregunta - preguntasCorrectas;
        document.getElementById('numeroPregunta').value = '#'+numeroPregunta;
        crearSetPregunta();
        setearNumerosEnteros();
    }
}

function setearNumerosEnteros(){
    for(var i = 1; i < 5; i++){
        document.getElementById('respuesta' + i).value = pregunta[4][i-1];
    }
    if(numeroPregunta != 0)
          document.getElementById('SubHtml').contentDocument.location.reload(true);
}
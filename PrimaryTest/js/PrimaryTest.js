/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function generarNumero(){
    return numero=Math.round(Math.random()*10) + 1;    
}
function validarPregunta(tipo){
    var numero1 = document.getElementById('number1').value;
    var numero2 = document.getElementById('number2').value;
    var respuesta = document.getElementById('response').value;
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
    document.getElementById('response').value = '';
    document.getElementById('number1').value = generarNumero();
    document.getElementById('number2').value = generarNumero();
    return validado;
}
function enterPresionado(numero, e){
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13) validarPregunta(numero);
}
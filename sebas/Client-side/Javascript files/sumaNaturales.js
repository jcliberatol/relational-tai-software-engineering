
	obtenerNivel();

	function obtenerNivel()
	{
	}
		

		var numeroNivel = new Array();
		
		for (var i = 0; i < 9; i++) 
		{
			numeroNivel[i]=(i+1);	
		}

	var numero1 = Math.round((1000-0)*Math.random()+1); //Intervalo de los numeros 
	document.getElementById('numero1').value = numero1;  //Asignar el numero al formulario 
	var numero2 = Math.round((1000-0)*Math.random()+1); //intervalo de los numeros
	document.getElementById('numero2').value = numero2; //Asignar el numero al formulario
	var resu = numero1 + numero2;
	
	

	var numerosTest = new Array(); 
	numerosTest[0]=1;
	numerosTest[1]=1;
	numerosTest[2]=1;
	numerosTest[3]=1;

 	var numDesfase=0;
 	var numDesfase2=0;
 	var numDesfase3=0;


	while(numDesfase==0){
		numDesfase = Math.round((0-6)*Math.random()+3);
						}
	numDesfase = numDesfase*10;

	while(numDesfase2==0){
		numDesfase2 = Math.round((0-6)*Math.random()+3);
						}
		numDesfase2 = numDesfase2*10;

	while(numDesfase3==0){
		var numDesfase3 = Math.round((0-6)*Math.random()+3);
						 }
	

	iniciar();
	
	function iniciar()
	{
	
		var a = 'boton'; 
		var numeroElegido=(Math.round((4-0.001)*Math.random()+0.499));
		numerosTest[numeroElegido] = resu;
	
		if(numeroElegido==1)
		{
		a='r1';
		document.getElementById(a).value = resu;
		document.getElementById('r2').value=resu + numDesfase;
		document.getElementById('r3').value=resu + numDesfase2;
		document.getElementById('r4').value=resu + numDesfase3;
		}

		if(numeroElegido==2)
		{
		a='r2';
		document.getElementById(a).value = resu;
		document.getElementById('r1').value=resu + numDesfase;
		document.getElementById('r4').value=resu + numDesfase2;
		document.getElementById('r3').value=resu + numDesfase3;
		}


		if(numeroElegido==3)
		{
		a='r3';
		document.getElementById(a).value = resu;
		document.getElementById('r4').value=resu + numDesfase;
		document.getElementById('r1').value=resu + numDesfase2;
		document.getElementById('r2').value=resu + numDesfase3;
		}


		if(numeroElegido==4)
		{
		a='r4';
		document.getElementById(a).value = resu;
		document.getElementById('r2').value=resu + numDesfase;
		document.getElementById('r3').value=resu + numDesfase2;
		document.getElementById('r1').value=resu + numDesfase3;
		}

	}


	function recogerNumeros1()
	{

		if(document.getElementById('r1').value!=resu)
		{
		alert("error");
		}

		else{
		alert("muy bien");
		}

		document.location.href = document.location.href;
	}



	function recogerNumeros2()
	{
  
		if(document.getElementById('r2').value!=resu)
		{
		alert("error");
		}

		else
		{
		alert("muy bien");
		}
	
		document.location.href = document.location.href;
	}



	function recogerNumeros3()
	{

		if(document.getElementById('r3').value!=resu)
		{
		alert("error");
		}

		else
		{
		alert("muy bien");
		}

		document.location.href = document.location.href;
	}


	function recogerNumeros4()
	{

		if(document.getElementById('r4').value!=resu)
		{
  		alert("error");
		}
		
		else{
		alert("muy bien");
		}
		
		document.location.href = document.location.href;
	}	

function genRangeNumber(start,finish){
	return (Math.round((finish-start)*Math.random())+start);
}

function strCatSum(str2,num){
	str2= str2 + " + " + num;
	return str2;
}

function strCatSub(str2,num){
	str2= str2 + " - " + num;
	return str2;
}

function strCatMul(str2,num){
	str2= str2 + " \\times " + num;
	return str2;
}

function strCatDiv(str2,num){
	str2= str2 + " \\div " + num;
	return str2;
}

function strStart(){
	return "${";
}

function strFinish(str){
	return str+"}$"
}

function GenQuestion(startRange,finishRange,Operations){
 	//decide the operations and the numbers
 	Operations++;
 	var arr = new Array(Operations);
 	var ope = new Array(Operations-1);
        
 	for (var i = 0; i < Operations; i++) {
 		if (i!= 0) {
 			ope[i-1]=genRangeNumber(1,4);
                        if(ope[i-1]==1){
                            var aux = genRangeNumber(startRange,finishRange);
                            arr[i-1] = aux*arr[i-1];
                            arr[i]= aux;
 			}
                        else{
                            arr[i]=genRangeNumber(startRange,finishRange);
                        }
 		}
 		else{
 			arr[i]=genRangeNumber(startRange,finishRange);
 		}
  	}
  	//back up the strings used
  	var arrOld = arr;
        var opeOld = ope;

  	//Calculate the LaTex string used

  	var LaTexString = strStart();
  	LaTexString = LaTexString + arr[0];
  	
  	for (i = 1; i < arr.length; i++) {
  		if(ope[i-1]==1){LaTexString=strCatDiv(LaTexString,arr[i]);}
  		if(ope[i-1]==2){LaTexString=strCatMul(LaTexString,arr[i]);}
                if(ope[i-1]==3){LaTexString=strCatSub(LaTexString,arr[i]);}
                if(ope[i-1]==4){LaTexString=strCatSum(LaTexString,arr[i]);}  	
  	}
  	
        LaTexString=strFinish(LaTexString);
  	//compute the result according to operator precedence
  	//first iteration
  	for (i = 0; i < ope.length; i++) {
  		if(ope[i]==1){
  			arr[i+1]=(arr[i]/arr[i+1]);
  			arr[i]=0;
  			ope[i]=4;
                        if(i>0){
                            if(ope[i-1]==3){
                                ope[i]=3;
                            }
                        }
  		}
  		if(ope[i]==2){
  			arr[i+1]= arr[i]*arr[i+1];
  			arr[i]=0;
  			ope[i]=4;
                        if(i>0){
                            if(ope[i-1]==3){
                                ope[i]=3;
                            }
                        }
  		}
  	}
  	//second iteration
  	var output=0;
  	for (i = 0; i < ope.length; i++) {
  		if(ope[i]==3){
                        arr[i+1] = arr[i] - arr[i+1];
  		}
  		if(ope[i]==4){
                        arr[i+1] = arr[i] + arr[i+1];
  		}
  	}
        output = arr[arr.length - 1];
  	//crear arreglo de numeros de desfase
  	var numDesfase=0;
        var numDesfase1=0;
 	var numDesfase2=0;
 	var numDesfase3=0;


	while(numDesfase==0){
		numDesfase = Math.round((0-8)*Math.random()+4);
	}
	numDesfase = numDesfase*10;

        while((numDesfase1==0)||(numDesfase==numDesfase1)){
		numDesfase1 = Math.round((0-8)*Math.random()+4);
	}
	numDesfase1 = numDesfase1*10;

	while((numDesfase2==0)||(numDesfase1==numDesfase2)||(numDesfase==numDesfase2)){
		numDesfase2 = Math.round((0-8)*Math.random()+4);
	}
		numDesfase2 = numDesfase2*10;

	while((numDesfase3==0)||(numDesfase1==numDesfase3)||(numDesfase2==numDesfase3)||(numDesfase==numDesfase3)){
		numDesfase3 = Math.round((0-8)*Math.random()+4);
	}
		numDesfase3 = numDesfase3*10;

	var optionArray = new Array(4);

	optionArray[0]=(output+numDesfase);
	optionArray[1]=(output+numDesfase1);
	optionArray[2]=(output+numDesfase2);
	optionArray[3]=(output+numDesfase3);

	//poner la respuesta correcta en los numeros de desfase
	var rightPosition=genRangeNumber(0,3);

	optionArray[rightPosition]=output;
	var questionArray= new Array(6);
	questionArray[0]=LaTexString;
	questionArray[1]=arrOld;
	questionArray[2]=opeOld;
	questionArray[3]=output;
	questionArray[4]=optionArray;
	questionArray[5]=rightPosition;

	return questionArray;
 }
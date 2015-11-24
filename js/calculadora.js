var aux;
 var operando1;
 var noperando1=0;
 var operando2;
 var noperando2=0;

function butOnClick(target){
 
 iteNumeros = document.getElementById('iteNumeros');

 if (target.id == "but0"){
 	iteNumeros.value += 0;
 }else if (target.id == "but1"){
 	iteNumeros.value += 1;
 }else if (target.id == "but2"){
 	iteNumeros.value += 2;
 }else if (target.id == "but3"){
 	iteNumeros.value += 3;
 }else if (target.id == "but4"){
 	iteNumeros.value += 4;
 }else if (target.id == "but5"){
 	iteNumeros.value += 5;
 }else if (target.id == "but6"){
 	iteNumeros.value += 6;
 }else if (target.id == "but7"){
 	iteNumeros.value += 7;
 }else if (target.id == "but8"){
 	iteNumeros.value += 8;
 }else if (target.id == "but9"){
 	iteNumeros.value += 9;
 }

 if(target.id == "butMas"){
 	operando1 = iteNumeros.value;
 	noperando1 = parseInt(operando1);
 	iteNumeros.value = "";
 	aux = "suma";
 }else if (target.id == "butMenos"){
 	operando1 = iteNumeros.value;
 	noperando1 = parseInt(operando1);
 	iteNumeros.value = "";
 	aux = "resta";
 }else if (target.id == "butPor"){
 	operando1 = iteNumeros.value;
 	noperando1 = parseInt(operando1);
 	iteNumeros.value = "";
 	aux = "multiplicacion";
 }else if (target.id == "butEntre"){
 	operando1 = iteNumeros.value;
 	noperando1 = parseInt(operando1);
 	iteNumeros.value = ""; 
 	aux = "division";
 }

 if(target.id == "butIgual"){
 	operando2 = iteNumeros.value;
 	noperando2 = parseInt(operando2);
	if(aux == "suma"){
 		iteNumeros.value = String(noperando1 + noperando2);
 	}
 	else if (aux == "resta"){
 		iteNumeros.value = String(noperando1  - noperando2);
 	}
 	else if (aux == "multiplicacion"){
 		iteNumeros.value = String(noperando1 * noperando2);
 	}
 	else if (aux == "division"){
 		iteNumeros.value = String( noperando1 / noperando2);
 	}
}

if (target.id == "butC"){
	iteNumeros.value="";
}

}
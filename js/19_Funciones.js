'use strict'

//Funciones

var num1 = parseInt(prompt("Numero uno: "));
var num2 = parseInt(prompt("Numero dos: "));

//Parametros opcionales son parametros que ya vienen inicializados

function consola(num1, num2){
		console.log("Suma: "+(num1+num2));
		console.log("Resta: "+(num1-num2));
		console.log("Multiplicación: "+(num1*num2));
		console.log("División: "+(num1/num2));	
}

function pantalla(num1,num2){
		document.write("Suma: "+(num1+num2)+"<br>");
		document.write("Resta: "+(num1-num2)+"<br>");
		document.write("Multiplicación: "+(num1*num2)+"<br>");
		document.write("División: "+(num1/num2)+"<br>");
}

function calculadora(num1, num2, mostrar=true){
	
	if (mostrar==false) {
		consola(num1,num2);
	}else{
		pantalla(num1,num2);
	}

	return "Hola soy la calculadora";
}

console.log(calculadora(num1, num2));

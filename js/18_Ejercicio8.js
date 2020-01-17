'use strict'

/*
	Calculadora:
		- Pida 2 numeros por pantalla
		- Si metemos mal un numero los vuelva a pedir
		- En el cuerpo de la pagina, n una alerta y por consola el resultado de sumar
		  resta, multiplicar y dividir esos 2 numeros
*/

var num1 = Number(prompt("Ingrese el primer numero:"));
var num2 = Number(prompt("Ingrese el segundo numero numero:"));

while(isNaN(num1)||isNaN(num2)){
	if (isNaN(num1)) {
		num1 = Number(prompt("Ingrese el primer numero:"));
	}else if(isNaN(num2)){
		num2 = Number(prompt("Ingrese el primer numero:"));
	}
}

document.write("<h1>CALCULADORA</h1>");

document.write(num1+" + "+num2+" = "+(num1+num2)+"<br>");
document.write(num1+" - "+num2+" = "+(num1-num2)+"<br>");
document.write(num1+" * "+num2+" = "+(num1*num2)+"<br>");
document.write(num1+" / "+num2+" = "+(num1/num2)+"<br>");

alert("CALCULADORA");

alert(num1+" + "+num2+" = "+(num1+num2));
alert(num1+" - "+num2+" = "+(num1-num2));
alert(num1+" * "+num2+" = "+(num1*num2));
alert(num1+" / "+num2+" = "+(num1/num2));

console.log("CALCULADORA");

console.log(num1+" + "+num2+" = "+(num1+num2));
console.log(num1+" - "+num2+" = "+(num1-num2));
console.log(num1+" * "+num2+" = "+(num1*num2));
console.log(num1+" / "+num2+" = "+(num1/num2));

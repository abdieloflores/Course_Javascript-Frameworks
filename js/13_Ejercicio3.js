'use strict'

/*
	Hacer un programa que muestre todos los numero entre dos numero introducidos por el usuario
*/

var num1 = parseInt(prompt("Ingrese el numero 1: ",0));
var num2 = parseInt(prompt("Ingrese el numero 2: ",0));

document.write("<h1>Números entre "+num1+" y "+num2+"</h1>");

for (var i = num1+1; i < num2; i++) {
	document.write(i+"</br>");
}
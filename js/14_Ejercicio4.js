'use strict'

/*
	Mostrar todos los numero impares quehay entre 2 numeros
*/

var num1 = parseInt(prompt("Ingrese el número 1: ",0));
var num2 = parseInt(prompt("Ingrese el número 2: ",0));

for (var i = num1+1; i < num2; i++) {
	if (i%2!=0) {
		console.log(i);
	}
}


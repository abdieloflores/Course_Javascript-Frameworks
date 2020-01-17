'use strict'

/*
 Mostrar todos los numeros divisores de un numero introducio en un prompt
*/

var num1 = parseInt(prompt("Ingrese un número: ",1));

for (var i = 1; i <=num1; i++) {
	if (num1%i==0) {
		console.log(i+" es divisor de "+num1);
	}
}
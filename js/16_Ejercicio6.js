'use strict'

/*
	Programa que nos diga si un numero es par o impar, debe tener prompt, comprobar si
	un numero o es valido vuelva a pedir numero y mostrar par o impar.

*/

var num1 = parseInt(prompt("Ingrese el numero: ",0));

while(isNaN(num1)){
	num1 = parseInt(prompt("Ingrese el numero: ",0));
}
if(num1%2==0){
	alert("Es un numero par");
}else{
	alert("Es un número impar");
}
//Pruebas con let y var
'use strict'


//Prueba con var
var num1 = 40;
console.log(num1);//40

if (true) {
	num1 = 50;
	console.log(num1);//50
}

console.log(num1); //50



//Prueba con let
num1 = 40;
console.log(num1);//40

if (true) {
	let num1 = 50;
	console.log(num1);//50
}

console.log(num1); //40

//Con let solo actuamos a nivel de bloque (declaracion en la que este) y con var es global


'use strict'


//Puedo acceder a las variables globales desde cualquier funcion, pero si hay una variable creada dentro de 
//una función no se puede acceder de otro lado que no sea la funcion.

function holaMundo(texto){

	var hola_mundo = "Hola, soy una variable dentro de una función";
	console.log(texto);
	console.log(num);
	console.log(num.toString());//Convirtiendo a string
	console.log(hola_mundo);
}

var num = 50;
var texto = "Hola Mundo, soy una variable String";

holaMundo(texto);
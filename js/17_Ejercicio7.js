'use strict'

/*
	Tabla de multiplicar de un numero introducido por pantalla
*/

var num1 = parseInt(prompt("De que numero quieres la tabla: ",1));

document.write("<h1>Tabla del "+num1+"<h1>");
for (var i = 1; i <=10; i++) {
	document.write("<h4>"+num1+" x "+i+" = "+num1*i+"</br></h4>");
}
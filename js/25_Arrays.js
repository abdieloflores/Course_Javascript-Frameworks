'use strict'

//Arreglos o Matrices basicas en JavaScript

var nombre = "Abdiel Flores";

var nombres = ["Abdiel Flores",24,true,"hombre"];

var lenguajes = new Array("PHP","JAVASCRIPT","GO","JAVA");

console.log(nombres[0]);
console.log(lenguajes);

//Longitud de un array

console.log(nombres.length);

//Recorrer arrays con ciclo For ********************************************

document.write("<h1>Lenguajes de programación For</h1>")
document.write("<ul>");
	for (var i = 0; i < lenguajes.length; i++) {
	 document.write("<li>"+lenguajes[i]+"</li>");
	}
document.write("</ul>");

//Recorrer arrays con ciclo ForEach ****************************************
/*
	SINTAXIS

	arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
	}[, thisArg]);

	callback:
		Función a ejecutar por cada elemento, que recibe tres argumentos:
			currentValue:
				El elemento actual siendo procesado en el array.
			index (opcional):
				El índice del elemento actual siendo procesado en el array.
			array (opcional):
				El vector en el que forEach() esta siendo aplicado.
			thisArg (opcional):
				Valor que se usará como this cuando se ejecute el callback.
*/

document.write("<h1>Lenguajes de programación ForEach</h1>")
document.write("<ul>");

lenguajes.forEach((elemento,index,array)=>{
	document.write("<li>"+index+" - "+elemento+"</li>");
});

document.write("</ul>");

//Recorrer arrays con ciclo For in ********************************************

document.write("<h1>Lenguajes de programación For In </h1>")
document.write("<ul>");

for (let indice in lenguajes) {
	document.write("<li>"+indice+".- "+lenguajes[indice]+"</li>");
}

document.write("</ul>");


//BUSQUEDAS EN UN ARRAY

	//Forma 1, regresa lo buscado
	var busqueda = lenguajes.find(function(lenguaje){
		return lenguaje == "PHP";
	});

	console.log(busqueda);

	//Forma 2, regresa lo buscado
	var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

	console.log(busqueda);

	//Forma 3, regresa el indice de lo buscado
	var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

	console.log(busqueda);

	var precios = [10,20,30,50];

	busqueda = precios.some(precio => precio > 20);//Si existe algo mayo a lo indicado
	console.log(busqueda);


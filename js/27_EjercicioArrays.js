'use strict'

/*
	1.- Programa que pida 6 numeros por pantalla y los meta en un array
	2.- Mostrar el array entero (todos los elementos en el cuerpo de la pagina y en la consola)
	3.- Ordenarlo y Mostrarlo
	4.- Invertir el ordeny mostrarlo
	5.- Mostrar cuantos elementos tiene el array
	6.- Busqueda de un valor introducido por el usuario y que nos diga si esta en el array y su posición
*/

//Parte 1
	//var numeros = new Array(6);
	var num = [];

	for (var i = 0; i <6; i++) {
		//numeros[i] = parseInt(prompt("Introduce un número: ",0));
		num.push(parseInt(prompt("Introduce un número: ",0)));
	}

//Parte 2
	document.write("<h1>Array</h1>");
	document.write("<ul>");
		for (var i = 0; i < num.length; i++) {
		 document.write("<li>"+num[i]+"</li>");
		}
	document.write("</ul>");

	num.forEach((elemento)=>{
		console.log(elemento);
	});

//Parte 3
	num.sort();
	console.log(num);

//Parte 4
	num.reverse();
	console.log(num);

//Parte 5
	var cantidad = num.length;
	console.log("El array tiene "+cantidad+" elementos.")

//Parte 6
	var busqueda = parseInt(prompt("Ingrese el número a buscar: ",0));

	var posicion = num.findIndex(numero => numero == busqueda);

	if (posicion == -1) {
		console.log("NO SE ENCONTRO");
	}else{
		console.log("EL dato si existe en la posición "+posicion);
	}
'use strict'

/*
	Es una funcion que no tiene nombre y se puede guardar en una variable, y se utiliza para hacer callbacks.
*/

var pelicula = function (nombre){
	return "La pelicula es "+nombre;
}


//Callback

function sumame(num1, num2,SumaYMuestra,SumaPorDos){
	var sumar = num1+num2;

	SumaYMuestra(sumar);
	SumaPorDos(sumar);

	return sumar;
}


sumame(5,7,function(dato){
	console.log("La suma es: "+dato);
},function(dato){
	console.log("La suma por dos es: "+(dato*2));
});

//Funciones de flecha es lo mismo que callback pero en vez de la palabra function en el parametro se pone una flecha

function sumame2(num1, num2,SumaYMuestra,SumaPorDos){
	var sumar = num1+num2;

	SumaYMuestra(sumar);
	SumaPorDos(sumar);

	return sumar;
}


sumame2(5,7,dato=>{
	console.log("La suma es: "+dato);
},dato=>{
	console.log("La suma por dos es: "+(dato*2));
});
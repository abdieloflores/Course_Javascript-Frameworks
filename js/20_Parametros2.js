'use strict'

//Parametos REST y SPREAD

/*
	Parametro REST sirve cuando no sabes cuantos vas a recibir y colocas trs puntos y colocas el nombre de la varibale y
	lo guarda en un array, asi mismo lo muestra.
*/

function listadoFrutas(fruta1, fruta2,...todasLasFrutas){
	console.log("Fruta 1: "+fruta1);
	console.log("Fruta 2: "+fruta2);
	console.log("Resto de frutas: "+todasLasFrutas);
}
listadoFrutas("Naranja", "Manzana","Pera","Sandía","Melon");

/*
	Hacer un SPREAD de parametros
	
 	Haces un array de los parametros y luego lo ingresas con ... para que lo tome como parametros independientes
*/

var arregloFrutas =["Kiwi","Durazno"];
listadoFrutas(...arregloFrutas,"Naranja", "Manzana","Pera","Sandía","Melon");
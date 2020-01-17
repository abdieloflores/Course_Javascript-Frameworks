'use strict'

var categorias = ["Acción", "Terror","Comedia"];

var peliculas = ["La verdad duele","La vida es bella","El torero"];

var cine = [categorias, peliculas];

//console.log(cine);

console.log(cine[0][1]);
console.log(cine[1][2]);

//Operaciones con arrays

peliculas.push("Batman");//Agregar elemento al array
console.log(peliculas);

peliculas.pop();//Elimina el ultimo elemento de un array
console.log(peliculas);

var ubicacion = peliculas.indexOf("El torero")//Buscando elemento en el array
if (ubicacion >-1) {
	peliculas.splice(ubicacion,1);//Eliminar elemento de un array e indicar cuantos despues 
}
console.log(peliculas);

//Convertir array a texto separado por comas
var convertir = peliculas.join();
console.log(convertir);

//Convertir cadena a array separado

var cadena = "Texto1, texto2, texto3";
var cadenaArray = cadena.split(", ");
console.log(cadenaArray);

//ORDENAR ARREGLOS
console.log(categorias);

categorias.sort();//Lo ordena de menor a mayor
console.log(categorias);

categorias.reverse();//Voltea el arreglo
console.log(categorias);
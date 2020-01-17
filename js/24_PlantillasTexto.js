'use strict'

//Plantillas de texto JavaScript

var nombre = prompt("Ingresa un nombre: ");
var apellidos = prompt("Ingresa los apellidos: ");

/* Para concatenar un texto con una platilla de manera multinilinea se puede realizar de la siguiente manera*/

var texto =`
	<h1>Hola que tal</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);
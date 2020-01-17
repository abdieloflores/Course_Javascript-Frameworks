'use strict'

/*
	DOM Document Object Model

	Todos los scripts de DOM deben ir al final del body para que los pueda cargar correctamente y lea todo.
*/

function cambiacolor(color) {
    caja.style.color = color;
}

function cambiafondo(color) {
    caja.style.background = color;
}

var caja = document.getElementById('caja');

console.log(caja);

caja.innerHTML = "Texto diferente";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
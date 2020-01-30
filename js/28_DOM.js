'use strict'

/*
	DOM Document Object Model

	Todos los scripts de DOM deben ir al final del body para que los pueda cargar correctamente y lea todo.
*/

//SELECCION DE ELEMENTOS POR ID CONCRETO
function cambiacolor(color) {
    caja1.style.color = color;
}

function cambiafondo(color) {
    caja1.style.background = color;
}
//Tomando el elemento para javascript forma 1
var caja1 = document.getElementById('caja1'); //Tomando el elemento por id caja1

console.log(caja1);

caja1.innerHTML = "Texto diferente"; // Cambiar el html de el elemento
caja1.style.background = "green"; //color
caja1.style.padding = "20px";
caja1.style.color = "white";

//Tomando el elemento para javascript forma 2

var caja2 = document.querySelector("#caja2");

caja2.innerHTML = "CAJA 2 MODIFICADO CON JAVASCRIPT";
caja2.style.background = "red"; //color
caja2.style.padding = "20px";
caja2.style.color = "white";

//SELECCIONAR CLASES Y DIVS CON JAVASCRIPT

//Seleccionar elementos por su etiqueta

var todoslosdivs = document.getElementsByTagName('div');
console.log(todoslosdivs);

var contenido = todoslosdivs[2].textContent;
console.log(contenido);

var seccion = document.querySelector("#miseccion");
var linea = document.createElement("hr");

var valor;
for (valor in todoslosdivs) {
    if (typeof todoslosdivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todoslosdivs[valor].textContent);
        parrafo.append(texto)
        seccion.append(parrafo);
    }
}
seccion.append(linea);
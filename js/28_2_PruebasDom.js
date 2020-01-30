'use strict'
var divsRojos = document.getElementsByClassName("rojo");
var divAmarillo = document.getElementsByClassName("amarillo");

for (const indice in divsRojos) {
    divsRojos[indice].style.padding = "2rem";
    divsRojos[indice].style.background = "red";
}
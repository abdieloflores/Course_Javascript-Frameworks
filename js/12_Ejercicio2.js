'use strict'

/*
Utilizando un bucle mostrar la suma y la media de los numeros introducidos asta introducir un numero negativo
y ahi mostrar el resultado.
*/

var num;
var suma=0;
var contador=0;

do{
	num = parseInt(prompt("Ingrese un numero: ",0));
	if(isNaN(num)){
		num=0;
	}else if(num>=0){

		suma += num;
		contador++;
	}
}while(num>=0);

alert("La suma de los numero ingresados es: "+suma);
alert("La media es: "+(suma/contador));
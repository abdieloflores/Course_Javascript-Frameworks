'use strict'

/*
	Pedir 2 numeros, cual es mayo, cual es menor y si son iguales
	Si lo numero no son numero o son menor o igual a 0 volver apedir los datos.
*/

var num1;
var num2;

while(true){
	num1 = parseInt(prompt("Introduce el 1er. número: ",0));
	num2 = parseInt(prompt("Introduce el 2do. número: ",0));

		if (num1==num2) {
			alert("Los numero son iguales")
			break;
		}else if(num1>num2){
				alert(num1+" es mayor que "+num2);
				break;
		}else if(num2>num1){
				alert(num2+" es mayor que "+num1);
				break;
		}else if (num1<=0||num2<=0||isNaN(num1)||isNaN(num2)) {
			alert("Introduce solo numeros mayores a 0.")
		}
}
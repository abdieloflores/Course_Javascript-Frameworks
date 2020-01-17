'use strict'

//Operadores
console.log("\nOPERADORES\n\n");
var num1 = 10;
var num2 = 35;
var suma = num1+num2;
var resta = num1-num2;
var multi = num1*num2;
var divi = num1/num2;
var modulo = num1%num2;

console.log("La suma de los numero es: ",suma);
console.log("La resta de los numero es: ",resta);
console.log("La multiplicacion de los numero es: ",multi);
console.log("La division de los numero es: ",divi);
console.log("El modulo de los numero es: ",modulo);

//Tipo de Datos
var entero = 44;
var flotante = 3.567;
var texto = "Hola 'que' tal";
var texto2 = 'Hola que "tal"';
var booleano = true;

//Conversiones

console.log("\nCONVERSIONES\n\n");


var entero_text = "22";
var entero_float = "2.57";

console.log(Number(entero_text)+5); //Number convierte string a numero;
console.log(parseInt(entero_text)+2); //parseInt convierte string a entero;
console.log(parseFloat(entero_float)+2); //parseFloat convierte string a flotante;
console.log(String(entero_text)+6); //parseInt convierte numeros a string;

//Que tipo de variable es
console.log("\nSABER QUE TIPO DE VARIABLE es\n\n");

console.log(typeof entero);
console.log(typeof flotante);
console.log(typeof texto);
console.log(typeof booleano);

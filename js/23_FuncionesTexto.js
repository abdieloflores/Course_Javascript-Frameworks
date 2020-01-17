'use strict'

//Transformacion de textos

		var num = 223;
		var texto1 = "Bienvenido al curso de JavaScript, el mejor curso del mundo.";
		var texto2 = " es el mejor";

		var dato = num.toString();//Convirtiendo numero a String
			dato = texto1.toUpperCase();//Convertir a mayusculas
			dato = texto1.toLowerCase();//Convertir a minusculas

		console.log(dato);

//Calcular longitud

		var nombre ="";

		console.log(nombre.length);//Contar cantidad de letras de un texto

		var array = ["hola",123];

		console.log(array.length);//Contar elementos del array

//Concatenar textos

		//Forma 1
		var textoTotal = texto1+texto2;

		console.log(textoTotal);

		//Forma 2

		  textoTotal = "";
		  textoTotal = texto1.concat(texto2);

		  console.log(textoTotal);

//METODOS DE BUSQUEDA

		//Si fallan regresan -1
		var busqueda = texto1.indexOf("curso");// marca a partir de que caracter esta la palabra
		var busqueda2 = texto1.lastIndexOf("curso");//Busca la ultima palabra en todo el texto
		var busqueda3 = texto1.match("curso");//Regresa un array con toda la info de la palabra encontrada
		var busqueda4 = texto1.match(/curso/g);//Regresa un array con toda la info de la palabra encontrada

		console.log(busqueda); 
		console.log(busqueda2);
		console.log(busqueda3);
		console.log(busqueda4);

		//Substraer texto de un texto
		var sub = texto1.substr(14, 5); // desde el caracter 14 solo 5 letras

		console.log(sub);

		var sub2 = texto1.charAt(5); // Solo una letra

		console.log(sub2);

		var encontrado = texto1.startsWith("Bienvenido"); // Busca al inicio del string , si la encuentra en el texto regresa true

		console.log(encontrado);

		var encontrado2 = texto1.endsWith("Bienvenido"); // Busca al final del string , si la encuentra en el texto regresa true

		console.log(encontrado2);

		var encontrado3 = texto1.includes("Bienvenido"); // Busca la palabra dentro del string , si la encuentra en el texto regresa true

		console.log(encontrado3);

//Funciones de reemplazo de texto

		var reemplazo = texto1.replace("Bienvenido","Hola, sea usted bienvenido"); //Remplaza lo buscado por el parametro
		console.log(reemplazo);

		var cortar = texto1.slice(11); //Separa el string a partir del caracter mencionado
		console.log(cortar);

		var separar = texto1.split(" "); //Mete todo el string en un array y si lo quiero separar por espacios coloco el parametro y me arroja un array separado por espacios
		console.log(separar);

		var sobrante = texto1.trim(); //Quita los espacios por delante y por detras del string
		console.log(sobrante);

//




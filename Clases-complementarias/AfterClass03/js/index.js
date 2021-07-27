// CICLOS por conteo

// index - i

// for (inicializacion; condicion; expresion final;) {
// 	// bloque de codigo que va a ser repetido o sentencia
// }

// // CICLOS CONDICIONAL

// while (condicion) {
// 	// bloque de codigo se repite infinitas veces
// }

// do {
// 	// me aseguro que se ejecute al menos una vez
// } while (condicion) {
// 	// repite codigo al cumplir la condicion
// }

// switch

// switch (variable) {
// 	case 1:
// 		// lo que pasa
// 		break;
// 	case 2:
// 		// otra cosa que pasa, seria lo mismo que else if
// 		break;
// 	case 3:
// 	// otra cosa que pasa, seria lo mismo que else if
// 		break;
// 	default:
// 		// sino pasa nada de lo anterior, que pase esto (else)
// 		break;
// }

// Ejercicio 03

// let alumnos = "";

// for (let i = 0; i < 10; i++) {
// 	alumnos += prompt("INGRESAR NOMBRE DEL ALUMNO") + "\n";
// }

// alert(alumnos);

// let alumnos = "";
// let listado = "";

// for (let i = 1; i <= 10; i++) {
//     let alumnos = prompt("ingrese el nombre del alumno");
//     listado =  alumnos + "\n" + listado;
//     console.log(listado);
// }

// alert("listado de alumnos ingresados: " + listado );

// Ejercicio 5
// let numero = prompt("SELECCIONAR PRODUCTO DEL 1 A 4");

// while (numero != 'ESC') {
// 	switch(numero) {
// 		case "1":
// 			alert("TOMATE");
// 			break;
// 		case "2":
// 			alert("PAPA");
// 			break;
// 		case "3":
// 			alert("CARNE");
// 			break;
// 		case "4":
// 			alert("POLLO");
// 			break;
// 		default:
// 			alert("ERROR");
// 			break;
// 	}
// 	numero = prompt("SELECCIONAR PRODUCTO DEL 1 A 4");
// }

// Respuesta de alumno
let numero = prompt("ingrese un numero del 1 al 4");

while (numero != 'ESC') {
	switch(numero) {
		case "1":
			alert("tomate");
			break;
		case "2":
			alert("papa");
			break;
		case "3":
			alert("cebolla");
			break;
		case "4":
			alert("zanahora");
			break;
		default:
			alert("usted no ingreso lo solicitado");
			break;
	}
	numero = prompt("ingrese un numero del 1 al 4"); // recordar no volver a declarar la variable porque reutilizamos la misma
}

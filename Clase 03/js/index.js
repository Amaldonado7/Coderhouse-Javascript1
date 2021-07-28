// REPASO

// var condicion = prompt("Ingrese respuesta");

// CONDICIONALES SIMPLES/ANIDADOS + OPERADORES LOGICOS

// if ((condicion == "si" || condicion == "SI" || condicion == "Si") && condicion != "") {
// 	alert("pasa algo");
// } else if (condicion == "quizas") {
// 	alert("pasa otra cosa");
// } else if (condicion == "no se") {
// 	alert("pasa otra cosa");
// } else {
// 	alert("pasa otra cosa totalmente distinta");
// }

// CICLOS

// for ([inicializacion];[condicion];[expresion final]) {
// 	//sentencia o declaracion
// }

// Programa me pide contar de 0 a 9

// i = index

// for (let i = 0; i < 10; i++) {
// 	alert(i);
// }

// Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
// }

// for (let i = 1; i <= 20; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
// }

// EJEMPLO 01 - CICLOS POR CONTEO: FOR

// for (let i = 1; i <= 5; i++){

// 	// En cada repeticion solicitamos un nombre
// 	let ingresarNombre = prompt("Ingrese nombre, para asignar turno" + i);
// 	// Informamos el turno asignado usando el numero de repeticion (i)
// 	alert("Turno N" + i + "Nombre: "+ ingresarNombre);
// 	if (i == 3) {
// 		break
// 	}
// }

// CICLOS CONDICIONALES: WHILE

// while (condicion) {
// 	sentencias
// }

// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//     alert("El usuario ingresó "+ entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


// CICLOS CONDICIONALES: DO.. WHILE

// let repetir = false;
// do{
// console.log("¡Solo una vez!");
// }while(repetir)

// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    console.log(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.
// }while(parseInt(numero));


// SWITCH

// let numero = 10;

// switch (numero) {
// 	case 5:
// 		console.log("respuesta es 5");
// 		break;
// 	case 8:
// 		console.log("respuesta correcta")
// 		break;
// 	default:
// 		"respuesta incorrecta"
// 		break;
// }

// Es lo mismo que haces esto:

// if (numero == 8) {
// 	console.log("respuesta correcta")
// } else if (numero == 5) {
// 	console.log("respuesta es 5");
// } else {
// 	console.log("respuesta incorrecta");
// }

// EJEMPLO DE SWITCH

// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while(entrada != "ESC" ){
//   switch (entrada) {
// 		case "ANA":
// 				alert("HOLA ANA");
// 				break;
// 		case "JUAN":
// 				alert("HOLA JUAN");
// 				break;
// 		default:
// 				alert("¿QUIÉN SOS?")
// 				break;
//   }
//   entrada = prompt("Ingresar un nombre");
// }

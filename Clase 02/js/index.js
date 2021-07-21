// 	CONDICIONALES SIMPLES

// var condicion = true;


if (condicion == false) {
	console.log("pasa algo");
} else {
	console.log("error");
}

// CONDICIONALES ANIDADAS

let numero = 10;

if (numero > 20) {
	alert("es mayor a 20");
} else if (numero > 30) {
	alert("es mayor a 30");
} else if ( numero == 10) {
	alert("es igual a 10");
} else {
	alert("no es mi numero");
}

// SOLUCIONE EJERCICIO 01

let respuesta = prompt("Tiene usted dinero?");

if (respuesta == "si") {
	alert("Gracias Usted podrá tener un plazo fijo");
} else {
	alert("Lo siento, Intentelo de nuevo en otro momento");
}


// OPERADORES LOGICOS

// && ---> and
// || ---> or

// EJEMPLO 01
let nombre = prompt("ingresar nombre");

if (nombre == "Luis" || nombre == "luis") {
	console.log("el nombre es correcto")
} else {
	console.log("ERROR")
}

// EJEMPLO 02
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido");
}

// EJEMPLO 03
let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana");
}else{
    alert("El nombre ingresado NO ES Ana");
}

// SOLUCIONE EJERCICIO 02

// DECLARAR UNA ENTRADA, PARA EL CUAL SE ESPERA UN PERSONAJE

let personaje = prompt("INGRESAR PERSONAJE DE HARRY POTTER");

// VERIFICAR SI ES UN PERSONAJE VALIDO

if ((personaje != "") && ((personaje == "Harry" || personaje == "HARRY" || personaje == "harry")|| personaje == "Ron" || personaje == "Hermione")) {
	alert("Elergiste a " + personaje);
} else {
	alert("ERROR: el personaje que ingresaste no es valido");
}

// Ejercicio 1

let usuario = localStorage.getItem('nombre');

if (usuario == null) {
	localStorage.setItem('nombre', prompt('Ingresar Nombre'));
} else {
	alert('El nombre es ' + usuario);
}

// Ejercicio 3

class Hamburguesa {

	constructor(nombre, precio, ingredientes, combo){
		// propiedades
		this.nombre = nombre;
		this.precio = precio;
		this.ingredientes = ingredientes;
		this.combo = combo;
	}
}

const hamburguesas = [];

hamburguesas.push(new Hamburguesa("Cuarto de libra", 300, ['Carne', 'Lechuga'], 1));
hamburguesas.push(new Hamburguesa("Doble Cuarto de libra", 500, ['Carne', 'Lechuga'], 2));
hamburguesas.push(new Hamburguesa("Napolitana", 400, ['Carne', 'Lechuga'], 3));
hamburguesas.push(new Hamburguesa("Pollo", 300, ['Pollo', 'Lechuga'], 4));
hamburguesas.push(new Hamburguesa("Big Mac", 300, ['carne', 'Lechuga'], 5));

console.log(hamburguesas); 

localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas));

// Solucion de alumno

// function addBurger () {
//   let inputUser = prompt("Desea ingresar una hamburguesa ( si / no)");
//   while (inputUser == "si") {
//     let inputName = prompt("Nombre:");
//     let inputPrice = parseFloat(prompt("Precio:"));
//     let inputIngredients = prompt("Ingredientes:");
//     let inputComboCode = prompt("Codigo:");
//     let inputStorage = new Hamburguesa (inputName, inputPrice,inputIngredients,inputComboCode);
//     hamburguesas.push(inputStorage);
//     const jsonStorage = JSON.stringify(hamburguesas);
//     localStorage.setItem('Hamburguesa', jsonStorage);
//     inputUser = prompt("Desea ingresar una hamburguesa ( si / no)");
//   }
// }

// addBurger();

// Ejercicio 4 

let datosAlmacenados = localStorage.getItem('hamburguesas');

if (datosAlmacenados != null) {
	let array = JSON.parse(datosAlmacenados);
	let salida = 'Seleccionar hamburguesa \n';
	for (let i = 0; i < array.length; i++) {
		salida = salida + i + "Nombre: " + array[i].nombre + " " + array[i].ingredientes + " $ " + array[i].precio + " \n";
	}
	alert(salida);
	let eleccion = parseInt(prompt("Ingresar hamburguesa"));
	if((eleccion >= 0) && (eleccion < array.length)) {
		alert("Hamburguesa seleccionada: " + array[eleccion].nombre);
	} else {
		alert("ERROR")
	}
}
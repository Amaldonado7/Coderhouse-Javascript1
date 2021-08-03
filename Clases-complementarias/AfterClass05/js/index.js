// Solucion de ejercicio 2

class Tienda {
	constructor(nombre,direccion,ciudad) {
		this.name = nombre,
		this.adress = direccion,
		this.city = ciudad;
	}

	estaAbierto(hora) {

	}
}

for (i = 0 ; i < 1 ; i++) {
	let inputName = prompt("Ingrese nombre de tienda");
	let inputAdress = prompt("Ingrese la direccion");
	let inputCity = prompt("Ingrese la ciudad");
	const inputUser = new Tienda(inputName,inputAdress,inputCity);

	for (const nombres in inputUser) {
		console.log (inputUser[nombres]);
	}
}


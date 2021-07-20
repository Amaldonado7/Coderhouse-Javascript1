// EJEMPLO ALUMNO

let CUPONPROMO = 15;

let ingresoCupon = prompt("Ingresa tu cupon");

let operacion1 = "Con " + ingresoCupon + " ya te aplicamos un " + CUPONPROMO + "% de descuento. Que lo disfrutes!";
alert(operacion1);


let CUPONPROMO = parseFloat(prompt("Ingresa tu cupon")); // para identificarlo como numero decimal


// EJEMPLO CARNET

let persona =  "BART SIMPSON";
let domicilio = "742 Evergreen";
let pais = "USA";
let nacimiento = "02-11-79";
const codigo = "BA7U89RE243";

let carnet = "Codigo: "+codigo+ " "+
			"Nombre: "+persona+ " "+
			"Pais: "+pais+ " "+
			"Nacimiento: "+nacimiento+ " "+
			"Domicilio: "+domicilio;


console.log(carnet);

// Función simple

function saludar() {
	console.log("Hola");
}

saludar();

// Función compleja

// 1er ejemplo
function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}

conParametros(true, false);


// 2do ejemplo
//Declaración de variable para guardar el resultado de la suma
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
	let resultado = 0;
    resultado = (primerNumero + segundoNumero + tercerNumero) * cuartoNumero;
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3, 1, 2);
mostrar(resultado);


// 3er ejemplo
function sumar(primerNumero, segundoNumero, tercerNumero, cuartoNumero) { // puedo usar tantos parametros necesite
	return (primerNumero + segundoNumero + tercerNumero) * cuartoNumero; // uso return para especificar lo que quiero que devuelve
}

let resultado = sumar(6, 3, 1, 2);
console.log(resultado);


// Funciones anonimas y funciones con flecha

// Esto
const suma  = function (a, b) { return a + b };
const resta = function (a, b) { return a - b };

// Es lo mismo que esto
const suma  = (a, b) => { return a + b };
const resta = (a, b) => { return a - b };

// Mostrar
console.log(suma(15,20));
console.log(resta(15,5));


// Ejemplo de arrow function o funcion con flecha

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21; // ejemplo sin () y sin return

let precioProducto  = 500;
let precioDescuento = 50;

//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log(nuevoPrecio);

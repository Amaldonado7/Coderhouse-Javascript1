// CREO UNA VARIABLE

var libro;

// PARA INICIALIZAR VARIABLE, NECESITO ASIGNARLE UN VALOR

var libro = "Harry Potter";

// PARA MOSTRAR EN CONSOLA

console.log(libro);



// EN JAVASCRIPT HAY DISTINTOS TIPOS DE VARIABLES [INFO EXTRA QUE VAMOS A DESARROLLAR MAS ADELANTE]

var ejemplo1 = "casa"; // Se usaba solamente hasta ECMAScript 5 (ES5) y al usarla puede acceder desde cualquier lado.

let ejemplo2 = "silla"; // Se comenzo a usar a partir de ECMAScript 6 (ES6) y al usarla solo se puede acceder dentro de un scope especifico, por ejemplo en una función.

const ejemplo3 = "mesa"; // Se comenzo a usar a partir de ECMAScript 6 (ES6) y al usarla se considera que es inmutable, no puede cambiar.



// EJEMPLOS 1

// DECLARAR UNA VARIABLE Y ASIGNARLE UN NOMBRE
var nombre = "Harry";

// DECLARAR UNA VARIABLE Y ASIGNARLE UNA EDAD
let edad = 10;

// MOSTRAME EL MENSAJE
let mensaje1 = "El nombre es "+nombre; // El nombre es Harry
let mensaje2 = "La edad es "+edad;    // La edad es 10
let cumple   = "Cumple "+edad + 1;  // Cumple 11

console.log(cumple);


// EJEMPLOS 2
// ENTRADAS
let ingresoNombre = prompt("Ingresar nombre");
let ingresoEdad   = prompt("Ingresar edad");
let mensaje3   = "Hola Coder";

// MOSTRAR SALIDAS
alert(mensaje3);
console.log(ingresoNombre);
console.log(ingresoEdad);

// PROCESAMIENTO
// PARA SUMAR UNA ENTRADA NECESITAS PARSEARLAS (CONVERTIRLAS) EN NUMEROS
let operacion1 = parseInt(ingresoEdad) + 20; // Admite enteros
let operacion2 = parseFloat(ingresoEdad) - 0.5; // Admite decimales

// MOSTRAR SALIDAS
console.log(operacion1);
console.log(operacion2);




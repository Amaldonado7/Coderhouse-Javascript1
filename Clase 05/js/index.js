// Declarar un objeto

const persona = {
  nombre: "Homero",
  edad: 50,
  trabajo: "Ingeniero",
  hijos: true,
  color: "azul"
}


console.log(persona["edad"]);

persona["nombre"] = "Pepe";
// persona.nombre = "Pepe"

console.log(persona["nombre"]);


// Constructores

// Ejemplo
function Persona(parametro1, parametro2, parametro3) {
  this.propiedad1 = parametro1;
  this.propiedad2 = parametro2; 
  this.propiedad3 = parametro3;
}


const persona1 = new Persona("Homero", "Simpsons", 50);
const persona2 = new Persona("Marge", "Simpsons", 45);

console.log(persona1, persona2);

// Otro ejemplo quizas mas claro
function Persona(texto) {
  this.propiedad1 = texto.valor1;
  this.propiedad2 = texto.valor2;
  this.propiedad3 = texto.valor3;
}

const persona1 = new Persona({valor1: "Homero", valor2: "Simpsons", valor3: 50});

console.log(persona1);

// Ejercitacion Tienda

// Ejemplo de Alumno
function Tienda (name,adress,company,category) {
  this.name = name;
  this.adress = adress;
  this.company = company;
  this.category = category;
}
let inputName = "";
let inputAdress = "";
let inputCompany = "";
let InputCategory = "";

let registro = prompt("Quiere registrase: si / no");

while (registro != "no") {

  inputName = prompt("ingrese su nombre");
  inputAdress = prompt("ingrese su direccion");
  inputCompany = prompt("ingrese el nombre de su empresa");
  InputCategory = prompt("ingrese su rubro");
  const persona1 = new Tienda (inputName, inputAdress, inputCompany, InputCategory);

  console.log(persona1);

  registro = prompt("Quiere registrase si / no");
}

// Ejemplo de Alumna
function Tienda (nombre, direccion, propietario, rubro){
  this.nombre = nombre;
  this.direccion = direccion;
  this.propietario = propietario;
  this.rubro = rubro;
}

const tienda1 = new Tienda ("Tienda uno", "Av Siempreviva 742","Homero","Electrónica");
const tienda2 = new Tienda ("Tienda dos","Av Santa Fe 550","Marge Simpsons","Heladería");
const tienda3 = new Tienda ("Tienda tres", "Av Centenario 200","Bart Simpsons", "Verdulería");

console.log(tienda1);
console.log(tienda2);
console.log(tienda3);

// Ejemplo de Alumno
function Tienda(nombre, direccion, propietario, rubro) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
}

let pedido = parseInt(prompt("Cuantas tiendas quieres ingresar?"));

for(let i = 1; i <= pedido; i++) {
    let nombre = prompt("Ingrese nombre de la tienda: ");
    let direccion = prompt("Ingrese la direccion: ");
    let propietario = prompt("Ingrese su propietario: ");
    let rubro = prompt("Ingrese el rubro: ");
    const comercio = new Tienda(nombre, direccion, propietario, rubro);

    console.log(comercio);
}


// Hacer esto

function Persona(nombre, edad, calle) {

  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)} // agregamos metodos
  
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();


// Es lo mismo que hacer esto, Aca estoy transformando nuestro objeto en una clase (Hace que nuestro codigo sea mas ordenado)

class Persona {

  constructor(nombre, edad, calle) { 
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  }  

  hablar() {
    console.log("HOLA SOY "+ this.nombre);
  }
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();

// Utilizamos for... in para conocer las propiedades de mi objeto

const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);

for (const pepe in persona1) { // Me itera todas las propiedades de mi objeto persona1
  console.log(persona1[pepe]); // Le pido que me traiga todas las propiedades y me las muestre en consola
}




// Repaso clase anterior Storage

localStorage.setItem('clave', 'Valor');
localStorage.clear();

localStorage.removeItem('clave');

// JSON 

const products = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}]; 


localStorage.setItem('products1', JSON.stringify(products));


const misDatos = localStorage.getItem('products1');

console.log(JSON.parse(misDatos));

// DOM - como accedo a todos los elementos que componen mi página

console.dir(document); 
console.dir(document.head)
console.dir(document.body);

// Utilizamos getElementById para acceder por medio del Id a un elemento del html

let div     = document.getElementById("app"); 
let parrafo = document.getElementById("parrafo1");

console.log(div.innerHTML);
console.log(parrafo.innerHTML); // con innerHTML accedo al contenido html de mi elemento


// Utilizamos getElementsByClassName para acceder por medio de la clase a un elemento del html

let color = document.getElementsByClassName("color");

console.log(color[0].innerHTML);

// let paises = document.getElementsByClassName("paises");

// Utilizamos getElementsByTagName para acceder por medio de la etiqueta (tag) a un elemento del html

let paises = document.getElementsByTagName("li"); 

console.log(paises[0].innerHTML); // por default una lista la maquina la identifica como un array de elemento, entonces nos permite poder acceder a su contenido a traves de las posiciones [0]
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

for(const pais of paises) {
  console.log(pais.innerHTML);
}

// Con el DOM podemos crear elementos y agregarlos a nuestra pagina

// Crear nodo de tipo Elemento, etiqueta p
let etiqueta = document.createElement("p");

// Insertar HTML interno
etiqueta.innerHTML = "<h2>Esto es un parrafo</h2>"; 

// Añadir el nodo Element como hijo de body
document.body.appendChild(etiqueta);


// Tambien puedo eliminar elementos si asi lo quisiera
etiqueta.parentNode.removeChild(etiqueta);


// Si tengo una etiqueta "input" puede acceder al valor del mismo y/o agregar valor utilizando el .value

document.getElementById("input").value = 10;

// Practicamos! Ejercicios

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padreNodo      = document.getElementById("personas");
//Array con la información a agregar
let personas   = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padreNodo en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padreNodo.appendChild(li);
}

// Ejemplo de Alumno
const ciudades1 =["mar del plata", "buenos aires", "rosario", "necochea", "miramar", "la plata"];

let contenedor = document.getElementById("contenedor");

for (const nombre of ciudades1) {
  let h2 = document.createElement("h2");
    h2.innerHTML = nombre;
    contenedor.appendChild(h2);
}

// Ejemplo de Alumna
const ciudades2 = ["Villa La Angostura", "Bariloche", "El Bolsón"]

let padre = document.getElementById("patagonia");

//Iteramos el array con for...of
for (const ciudad of ciudades2) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = ciudad
    padre.appendChild(li);
}


// Ejemplo de Alumno

let pais = document.getElementById("ciudades");

let ciudades = ["Buenos Aires", "Mendoza", "Santa Fe", "Tucuman", "Salta", "Santiago"];

for (let index = 0; index < ciudades.length; index++) {
    const element = ciudades[index];
    let h2 = document.createElement("h2");
    h2.innerHTML = element;
    pais.appendChild(h2)
}


// Otra forma de agregar codigo html es directamente inyectando el html con innerHTML

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("ul");
    //Definimos el innerHTML del elemento con una plantilla de texto
    //Agregamos el template con las ` (comillas invertidas) y accedemos a la informacion de nuestro array 
    // mediante este formato: ${variable.propiedad} para acceder a las propiedades internas.
    contenedor.innerHTML = `<li> ID: ${producto.id}</li> 
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}

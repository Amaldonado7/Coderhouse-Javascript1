// Como crear EVENTOS en el DOM
const miBoton = document.getElementById('miBoton');

console.dir(miBoton);

// 1ra posibilidad

miBoton.addEventListener('click', function(){
  // mi codigo: hacer algo
  console.log("mi respuesta");
});

miBoton.addEventListener('click', ()=>{
  alert("Respuesta aceptada");
});

// 2d posibilidad

miBoton.onclick = () => {
  // mi codigo
  console.log("Mi respuesta");
}


// Otros tipos EVENTOS:

// Al colocar el mouse sobre algun elemtento, dispara una accion

miBoton.onmouseover = () => { alert("el cursor esta sobre el boton") };


// Al genera un formulario y enviar mis datos cargado a algun lugar

let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    // En este caso me muestra un mensaje en consola
}

// En este ejemplo pudo que al cliquear el boton submit me muestra en consola ciertos datos

let miFormulario2     = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target;
    console.log(formulario);
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);  
}



////////////////// CARRITO DE PANADERIA //////////////////

// CREACION DE LA SECCION PRODUCTOS

class Productos {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

const productos = [];

productos.push(new Productos(1, "DONA", 65));
productos.push(new Productos(2, "PAN", 120));
productos.push(new Productos(3, "MEDIA LUNA", 60));
productos.push(new Productos(4, "CHURROS", 75));
productos.push(new Productos(5, "CHIPA", 100));

console.log(productos);

// GENERAR INTERFAZ HTMl

for (const producto of productos) {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${producto.nombre}</h2>
                  <h3>${producto.precio}</h3>
                  <button id="${producto.id}" class="btnCompra">COMPRAR</button>`;
  document.body.appendChild(div);
}

// SELECCIONAR BOTONES GENERADOS
const botones = document.getElementsByClassName('btnCompra');

console.log(botones);


// LOGICA CARRITO

const carrito = [];

function comprarProducto() {
  // obtener el id del producto  
  const seleccionado = productos.find(producto => producto.id == this.id);

  // asociamos el seleccionado al carrito
  carrito.push(seleccionado);

  // console.log(seleccionado);

  let innerCarrito = '';
  for (const producto of carrito){
    innerCarrito += `<p>${producto.nombre} - ${producto.precio}</p>`
  }

  const divCarrito = document.getElementById("carrito");
  divCarrito.innerHTML = innerCarrito;

  console.log("Respuesta compra");  
}

for (const boton of botones) {
  boton.addEventListener("click", comprarProducto);
}


////////////////// EJERCICIO PRACTICA DE EVENTOS //////////////////

// creamos el boton
const btnNucleo = document.createElement("button");

// asignamos el id
btnNucleo.id = 'btnNucleo';

// adignar el contenido de mi boton
btnNucleo.innerHTML = "BOTON DEL NUCLEO";

// console.log(btnNucleo);

// ESCUCHAR EL EVENTO CLICK

btnNucleo.addEventListener('click', function(){
  const h3 = document.createElement("h3");
  h3.innerHTML = "Hola Coder";
  document.body.appendChild(h3);
});

// AGREGAMOS EL BOTON AL DOM
document.body.appendChild(btnNucleo);



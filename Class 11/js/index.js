////////////////// CARRITO DE PANADERIA //////////////////

// VARIABLES DE ACCESO GLOBAL

const productos = [];
const carrito = [];
const categorias = ["PANADERIA", "FIAMBRES", "LACTEOS", "CARNES"]; 


// CREACION DE LA SECCION PRODUCTOS

class Productos {
  constructor(id, nombre, precio, categoria) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
  }
}


productos.push(new Productos(1, "PANIFICADOS1", 65, categorias[0]));
productos.push(new Productos(2, "PANIFICADOS2", 65, categorias[0]));
productos.push(new Productos(2, "PANIFICADOS3", 65, categorias[0]));
productos.push(new Productos(3, "FIAMBRE1", 120, categorias[1]));
productos.push(new Productos(7, "FIAMBRE2", 120, categorias[1]));
productos.push(new Productos(3, "FIAMBRE3", 120, categorias[1]));
productos.push(new Productos(4, "LACTEOS1", 60, categorias[2]));
productos.push(new Productos(4, "LACTEOS2", 60, categorias[2]));
productos.push(new Productos(4, "LACTEOS3", 60, categorias[2]));
productos.push(new Productos(5, "CARNE1", 75, categorias[3]));
productos.push(new Productos(5, "CARNE2", 75, categorias[3]));
productos.push(new Productos(5, "CARNE3", 75, categorias[3]));


console.log(productos);


// GENERAR INTERFAZ HTMl

function productosUIjquery(productos, id){
  $(id).empty();

  for(const producto of productos) {
    $(id).append(`<div class="card" style="width: 18rem;">
                  <img src="http://via.placeholder.com/150" class="card-img-top" alt="imagen">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text>${producto.precio}</p>
                    <span class="badge bg-info>${producto.categoria}</span>
                    <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                  </div>
                  </div>`)
  }
}

productosUIjquery(productos, '#productosContenedor');





// SELECCIONAR BOTONES GENERADOS
// const botones = document.getElementsByClassName('btnCompra');
const botones = $(".btnCompra");

console.log(botones);




// LOGICA CARRITO

function comprarProducto() {
  // obtener el id del producto  
  const seleccionado = productos.find(producto => producto.id == this.id);

  // asociamos el seleccionado al carrito
  carrito.push(seleccionado);

  // console.log(seleccionado);

  for (const producto of carrito){
    const divCarrito = $("#carritoProductos");
    divCarrito.append(`<p>${producto.nombre} - ${producto.precio}</p>`);
  }

  console.log("Respuesta compra");  
}


//FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO



for (const boton of botones) {
  boton.addEventListener("click", comprarProducto);
}


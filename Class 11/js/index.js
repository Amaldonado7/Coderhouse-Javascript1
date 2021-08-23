// VARIABLES DE ACCESO GLOBAL
const productos = [];
const carrito   = [];
const categorias = ["PANADERIA","FIAMBRES","LACTEOS", "CARNES"];


// FUNCION PARA GENERAR LA INTERFAZ DE PRODUCTOS CON JQUERY
function productosUIjQuery(productos, id){
  $(id).empty()
  for (const producto of productos) {
    $(id).append(`<div class="card" style="width: 18rem;">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">${producto.precio}</p>
                      <span class="badge bg-info">${producto.categoria}</span>
                      <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                    </div>
                  </div>`);
  }
}


// // MANEJADOR DE COMPRA DE PRODUCTOS
// function comprarProducto(e){
//   //PREVENIR ACTUALIZAR PAGINA AL PRESIONAR ENLACES
//   e.preventDefault();

//   //OBTENER ID DEL BOTON PRESIONADO
//   const idProducto   = e.target.id;

//   //OBTENER OBJETO DEL PRODUCTO CORRESPONDIENTE AL ID
//   const seleccionado = productos.find(p => p.id == idProducto);
//   carrito.push(seleccionado);

//   //GENERAR SALID PRODUCTO
//   carritoUI(carrito);
// }


// // FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
// function carritoUI(productos){
//   //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
//   $('#carritoCantidad').html(productos.length);

//   //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
//   $('#carritoProductos').empty();

//   for (const producto of productos) {
//     $('#carritoProductos').append(registroCarrito(producto));
//   }
// }


// // FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTO HTML
// function registroCarrito(producto){
//   return `<p> ${producto.nombre} <span class="badge bg-warning">$ ${producto.precio}</span></p>`
// }


// // FUNCION PARA RENDERIZAR UN SELECT USANDO UN ARRAY
// function renderSelect(lista, id){
//   //VACIAR EL CONTENIDO DE LA LISTA
//   $(id).empty();

//   //GENERAMOS UN OPTION POR CADA ELEMENTO DE LA LISTA
//   for (const item of lista) {
//     $(id).append(`<option value='${item}'>${item}</option>`);
//   }
// }


// DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre, precio,categoria) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.categoria = categoria;
    }
}

//INSTANCIAR OBJETOS Y ASOCIAR A ARRAY GLOBAL
productos.push(new Producto(1, "PANIFICADO1", 65, categorias[0]));
productos.push(new Producto(2, "PANIFICADO2", 130, categorias[0]));
productos.push(new Producto(2, "PANIFICADO3", 150, categorias[0]));
productos.push(new Producto(3, "FIAMBRE1", 60, categorias[1]));
productos.push(new Producto(7, "FIAMBRE2", 60, categorias[1]));
productos.push(new Producto(3, "FIAMBRE3", 60, categorias[1]));
productos.push(new Producto(4, "LACTEO1", 75, categorias[2]));
productos.push(new Producto(4, "LACTEO2", 75, categorias[2]));
productos.push(new Producto(4, "LACTEO3", 75, categorias[2]));
productos.push(new Producto(5, "CARNE1", 100, categorias[3]));
productos.push(new Producto(5, "CARNE2", 100, categorias[3]));
productos.push(new Producto(5, "CARNE3", 100, categorias[3]));
console.log(productos);

//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
productosUIjQuery(productos, '#productosContenedor');


//-------------- Dispara el boton comprar ---------------------//

let botones = $('.btn-compra');
for (const boton of botones) {
    boton.onclick = comprarProducto;
}
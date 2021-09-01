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

  $('.btn-compra').on("click", comprarProducto);
}


// MANEJADOR DE COMPRA DE PRODUCTOS
function comprarProducto(e){
  //PREVENIR ACTUALIZAR PAGINA AL PRESIONAR ENLACES
  e.preventDefault();

  //OBTENER ID DEL BOTON PRESIONADO
  const idProducto   = e.target.id;

  //OBTENER OBJETO DEL PRODUCTO CORRESPONDIENTE AL ID
  const seleccionado = carrito.find(p => p.id == idProducto);
  
  // SI NO SE ENCONTRO EL ID, BUSCAR EN ARRAY DE PRODUCTOS
  if(seleccionado == undefined){
    carrito.push(productos.find(p => p.id == idProducto));
  } else {
    // Si se encontro agregar cantidad
    seleccionado.agregarCantidad(1);
  }

  // GUARDAR EN STORAGE
  localStorage.setItem("carrito", JSON.stringify(carrito));

  //GENERAR SALIDA PRODUCTO
  carritoUI(carrito);
}


// FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
function carritoUI(productos){
  //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
  $('#carritoCantidad').html(productos.length);

  //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
  $('#carritoProductos').empty();

  for (const producto of productos) {
    $('#carritoProductos').append(registroCarrito(producto));
  }

  // ASOCIAR EVENTOS A LA INTERFAZ GENERADA
  $(".btn-add").click(addCantidad);
  $(".btn-delete").click(eliminarCarrito);

}


// FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTO HTML
function registroCarrito(producto){
  return `<p> ${producto.nombre} 
          <span class="badge bg-warning">$ ${producto.precio}</span>
          <span class="badge bg-dark">${producto.cantidad}</span>
          <a id="${producto.id}" class="btn btn-info btn-add">+</a>
          <a id="${producto.id}" class="btn btn-danger btn-delete">x</a>
          </p>`
}


// MANEJADOR PARA ELIMINAR CARRITO
function eliminarCarrito(e) {
  console.log(e.target.id);
  let posicion = carrito.findIndex(p => p.id == e.target.id);
  carrito.splice(posicion, 1);
  console.log(carrito);

  carritoUI(carrito);

  localStorage.setItem("carrito", JSON.stringify(carrito));
}


// MANEJADOR PARA AGREGAR CANTIDAD 
function addCantidad() {
  let producto = carrito.find(p => p.id == this.id);
  producto.agregarCantidad(1);
  $(this).parent().children()[1].innerHTML = producto.cantidad;

  // GUARDAR EN STORAGE
  localStorage.setItem("carrito", JSON.stringify(carrito));
}



// FUNCION PARA RENDERIZAR UN SELECT USANDO UN ARRAY
function renderSelect(lista, id){
  //VACIAR EL CONTENIDO DE LA LISTA
  $(id).empty();

  //GENERAMOS UN OPTION POR CADA ELEMENTO DE LA LISTA
  for (const item of lista) {
    $(id).append(`<option value='${item}'>${item}</option>`);
  }
}
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

  //PREVENIR LA PROPAGACION DEL EVENTO
  e.stopPropagation();

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

  // GENERAR SALIDA PRODUCTO
  carritoUI(carrito);
}


// FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
function carritoUI(productos){
  // CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
  $('#carritoCantidad').html(productos.length);

  // VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
  $('#carritoProductos').empty();

  for (const producto of productos) {
    $('#carritoProductos').append(registroCarrito(producto));
  }

  // AGREGAR TOTAL
  $("#carritoProductos").append(`<p id="totalCarrito"> TOTAL ${totalCarrito(productos)}</p>`);

  // AGREGAR BOTON CONFIRMAR
  $("#carritoProductos").append(`<div id="divConfirmar" class="text-center"><button id="btnConfirmar" class="btn btn-success">CONFIRMAR</button></div>`);

  // ASOCIAR EVENTOS A LA INTERFAZ GENERADA
  $(".btn-add").click(addCantidad);
  $(".btn-delete").click(eliminarCarrito);
  $(".btn-restar").click(restarCantidad);
  $("#btnConfirmar").click(confirmarCompra);
}


// FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTO HTML
function registroCarrito(producto){
  return `<p> ${producto.nombre} 
          <span class="badge bg-warning"> Pracio unitario: $ ${producto.precio}</span>
          <span class="badge bg-dark"> Cantidad: ${producto.cantidad}</span>
          <span class="badge bg-success"> Precio total: $ ${producto.subtotal()}</span>
          <a id="${producto.id}" class="btn btn-info btn-add">+</a>
          <a id="${producto.id}" class="btn btn-warning btn-restar">-</a>
          <a id="${producto.id}" class="btn btn-danger btn-delete">x</a>
          </p>`
}


// MANEJADOR PARA ELIMINAR CARRITO
function eliminarCarrito(e) {
  console.log(e.target.id);
  let posicion = carrito.findIndex(p => p.id == e.target.id);
  carrito.splice(posicion, 1);
  console.log(carrito);
  // GENERAR NUEVAMENTE INTERFAZ
  carritoUI(carrito);
  // GUARDAR EN STORAGE EL NUEVO CARRITO
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


// MANEJADOR PARA AGREGAR CANTIDAD 
function addCantidad() {
  let producto = carrito.find(p => p.id == this.id);
  producto.agregarCantidad(1);
  $(this).parent().children()[1].innerHTML = producto.cantidad;
  $(this).parent().children()[2].innerHTML = producto.subtotal();
  //MODIFICAR TOTAL
  $("#totalCarrito").html(`TOTAL ${totalCarrito(carrito)}`);
  // GUARDAR EN STORAGE
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// MANEJADOR PARA RESTAR CANTIDAD
function restarCantidad() {
  let producto = carrito.find(p => p.id == this.id);
  if(producto.cantidad > 1) {
    producto.agregarCantidad(-1);

    let registroUI = $(this).parent().children();
    registroUI[1].innerHTML = producto.cantidad;
    registroUI[2].innerHTML = producto.subtotal();

    //MODIFICAR TOTAL
    $("#totalCarrito").html(`TOTAL ${totalCarrito(carrito)}`);

    //GUARDAR EN STORAGE
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
}



// FUNCION PARA GENERAR OPCIONES DE UN SELECT
function selectUI(lista, selector){
  //VACIAR OPCIONES EXISTENTES
  $(selector).empty();

  //RECORRER LISTA Y AGREGAR UNA OPCION POR CADA ELEMENTO
  lista.forEach(element => {
    $(selector).append(`<option value="${element}">${element}</option>`)
  });
  $(selector).prepend(`<option value="TODOS" selected>TODOS</option>`);
}

// FUNCION PARA OBTENER EL PRECIO TOTAL DEL CARRITO
function totalCarrito(carrito) {
  console.log(carrito);
  let total = 0;
  carrito.forEach(p => total += p.subtotal());
  return total.toFixed(2);
}

// FUNCION PARA ENVIAR AL BACKEND LA ORDEN DE PROCESAMIENTO DE COMPRA
function confirmarCompra(){

  // REALIZAMOS LA PETICION POST
  const URLPOST = 'http://jsonplaceholder.typicode.com/posts';

  // INFORMACION A ENVIAR
  const DATA = {productos: JSON.stringify(carrito), total: totalCarrito(carrito)}

  // PETICION POST CON AJAX
  $.post(URLPOST, DATA, function(respuesta,estado){
    //console.log(respuesta);
      //console.log(estado);
      if(estado == 'success'){
        //MOSTRAMOS NOTIFICACION DE CONFIRMACIÓN (CON ANIMACIONES)
        $("#notificaciones").html(`<div class="alert alert-sucess alert-dismissible fade show" role="alert">
                    <strong>COMPRA CONFIRMADA!</strong> Comprobante Nº ${respuesta.id}.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`).fadeIn().delay(2000);
        //VACIAR CARRITO;
        carrito.splice(0, carrito.length);
        //SOBREESCRIBIR ALMACENADO EN STORAGE
        localStorage.setItem("CARRITO",'[]');
        //VACIAR CONTENIDO DEL MENU
        $('#carritoProductos').empty();
        //VOLVER INDICADOR A 0
        $('#carritoCantidad').html(0);
      }
  });
}
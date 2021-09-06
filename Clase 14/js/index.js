// FUNCION QUE SE EJECUTA CUANDO SE CARGA EL DOM
$(document).ready(function(){
  if("carrito" in localStorage) {
    const arrayLiterales = JSON.parse(localStorage.getItem("carrito"));
    for(const literal of arrayLiterales) {
      carrito.push(new Producto(literal.id, literal.nombre, literal.precio, literal.categoria, literal.cantidad));
    }
    carritoUI(carrito);
  }
  $(".dropdown-menu").click(function(e){
    e.stopPropagation();
  });

  // CARGA ASINCRONICA DE INFORMACION DE PRODUCTOS DE ORIGEN LOCAL (producto.json)
  $.get("data/producto.json", function(datos, estado){
    console.log(datos);
    console.log(estado);
    if(estado == "success") {
      for(const literal of datos){
        productos.push(new Producto(literal.id, literal.nombre, literal.precio, literal.categoria, literal.cantidad));
      }
    }
    console.log(productos);
    // GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
    productosUIjQuery(productos, '#productosContenedor');
  });

});

// GENERAR OPCIONES PARA FILTRAR POR CATEGORIA
selectUI(categorias, "#filtroCategorias");

// DEFINIR EVENTOS SOBRE EL SELECT GENERADO
$('#filtroCategorias').change(function(e) {
  // obtenemos el nuevo valor del select
  const value = this.value;

  $('#productosContenedor').fadeOut(600, function(){
    // el filtro se realiza una vez oculto el contenedor
    if(value == 'TODOS'){
      productosUIjQuery(productos, '#productosContenedor');
    } else {
      const filtrados = productos.filter(producto => producto.categoria == value);
      productosUIjQuery(filtrados, '#productosContenedor');
    }
    // mostrar una vez generados los productos
    $("#productosContenedor").fadeIn();
  })
});



// SOLUCION DEL EJERCICIO OFERTA

$("#btn-oferta1").click(function(e){
  $("#oferta1").slideDown(2000).slideUp(2000);
})

$("#oferta2").animate({
  margin: '30px',
  opacity: 0.4,
  fontSize: "2em",
  width: 500
}, 2000).delay(1000).slideUp(1000);



// FUNCION QUE SE EJECUTA CUANDO SE CARGA EL DOM
$(document).ready(function(){
  if("carrito" in localStorage) {
    const arrayLiterales = JSON.parse(localStorage.getItem("carrito"));
    for(const literal of arrayLiterales) {
      carrito.push(new Producto(literal.id, literal.nombre, literal.precio, literal.categoria, literal.cantidad));
    }
    console.log(carrito);
    carritoUI(carrito);
  }
  $(".dropdown-menu").click(function(e){
    e.stopPropagation();
  });

  //CARGAR DATA DE ORIGEN LOCAL
  $.get("data/producto.json", function(datos, estado){
    console.log(datos);
    console.log(estado);
    if(estado == "success") {
      for(const literal of datos){
        productos.push(new Producto(literal.id, literal.nombre, literal.precio, literal.categoria, literal.cantidad));
      }
    }
    console.log(productos);
    productosUIjQuery(productos, '#productosContenedor');
  });

});

//INSTANCIAR OBJETOS Y ASOCIAR A ARRAY GLOBAL
// productos.push(new Producto(1, "PANIFICADO1", 65, categorias[0]));
// productos.push(new Producto(2, "PANIFICADO2", 130, categorias[0]));
// productos.push(new Producto(3, "PANIFICADO3", 150, categorias[0]));
// productos.push(new Producto(4, "FIAMBRE1", 60, categorias[1]));
// productos.push(new Producto(5, "FIAMBRE2", 60, categorias[1]));
// productos.push(new Producto(6, "FIAMBRE3", 60, categorias[1]));
// productos.push(new Producto(7, "LACTEO1", 75, categorias[2]));
// productos.push(new Producto(8, "LACTEO2", 75, categorias[2]));
// productos.push(new Producto(9, "LACTEO3", 75, categorias[2]));
// productos.push(new Producto(10, "CARNE1", 100, categorias[3]));
// productos.push(new Producto(11, "CARNE2", 100, categorias[3]));
// productos.push(new Producto(12, "CARNE3", 100, categorias[3]));
// console.log(productos);


//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
// productosUIjQuery(productos, '#productosContenedor');

selectUI(categorias, "#filtroCategorias");

$('#filtroCategorias').change(function(e) {
  const value = this.value;

  $('#productosContenedor').fadeOut(600, function(){
    if(value == 'TODOS'){
      productosUIjQuery(productos, '#productosContenedor');
    } else {
      const filtrados = productos.filter(producto => producto.categoria == value);
      productosUIjQuery(filtrados, '#productosContenedor');
    }
    $("#productosContenedor").fadeIn();
  })
});



// SOLUCIONES POSIBLES

$("#btn-oferta1").click(function(e){
  $("#oferta1").slideDown(2000).slideUp(2000);
})

$("#oferta2").animate({
  margin: '30px',
  opacity: 0.4,
  fontSize: "2em",
  width: 500
}, 2000).delay(1000).slideUp(1000);



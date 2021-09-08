// DECLARACIÓN DE CLASE PRODUCTO
class Producto {
  constructor(id, nombre, precio, categoria, cantidad) {
          this.id = parseInt(id);
          this.nombre = nombre;
          this.precio = parseFloat(precio);
          this.categoria = categoria;
          this.cantidad = parseInt(cantidad);
  }

  agregarCantidad(valor) {
    // this.cantidad = this.cantidad + valor;
    this.cantidad += valor;
  }

  subtotal() {
    return this.cantidad * this.precio;
  }

}

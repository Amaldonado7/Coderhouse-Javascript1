// // Hay dos formas de acceder al storage
// // localStorage - los datos se almacenan de manera indefinida

// localStorage.setItem('clave', 'valor'); // key, value
// localStorage.setItem('bienvenida', '¡Hola Code!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);


// let mensaje =  localStorage.getItem('bienvenida');
// let bandera =  localStorage.getItem('esValido');
// let numero  =  localStorage.getItem('unNumero');

// console.log(typeof mensaje); //string;
// console.log(typeof bandera); //string;
// console.log(typeof numero);  //string;


// // sessionStorage - los datos se almacenan temporalmente

// sessionStorage.setItem('seleccionados', [1,2,3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'info@email.com');

// localStorage.clear();
// sessionStorage.clear();

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("Clave: "+ clave);
//   console.log("Valor: "+ localStorage.getItem(clave));
// }

// // Ejemplo en ejercicio

// const multiplicar  = (a, b) => a * b;
// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// // Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición calculamos el número ingresado por el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     guardarLocal(i,multiplicar( parseInt(ingresarNumero),i));
// }

// // Ejercicio en clase: solucion 

// let comidas = localStorage.getItem("comidas");

// if (comidas == null){ // sino tiene datos pedile al usuario
//   const menu = [];
//   for(let i = 0; i < 5; i++){
//     menu.push(prompt("Ingrese comida"));
//   }
//   localStorage.setItem("comidas",menu);
// } else { // si tiene datos, si el localStorage tiene valores, mostramelos separas con ;
//   let menu = " ";
//   let arrayComidas = comidas.split( ",");
//   for (const nombreComida of arrayComidas){
//     menu = menu + nombreComida + ("\n");
//   }
//   alert(menu);
// }

// // Como transformar nuestros objetos en json para subir los datos en el storage
// const producto1 = { 
//   id: 2, 
//   producto: "Arroz" 
// };

// const enJSON    = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);


// Ejemplo con una array de objetos 
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}]; 

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

localStorage.setItem("producto1", productos);

const miJSON = JSON.stringify(productos);
localStorage.setItem("producto2", miJSON);

// [{"id":1,"producto":"Arroz","precio":125},{"id":2,"producto":"Fideo","precio":70},{"id":3,"producto":"Pan","precio":50},{"id":4,"producto":"Flan","precio":100}]

//Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto)); // sino le expesifico que me transforme mi array de objetos en json en storage me va a mostrar una cadena de texto [object Object][object Object]
// }

// o almacenar array completo
// guardarLocal("listaProductos", productos);



// // Repaso

// const persona = {
//   edad: 30, 
//   nacionalidad: "argentina",
//   nombre: "Juan"
// };

// console.log(persona["edad"]);

// // Array

// const paises = ["Argentina", "Chile", "Uruguay"];

// // Como agregar elementos a mi array
// paises.push('Inglaterra');
// paises.push('Suecia');

// // Como separar mis elementos con simbolos
// console.log(paises.join("; "));

// // Como mostrar 2 elementos consecutivos de mi array y transformarlo en un nuevo array
// const paisesEuropeos = paises.slice(0, 2); // En este caso nos muestra elemento posicion 0 y elemento posicion 1 en un nuevo array

// console.log(paises);

// console.log(paisesEuropeos);

// // Como recorrer elementos y mostrarlos en un For
// const numeros = [1, 2, 3, 4, 5];

// for (let index = 0; index < numeros.length; index++) {
//     alert(numeros[index]);
// }

// // Como transformar los elementos de mi array en elementos de tipo texto
// console.log(numeros.toString());

// // Como concatenar los valores de mis array
// const union = numeros.concat(paises);

// console.log(union);

// // Declaraciòn de array vacío y variable para determinar cantidad

// const listaNombres = [];
// let   cantidad     = 5;

// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//   let entrada = prompt("Ingresar nombre");
//   listaNombres.push(entrada.toUpperCase());
//   console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));


// // EJERCITACION
// // DECLARAR UN ARRAY "PRODUCTOS DE LA PANADERIA" y AGREGARLE HASTA 5 ELEMENTOS. 

// const listaBizcochos = [];
// let   cantidad     = 5;

// // ITERAR LOS PRODUCTOS DE LA PANADERIA Y MOSTRARLOS EN UNA SALIDA EN PANTALLA

// do{
//   let entrada = prompt("Ingresar bizcocho");
//   listaBizcochos.push(entrada.toUpperCase());
//   console.log(listaBizcochos.length);
// }while(listaBizcochos.length != cantidad) {
//   alert("Productos: " + listaBizcochos);
// }


// // ARRAY DE OBJETOS

// const miArray = [
//   {
//     id: 1,
//     nombre: "Juan",
//     apellido: "Etcheverry"
//   },
//   {
//     id: 2,
//     nombre: "Pepe",
//     apellido: "Gomez"
//   }
// ];

// console.log(miArray[1]);

/////////// LO ULTIMO QUE NO LLEGAMOS A VER EN CLASE //////////

// For... of - nos permite recorrer el array de objetos y ejecutar un bloque codigo

const productos = [
  { id: 1, 
    producto: "Arroz" 
  },
  { 
    id: 2,  
    producto: "Fideo" 
  },
  { id: 3,  
    producto: "Pan" 
  }
];

// Exactamente como el for.. in, en este caso declaro una variable que me permite poder buscar las propiedades
// que contienen los objetos de mi array

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}

// typeof nos permite saber el tipo de valor

const ejemplo = "esto es un string";
console.log(typeof ejemplo); // En consola me devuelve string


// OTROS METODOS DE BUSQUEDA Y TRANSFORMACION

// METODO FIND - nos permite encontrar un valor dentro del array

const nombres     = ["Ana", "Ema", "Juan"];
// estos es lo mismo que 
const encontrado2 = nombres.find(elemento => elemento === "Ema"); //Encuentra "Ema"

// hacer esto, es una "comprobacion enviada por parametro" que se hace para chequear la informacion
const encontrado2 = nombres.find(function(elemento){
  return elemento === "Ema"
})

const encontrado3 = nombres.find(elemento => elemento === "Alan"); //undefined porque no existe en mi array


// METODO FILTER - se usa para filtrar los valores de mi array transformandolo en un nuevo array con menos valores

const filtro1 = nombres.filter(elemento => elemento.includes("n")); // me crea un array con los elemenos Ana y Juan


// METODO MAP - se usa para modificar los valores de mi array original y crear uno nuevo con los nuevos valores

const mapNombres = nombres.map(elemento => elemento.length); // La consola me va a mostrar un nuevo array con la cantidad de letras de cada nombre
// es decir mapNombres = [3, 3, 4]

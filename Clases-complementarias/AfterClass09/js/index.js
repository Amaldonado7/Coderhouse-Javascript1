// Ejercicio 2
// const materias = ['Matematica', 'Lengua', 'Programacion', 'Historia'];

// let select = document.createElement("select");

// for (let i = 0; i < materias.length; i++) {
//   select.innerHTML += `<option value='${i}'>${materias[i]}</option>`;
// }

// select.addEventListener('change', function(e){
//   const h3 = document.createElement('h3');
//   h3.innerHTML = materias[e.target.value];
//   document.body.appendChild(h3);
// })

// document.body.appendChild(select);

// Ejercicio 3

const estudiantes = [];

class Estudiante {
  constructor(parametro) {
    this.id = estudiantes.length;
    this.nombre = parametro.nombre;
    this.edad = parametro.edad;
    this.curso = parametro.curso;    
  }
}

const formulario = document.createElement("form");
formulario.innerHTML = `<input type="text" placeholder="Nombre">                      
                        <input type="number" placeholder="Edad" >                        
                        <input type="text" placeholder="Curso">
                        <input type="submit">`

document.body.appendChild(formulario);

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  const inputs = e.target.children;
  estudiantes.push(new Estudiante({nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value}));
  console.log(inputs[0].value);
  console.log(inputs[1].value);
  console.log(inputs[2].value);
  document.body.append('ALUMNO REGISTRADO');
  console.log(estudiantes);
})

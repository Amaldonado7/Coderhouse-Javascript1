// Ejercicio 1

let ciudades = ["Barcelona", "Madrid", "Berlin", "Buenos Aires"];

for (let ciudad of ciudades) {
  $('body').append(`<h2>${ciudad}</h2>`);
}

// Ejercicio 2

let canales = ["Telefe", "El Trece", "Canal 9", "America"];

let innerSelect = '';

canales.forEach((canal, index) => innerSelect += `<option value="${index}">${canal}</option>`);


$('body').prepend(`<select id="selectCanal">${innerSelect}</select>`);

document.getElementById('selectCanal').onchange = (e) => {
  $('body').append(`<h5>SELECCIONADO ${canales[e.target.value]}</h5>`);
}

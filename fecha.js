// La fecha de hoy

const fecha = new Date();
console.log(fecha.toLocaleDateString("en-US"));

// Fecha de mi nacimiento

const bDate = new Date(1996, 0, 15, 10, 30);
console.log(bDate.toLocaleDateString("en-US"));
const diaNacimiento = bDate.getDate();
const mesNacimiento = bDate.getMonth() + 1;
const yearNacimiento = bDate.getFullYear();

// que hoy es más tarde.

let comparacion = function date() {
  if (fecha > bDate) {
    return true;
  } else {
    return false;
  }
};
console.log(comparacion());

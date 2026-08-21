//1- Agregar y Eliminar Elementos
let frutas = ["manzana", "banana", "pera"];

// Agregar una fruta al final
frutas.push("naranja");

console.log(frutas);
// ["manzana", "banana", "pera", "naranja"]

// Eliminar la última fruta
frutas.pop();

console.log(frutas);

//2-Array bidimensional
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriz[1][1]);

//3- Iteracion sobre un array
let frutas = ["manzana", "banana", "pera"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//4- Uso de map
function elevarAlCuadrado(numeros) {
  return numeros.map((numero) => numero * numero);
}

const numeros = [1, 2, 3, 4, 5];

console.log(elevarAlCuadrado(numeros));

//5- Uso de filter
function filtrarMayoresDe(numeros, referencia) {
  return numeros.filter((numero) => numero > referencia);
}

const numeros = [2, 5, 8, 10, 3, 15];

console.log(filtrarMayoresDe(numeros, 7));

//6- Uso de reduce
function sumarElementos(numeros) {
  return numeros.reduce((suma, numero) => suma + numero, 0);
}

const numeros = [1, 2, 3, 4, 5];

console.log(sumarElementos(numeros));

//7- Uso de some
const numeros = [3, 7, 12, 5, 9];

const hayMayorQue10 = numeros.some((numero) => numero > 10);

console.log(hayMayorQue10);

//8- Uso de every
const numeros = [2, 5, 8, 10, 15];

const todosPositivos = numeros.every((numero) => numero > 0);

console.log(todosPositivos);

//9- Uso de find
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 32 },
  { nombre: "Pedro", edad: 40 },
  { nombre: "Ana", edad: 28 },
];

const personaMayorDe30 = personas.find((persona) => persona.edad > 30);

console.log(personaMayorDe30);

//10- Uso de sort
const palabras = ["pera", "manzana", "banana", "uva", "naranja"];

palabras.sort();

console.log(palabras);

//1-Funcion Suma
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // mostramos el resultado
console.log(sumar(10, 15)); //mostramos el resultado

//2-Funcion de Multiplicacion
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(5, 3)); // mostramos el resultado
console.log(multiplicar(10, 15)); //mostramos el resultado

//3-Funcion con Parametros por Defecto
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}!`;
}

console.log(saludar()); // mostramos el resultado
console.log(saludar("Juan")); //mostramos el resultado

//Funcion que devuelve un objeto
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
    };
}

console.log(crearPersona("Ana", 25)); // mostramos el resultado
console.log(crearPersona("Luis", 30)); //mostramos el resultado


//5- Funcion que modifica un objeto 
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

let persona = { 
    nombre: "Carlos", 
    edad: 28 
};

actualizarEdad(persona, 30); // Actualizamos la edad de la persona
console.log(persona); // Imprimimos el objeto actualizado

//6- Funcion Recursiva
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // mostramos el resultado
console.log(factorial(7)); //mostramos el resultado

//7- Funcion con funcion interna
function despedir(){
    function adios(){
        return "Adiós";
    }
    return adios();
}

console.log(despedir()); // mostramos Adios

//8- Funcion que usa otra funcion
function procesarArray(array, funcion){
    return array.map(funcion);
}

function multiplicarPorDos(numero){
    return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];

let resultado = procesarArray(numeros, multiplicarPorDos);
console.log(resultado); // mostramos el resultado

//9-Funcion que devuelve otra funcion
function crearMultiplicador(x) {
    return function(numero) {
        return numero * x;
    };
}

let multiplicadorPorTres = crearMultiplicador(3);

console.log(multiplicadorPorTres(5)); // mostramos el resultado
console.log(multiplicadorPorTres(10)); //mostramos el resultado

//10- Funcion anonima
const sumarAnonima = function(a, b) {
    return a + b;
}

console.log(sumarAnonima(5, 3)); // mostramos el resultado

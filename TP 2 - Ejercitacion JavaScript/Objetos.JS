//1- Creacion de un Objeto basico
let libro = {
  titulo: "Los Juegos del Hambre",
  autor: "Suzanne Collins",
  añoDePublicacion: 2009,
};

console.log(libro.titulo); // Acceder a titulo
console.log(libro.autor); // Acceder a autor
console.log(libro.añoDePublicacion); // Acceder a año de publicacion

//2- Anidacion de Objetos
let estudiante = {
  nombre: "Juan",
  edad: 20,
  direccion: {
    calle: "Ereño",
    ciudad: "Concepcion del Uruguay",
    pais: "Argentina",
  },
};

console.log(estudiante.direccion.calle); // Acceder a calle dentro de direccion
console.log(estudiante.direccion.ciudad); // Acceder a ciudad dentro de direccion
console.log(estudiante.direccion.pais); // Acceder a pais dentro de direccion

//3- Metodos en objetos
let libro = {
  titulo: "Los Juegos del Hambre",
  autor: "Suzanne Collins",
  añoDePublicacion: 2009,

  descripcion: function () {
    return `${this.titulo} fue escrito por ${this.autor} en el año ${this.añoDePublicacion}.`;
  },
};

console.log(libro.descripcion()); // Llamar al metodo descripcion

//4- Iteracion sobre propiedades de un objeto
let producto = {
  nombre: "Laptop",
  precio: 1500,
  disponible: true,
};

for (let propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`); // Acceder a cada propiedad y su valor
}

//5- Actualizacion de propiedades
let producto = {
  nombre: "Laptop",
  precio: 1500,
  disponible: true,
};

producto.precio = 1200; // Actualizamos la propiedad "precio"

console.log(producto); // Imprimimos el objeto actualizado

//6- Comprobacion de Propiedades
let tienePropiedad = "nombre" in producto; // Comprobamos si la propiedad "nombre" existe en el objeto producto
console.log(tienePropiedad); // Imprimimos true o false

//7- Eliminacion de Propiedades
let producto = {
  nombre: "Laptop",
  precio: 1500,
  disponible: true,
};

console.log(producto); // Imprimimos el objeto antes de eliminar la propiedad
delete producto.disponible; // Eliminamos la propiedad "disponible"
console.log(producto); // Imprimimos el objeto despues de eliminar la propiedad

//8-Combinar objetos con object.assign()
let persona1 = { a: 1, b: 2 };
let persona2 = { b: 3, c: 4 };
let persona3 = Object.assign({}, persona1, persona2);

console.log(persona3); // Imprimimos el objeto combinado

//9- Copiar objetos:
let estudiante = {
  nombre: "Juan",
  edad: 20,
  direccion: {
    calle: "Ereño",
    ciudad: "Concepcion del Uruguay",
    pais: "Argentina",
  },
};

let copiaEstudiante = JSON.parse(JSON.stringify(estudiante)); // Creamos una copia profunda del objeto estudiante

copiaEstudiante.nombre = "Pedro";
copiaEstudiante.direccion.ciudad = "Parana";

console.log(estudiante); // Imprimimos el objeto original
console.log(copiaEstudiante); // Imprimimos la copia modificada

//10- Metodo Getters y Setters
let libro = {
  titulo: "Los Juegos del Hambre",
  autor: "Suzanne Collins",
  añoDePublicacion: 2009,
  //getter
  get añoDePublicacion() {
    return this._añoDePublicacion;
  },
  //setter
  set añoDePublicacion(AñoNuevo) {
    this._añoDePublicacion = AñoNuevo;
  },
};

libro.añoDePublicacion = 2010; // Usamos el setter para actualizar el año de publicación
console.log(libro.añoDePublicacion);

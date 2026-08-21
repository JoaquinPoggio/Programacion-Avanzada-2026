//1- Consumo de datos desde una api

function obtenerUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((usuario) => {
      console.log(usuario);
    })
    .catch((error) => {
      console.error("Error al obtener los usuarios:", error);
    });
}

obtenerUsuarios();

//2- Procesamiento de datos de una api
function obtenerUsuarios() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json(),
  );
}

function imprimirNombresUsuarios() {
  obtenerUsuarios()
    .then((usuarios) => {
      const nombres = usuarios.map((usuario) => usuario.name);
      console.log(nombres);
    })
    .catch((error) => {
      console.error("Error al obtener los usuarios:", error);
    });
}

imprimirNombresUsuarios();

//3- Autenticación Simulada
function autenticarUsuario(credenciales) {
  const usuarioPredefinido = "admin";
  const contrasenaPredefinida = "1234";

  return (
    credenciales.usuario === usuarioPredefinido &&
    credenciales.contrasena === contrasenaPredefinida
  );
}

console.log(
  autenticarUsuario({
    usuario: "admin",
    contrasena: "1234",
  }),
);

console.log(
  autenticarUsuario({
    usuario: "admin",
    contrasena: "5678",
  }),
);

//4-Transformacion de datos
function mapearUsuarios(usuarios) {
  return usuarios.map((usuario) => {
    return {
      nombre: usuario.name,
      email: usuario.email,
    };
  });
}

const usuarios = [
  {
    name: "Joaquin",
    email: "joaquin@email.com",
  },
  {
    name: "María",
    email: "maria@email.com",
  },
];

console.log(mapearUsuarios(usuarios));

//5- Validacion de Formularios
function validarFormulario(formulario) {
  return (
    formulario.nombre !== "" &&
    formulario.email !== "" &&
    formulario.password !== ""
  );
}

console.log(
  validarFormulario({
    nombre: "Juan",
    email: "juan@email.com",
    password: "1234",
  }),
);

console.log(
  validarFormulario({
    nombre: "Juan",
    email: "",
    password: "1234",
  }),
);

//6- Paginacion de datos
function obtenerPagina(datos, pagina) {
  const elementosPorPagina = 5;
  const inicio = (pagina - 1) * elementosPorPagina;
  const fin = inicio + elementosPorPagina;

  return datos.slice(inicio, fin);
}

const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(obtenerPagina(datos, 1));
console.log(obtenerPagina(datos, 2));
console.log(obtenerPagina(datos, 3));

//7-Envio de datos a una api
function enviarDatos(data) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((respuesta) => {
      console.log(respuesta);
    })
    .catch((error) => {
      console.error("Error al enviar los datos:", error);
    });
}

const data = {
  title: "Mi publicación",
  body: "Este es el contenido",
  userId: 1,
};

enviarDatos(data);

//8- Busqueda de usuarios
function buscarUsuarioPorEmail(usuarios, email) {
  return usuarios.find((usuario) => usuario.email === email);
}

const usuarios = [
  { nombre: "Juan", email: "juan@email.com" },
  { nombre: "María", email: "maria@email.com" },
  { nombre: "Pedro", email: "pedro@email.com" },
];

console.log(buscarUsuarioPorEmail(usuarios, "maria@email.com"));

//9- Generación de Token de Autenticación
function generarToken(usuario) {
  const datos = JSON.stringify(usuario);
  const token = btoa(datos);

  return token;
}

const usuario = {
  nombre: "Juan",
  email: "juan@email.com",
};

console.log(generarToken(usuario));

//10- Actualizacoin de informacion de Usuario
function actualizarUsuario(usuario, cambios) {
  return {
    ...usuario,
    ...cambios,
  };
}

const usuario = {
  nombre: "Juan",
  email: "juan@email.com",
  edad: 20,
};

const cambios = {
  email: "juan.nuevo@email.com",
  edad: 21,
};

const usuarioActualizado = actualizarUsuario(usuario, cambios);

console.log(usuarioActualizado);

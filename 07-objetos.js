//const persona = {
//  nombre: "Perla",
//    apellido: "Mondragon",
// edad: 34,
//   estaActivo: true
//}

//console.log (persona);

//imprimir propiedades
//console.log (persona.apellido);

//cambiar un valor
//persona.edad = 31
//console.log (persona);

//Agregar atributo o propiedad
//persona.profesion = "Ingeniero";
//console.log (persona);

//ELiminar objeto
//console.log (persona);
//delete persona.nombre;
//console.log (persona);

//const persona = {
//    nombre: "Perla",
//    edad: 34,
//    ocupación: "Criminologa",
//}

//console.log (persona);

//let objeto = {}

//function agregarValor (propiedad, valor) {
//    objeto [propiedad] = valor;
//    console.log (objeto);
//}

//agregarValor ("nombre", "Perla");
//agregarValor ("edad", 33); //

//Object.Keys
//const persona = {
//    nombre: "Perla",
//    apellido: "Mondragón",
//    edad: 34,
//    deporte: "natación",
//}
//const propiedades = Object.keys (persona);
//console.log(propiedades);

//propiedades.forEach (function (propiedad) { console.log (persona [propiedad]);
//});

//console.log (persona);
//console.log (persona["nombre"]);
//console.log (persona["apellido"]);
//console.log (persona["edad"]);

// For in
//const persona = {
//    nombre: "Perla",
//    apellido: "Mondragón",
//    edad: 34,
//    deporte: "natación",
//};

//for(let propiedad in persona) {
//console.log (persona[propiedad]);
//}

//Desestructuración de objetos:
//const persona = {
//    nombre: "Perla",
//    apellido: "Mondragón",
//    edad: 34,
//    deporte: "natación",
//};

//const {nombre, apellido} = persona;

//console.log (persona);
//let firstName = persona.nombre
//let lastName = persona ["apellido"];

//console.log (`${nombre} ${apellido}`);

//Desestructuración de arreglo:
//const arreglo = ["Naranja", "Melon", "Sandia", "Pera"];

//const [fruta1, fruta2, fruta3] = arreglo;

//let fruta1 = arreglo [0];
//let fruta2 = arreglo [1];

//console.log (fruta1);
//console.log (fruta3);
//----------------------------------------------------------------------------
//const usuarios = [
//    {
//        nombre: "Juan",
//        edad:20,
//        actuvo: true,
//        actividades: ["futbol", "programar"],
//    },
//    {
//        nombre: "Abril",
//        edad: 19,
//        activo: false,
//        actividades: ["natación"],
//    },
//];
//console.log(usuarios[1]. actividades[0]);
//-----------------------------------------------------------------------

//Ejercicio2:
//Crear un método que permita agrefar un valor 

//let objeto = {};
//console.log (objeto);

//function agregarNuevoValor = () => {}
//const agergarNuevoValor = (propiedad,valor) => {
   
//    if(objeto[propiedad]) {
//        console.log("La propiedad ya existe");
//        console.log (objeto);
//        return;
//}
   
//    objeto[propiedad] = valor;
//    console.log(objeto);
//};

//agergarNuevoValor ("edad", 7);
//-----------------------------------------------------------------------------------------

//Ejercicio 3
const libros = [];

const agregarLibro = (titulo, autor) => {
    const libro = {
        titulo: titulo,
        autor: autor,
    };
    libros.push (libro);
};

const imprimirLibros = () => {
    console.log (libros);
};
//class Persona {
//    constructor (nombre, apellido, edad) {
//        this.nombre = nombre
//        this.apellido = apellido
//        this.edad = edad
//    }

//nombreCompleto () {
//    return `${this.nombre} ${this.apellido}`;
//}
//}

//const persona1 = new Persona ("Juan", "Perez", 67);
//const persona2 = new Persona ("Jminea", "Martínez", 45);
//console.log (persona1.nombreCompleto());
//console.log (persona2.nombreCompleto());

//Crear una clase llamada animal ojos,orejas, patas, color

class Animal {
    constructor (ojos, orejas, patas, color) {
        this.comer = ojos;
        this.tomar = orejas;
        this.patas = patas; 
        this.color = color;
    }

    comer () {
        console.log ("Comiendo");
    }

    tomar () {
        console.log (`Tomando`);
    }
}

const animal1 = new Animal("negros",2,4,"cafe");
animal1.tomar ();

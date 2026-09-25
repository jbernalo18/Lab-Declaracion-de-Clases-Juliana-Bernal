/*
6. Experimenta permitiendo que los objetos jugador construidos se agreguen a un arreglo de miembros del equipo.
    - ¿Cómo debería identificarse un arreglo de miembros del equipo en tu código?
    - Intenta agregar métodos para agregar o eliminar objetos jugador de un equipo dado.
*/

export class Jugador {
  constructor(nombre, nivel = 1, exp = 0) {
    this.nombre = String(nombre);  
    this.nivel = Number(nivel); 
    this.exp = Number(exp);
  }
  
  informacion() {   
    return `${this.nombre}, has alcanzado el Nivel ${this.nivel}!`;  
  }
}

export class Equipo { //creamos clase para equipo
  constructor (nombreEquipo){ //definimos nombre de equipo como parametro del consrtuctos
    this.nombreEquipo = nombreEquipo; // asignamos el contenido de nombreEquipo a la propiedad nombreEquipo 
    this.miembros = []; //creamos la lista para guardar los miembros del equipo
  }
  agregarMiembro (jugador){ //creamos metodo para agregar un miembro
    this.miembros.push(jugador);  //agregamos Jugador a lista miembros
    return `${jugador.nombre} ha sido agregado al equipo ${this.nombreEquipo}`;
  }
  mostrarMiembros(){
    return this.miembros;
  }
}

//prueba  
const equipo1 = new Equipo ("Las Bestias")

const jugador1 = new Jugador ("Jack"); 
console.log(jugador1.informacion());
console.log(equipo1.agregarMiembro(jugador1));

console.log();

const jugador2 = new Jugador ("Maria"); 
console.log(jugador2.informacion());
console.log(equipo1.agregarMiembro(jugador2));
console.log();
console.log("Miembros de: ", equipo1.nombreEquipo);
console.log(equipo1.mostrarMiembros());

/*
7. Experimenta permitiendo que el jugador tenga un inventario de objetos.
    - Intenta agregar métodos para agregar o eliminar objetos de un inventario.
    - ¿Cómo puedes hacer seguimiento de la cantidad de cada objeto? ¿Qué estructura de datos necesitarías para esto?
 */
export class Jugador {
  constructor(nombre, nivel = 1, exp = 0) {
    this.nombre = String(nombre);  
    this.nivel = Number(nivel); 
    this.exp = Number(exp);
    this.inventario = []; // creamos array para guardar el inventario
  }
  informacion() {   
    return `${this.nombre}, has alcanzado el Nivel ${this.nivel}!`;  
  }
  agregarObjetos(objeto,numObj){ //creamos metodo que recibe el nombre del objetp y el numero
   this.inventario.push(objeto,numObj) // agregamos los datos al inventario
   return `Se han agregado ${numObj} ${objeto}al inventario`;
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
  mostrarMiembros(){ //creamos metodo para mostar miembros del equipo
    return this.miembros;
  }
}

//PRUEBA  
const equipo1 = new Equipo ("Las Bestias")

const jugador1 = new Jugador ("Jack"); 
console.log(jugador1.informacion());
console.log(equipo1.agregarMiembro(jugador1));
console.log(jugador1.agregarObjetos("manzana",3));
console.log(jugador1.agregarObjetos("pocion",10));


console.log();

const jugador2 = new Jugador ("Maria"); 
console.log(jugador2.informacion());
console.log(equipo1.agregarMiembro(jugador2));
console.log(jugador2.agregarObjetos("pocion",10));
console.log(jugador2.agregarObjetos("madera",8));
console.log();
console.log("Miembros de: ", equipo1.nombreEquipo);
console.log(equipo1.mostrarMiembros());

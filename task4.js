export class Jugador { 
   constructor(nombre,nivel) {  //declaramos los parémetros en el constructor
   this.nombre = String(nombre);  //asignamos el contenido de nombre a la propiedad nombre y lo convertimos a String
   this.nivel = Number(nivel); // asignamos el contenido de nivel a la propiedad nivel y lo convertimos a Number
  }
  informacion() {   // creamos el metódo para mostar la informacion
  return `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`;  // retornamos el String y mediante interpolacion mostramos el nivel 
  }
  subirNivel(){ //creamos el metódo para subir de nivel
    this.nivel = this.nivel + 1; // sumamos 1 al nivel actual
    return this.informacion(); // usamos el metódo ya creado  para mostar la información con la propiedad nivel actualizada
  }
}

/* su
5. Experimenta permitiendo que el jugadorba de nivel basándose en puntos de experiencia ganados.
    - Un punto de experiencia es un número. Una subida de nivel debe ocurrir cuando un jugador 
    gana suficientes puntos de experiencia.
    - Intenta agregar un método que permita a un jugador ganar una cantidad dada
     de puntos de experiencia.
    - ¿Cuántos puntos de experiencia deberían resultar en una subida de nivel?
     ¿Cómo puedes hacer seguimiento de este número?
*/

export class Jugador {
  constructor(nombre,nivel=1,exp=0) {
    this.nombre = String(nombre);  //asignamos el contenido de nombre a la propiedad nombre y lo convertimos a String
    this.nivel = Number(nivel); // asignamos el contenido de nivel a la propiedad nivel y lo convertimos a Number
    this.exp = Number(exp);
  }
    informacion() {   
    return `${this.nombre}, has alcanzado el Nivel ${this.nivel}!`;  
   }
    
    subirExp(puntosGanados){  //creamos funcion para recibir los puntosGanados
      const expNece = 500; // creamos constante que determina los puntos necesarios para subir de nivel
      const nivelinicial = this.nivel;
      this.exp = this.exp + puntosGanados; //aumentamos los puntos ganados a la experiencia
    //validamos si con la experiencia aumentada alcanzó a subir de nivel mediante while para que no haga solo una validacion
    while (this.exp >= 500) { // evaluamos si la experiencia actual es mayor o igual a la necesaria
     this.nivel=this.nivel +1; // si se cumple aumentamos el nivel en 1
     this.exp = this.exp - expNece; // restamos a la experiencia los puntos necesarios predeterminados, asi solo se subira de nivel cuando nuevamente se ganen los puntos 
    }
    if (this.nivel > nivelinicial){ //validamos si el nivel subio para mostrar en pantalla la informacion
     return `¡Subiste de nivel! ${this.informacion()} (Te quedaron ${this.exp} de EXP)`;
    }else{ 
      return `${this.nombre}, ganó ${puntosGanados} de EXP. Progreso actual: ${this.exp}/${expNece}`;
    }   
 }
}

//prueba creando un jugador 
const jugador1 = new Jugador ("Jack"); 
console.log(jugador1.informacion());
console.log(jugador1.subirExp(2));
console.log(jugador1.subirExp(1200));
console.log(jugador1.subirExp(2));

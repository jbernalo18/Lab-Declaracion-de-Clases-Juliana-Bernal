
/*1. Estás trabajando en código que se utilizará en un videojuego. Se te ha pedido que crees 
una clase de objeto. Estas se utilizarán para definir jugadores en ese juego. Cada jugador 
puede elegir su propio nombre, y estos objetos se utilizarán para almacenarlos.

    - Modifica la clase Jugador para que acepte un "nombre" de Jugador en un argumento.
        - La clave de esta propiedad en el objeto resultante DEBE ser "nombre".
         Recuerda, ¡los computadores son muy literales!
*/

export class Jugador {
  constructor(nombre) { //declaramos el parémetro en el constructor
    this.nombre = nombre;  //asignamos el contenido de nombre a la propiedad nombre
  }
}

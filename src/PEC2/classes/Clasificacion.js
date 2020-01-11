export class Clasificacion {
  constructor(nombreCompeticion, jornadaActual, clasificacion) {
    this.nombreCompeticion = nombreCompeticion;
    this.jornadaActual = jornadaActual;
    this.clasificacion = clasificacion;
  }

  mostrarClasificacion() {
    console.log('----------CLASIFICACION------');
    console.log('nombreCompeticion:', this.nombreCompeticion);
    console.log('jornadaActual:', this.jornadaActual);
    console.log('clasificacion:', this.clasificacion);
  }
}

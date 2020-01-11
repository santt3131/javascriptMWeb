export class Calendario {
  constructor(objTreatedCalendario) {
    const { equipoVisitante, equipoLocal, jornadaPartido, resultado } = objTreatedCalendario;
    this.equipoVisitante = equipoVisitante; // es un array
    this.equipoLocal = equipoLocal; // es un array
    this.jornadaPartido = jornadaPartido;
    this.resultado = resultado; // es un array
  }

  mostrarCalendario() {
    console.log('-------CALENDARIO---------');
    console.log('equipoVisitante: ' + this.equipoVisitante);
    console.log('equipoLocal: ' + this.equipoLocal);
    console.log('jornadaPartido: ' + this.jornadaPartido);
    console.log('resultado: ' + this.resultado);
  }
}

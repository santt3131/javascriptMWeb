export default class StringClase {
  constructor(texto, numero) {
    this.texto = texto;
    this.numero = numero;
  }

  repiteString() {
    let textoRepitivo = this.texto;
    let textoTotal = '';
    if (this.numero > 0) {
      for (let index = 0; index < this.numero; index++) {
        textoTotal += textoRepitivo;
      }
    }
    return textoTotal;
  }
}

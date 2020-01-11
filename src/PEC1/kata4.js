export default class StringClase {
  constructor(miString) {
    this.miString = miString;
  }

  nuevoString() {
    let nuevoString = '';
    let tamanomiString = this.miString.length;

    if (tamanomiString > 2) {
      nuevoString = this.miString.substring(1, tamanomiString - 1);
    } else {
      nuevoString = this.miString;
    }
    return nuevoString;
  }
}

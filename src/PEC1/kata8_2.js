export default class Fruta {
  constructor(objectoArbol) {
    this.objectoArbol = objectoArbol;
  }

  obtenerFruta() {
    if (Object.getOwnPropertyNames(this.objectoArbol).includes('fruta')) {
      return this.objectoArbol.fruta;
    } else {
      return 'No fruta';
    }
  }
}

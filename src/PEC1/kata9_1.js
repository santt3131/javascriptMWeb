export default class Arbol {
  constructor(especie, fruta) {
    this.especie = especie;
    this.fruta = fruta;
  }

  plantarArbol() {
    if (typeof this.especie === 'string' && typeof this.fruta === 'string') {
      var objAuxiliar = new Object();
      objAuxiliar.especie = this.especie;
      objAuxiliar.fruta = this.fruta;
      return objAuxiliar;
    } else {
      return null;
    }
  }
}

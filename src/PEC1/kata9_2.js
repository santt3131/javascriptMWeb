export default class Arbol {
  constructor(especie, fruta) {
    this.especie = especie;
    this.fruta = fruta;
  }

  plantarArbol() {
    if (typeof this.especie === 'string' && typeof this.fruta === 'string') {
      var objAuxiliar = {
        especie: this.especie,
        fruta: this.fruta,
        obtenerFruta: function obtenerFruta() {
          return this.fruta;
        }
      };
      return objAuxiliar;
    } else {
      return null;
    }
  }
}

export default class Arbol {
  constructor(especie, fruta) {
    this.especie = especie;
    this.fruta = fruta;
  }

  obtenerFruta() {
    return this.fruta;
  }

  definirFruta(value) {
    if (value === 'manzana') {
      this.fruta = value;
    }
  }

  obtenerEspecie() {
    return this.especiePropiedad;
  }

  definirEspecie(value) {
    if (value === 'manzano') {
      this.especie = value;
    }
  }
}

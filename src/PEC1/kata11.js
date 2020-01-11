export default class MiArbol {
  constructor(fruta) {
    this.fruta = fruta;
  }

  obtenerFruta() {
    return this.frutaPropiedad;
  }

  definirFruta(value) {
    if (typeof value === 'string') {
      this.fruta = value;
    } else {
      throw new Error('Haz insertado un valor que no es string');
    }
  }
}

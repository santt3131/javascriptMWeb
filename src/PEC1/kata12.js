export default class MiArbol {
  constructor(especie, fruta) {
    this.fruta = fruta;
    this.especie = especie;
  }

  obtenerFruta() {
    return this.frutaPropiedad;
  }

  definirFruta(value) {
    if (typeof value === 'string') {
      var Message = '';
      var EspecieN = this.especie;
      var FrutaFour = value.substring(0, 4);
      if (EspecieN.search(FrutaFour) != -1) {
        this.fruta = value;
      } else {
        Message = 'Esta Fruta es Incorrecta, no tiene su correcto Arbol';
      }
      return Message;
    } else {
      throw new Error('Haz insertado un valor que no es string');
    }
  }
}

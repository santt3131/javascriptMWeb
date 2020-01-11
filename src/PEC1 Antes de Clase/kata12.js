export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    var objAuxiliar = {
      especiePropiedad: especie,
      frutaPropiedad: fruta,
      obtenerFruta: function obtenerFruta() {
        return this.frutaPropiedad;
      },
      definirFruta: function definirFruta(value) {
        if (typeof value === 'string') {
          var Message = '';
          var EspecieN = this.especiePropiedad;
          var FrutaFour = value.substring(0, 4);
          if (EspecieN.search(FrutaFour) != -1) {
            this.frutaPropiedad = value;
          } else {
            Message = 'Esta Fruta es Incorrecta, no tiene su correcto Arbol';
          }
          return Message;
        } else {
          throw new Error('Haz insertado un valor que no es string');
        }
      }
    };
    return objAuxiliar;
  } else {
    return null;
  }
}

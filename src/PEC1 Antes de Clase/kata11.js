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
          this.frutaPropiedad = value;
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

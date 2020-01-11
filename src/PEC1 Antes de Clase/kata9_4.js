export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    var objAuxiliar = {
      especiePropiedad: especie,
      frutaPropiedad: fruta,
      obtenerFruta: function obtenerFruta() {
        return this.frutaPropiedad;
      },
      definirFruta: function definirFruta(value) {
        if (value === 'manzana') {
          this.frutaPropiedad = value;
        }
      },
      obtenerEspecie: function obtenerEspecie() {
        return this.especiePropiedad;
      },
      definirEspecie: function definirEspecie(value) {
        if (value === 'manzano') {
          this.especiePropiedad = value;
        }
      }
    };
    return objAuxiliar;
  } else {
    return null;
  }
}

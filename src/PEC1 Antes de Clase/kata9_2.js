export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    /*var objAuxiliar = new Object();
    objAuxiliar.especie = especie;
    objAuxiliar.fruta = fruta;
    objAuxiliar.obtenerFruta = function obtenerFruta() {
      return objAuxiliar.fruta;
    };*/
    var objAuxiliar = {
      especie: especie,
      fruta: fruta,
      obtenerFruta: function obtenerFruta() {
        return this.fruta;
      }
    };
    return objAuxiliar;
  } else {
    return null;
  }
}

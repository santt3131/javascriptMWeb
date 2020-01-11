export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    var objAuxiliar = {
      obtenerEspecie: function obtenerEspecie() {
        return especie;
      },
      obtenerFruta: function obtenerFruta() {
        return fruta;
      }
    };
    return objAuxiliar;
  } else {
    return null;
  }
}

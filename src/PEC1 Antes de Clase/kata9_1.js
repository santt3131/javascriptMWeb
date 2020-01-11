export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    var objAuxiliar = new Object();
    objAuxiliar.especie = especie;
    objAuxiliar.fruta = fruta;
    return objAuxiliar;
  } else {
    return null;
  }
}

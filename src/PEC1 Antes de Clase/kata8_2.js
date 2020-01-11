export default function obtenerFruta(objectoArbol) {
  if (Object.getOwnPropertyNames(objectoArbol).includes('fruta')) {
    return objectoArbol.obtenerFruta();
  } else {
    return 'No fruta';
  }
}

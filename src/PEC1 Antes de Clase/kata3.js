export default function repiteString(texto, numero) {
  let textoRepitivo = texto;
  let textoTotal = '';
  if (numero > 0) {
    for (let index = 0; index < numero; index++) {
      textoTotal += textoRepitivo;
    }
  }
  return textoTotal;
}

export default function nuevoString(miString) {
  let nuevoString = '';
  let tamanomiString = miString.length;

  if (tamanomiString > 2) {
    nuevoString = miString.substring(1, tamanomiString - 1);
  } else {
    nuevoString = miString;
  }
  return nuevoString;
}

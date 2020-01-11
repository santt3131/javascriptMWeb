export default function elimina_los_espacios(miString) {
  let miNuevoString = '';
  let miStringDividido = miString.split(' ');
  for (let index = 0; index < miStringDividido.length; index++) {
    if (miStringDividido[index] != '') {
      miNuevoString += miStringDividido[index];
    }
  }
  return miNuevoString;
}

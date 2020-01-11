export default class MiNuevoString {
  constructor(miString) {
    this.miString = miString;
  }

  elimina_los_espacios() {
    let miNuevoString = '';
    let miStringDividido = this.miString.split(' ');
    for (let index = 0; index < miStringDividido.length; index++) {
      if (miStringDividido[index] != '') {
        miNuevoString += miStringDividido[index];
      }
    }
    return miNuevoString;
  }
}

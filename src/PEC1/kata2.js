export default class SumaElementos {
  constructor(misnumeros) {
    this.misnumeros = misnumeros;
  }

  suma_de_elementos_positivos() {
    let sumaTotal = 0;
    this.misnumeros.forEach(numero => {
      if (numero > 0) {
        sumaTotal += numero;
      }
    });

    return sumaTotal;
  }
}

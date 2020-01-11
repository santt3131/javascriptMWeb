export default class ParImpar {
  constructor(number) {
    this.number = number;
  }

  par_o_impar() {
    if (this.number % 2 === 0) {
      this.parImpar = 'Par';
    } else {
      this.parImpar = 'Impar';
    }
    return this.parImpar;
  }
}

export default function par_o_impar(number) {
  let parImpar;
  if (number % 2 === 0) {
    parImpar = 'Par';
  } else {
    parImpar = 'Impar';
  }
  return parImpar;
}

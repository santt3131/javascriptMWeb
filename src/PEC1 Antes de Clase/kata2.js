export default function suma_de_elementos_positivos(misnumeros) {
  let sumaTotal = 0;
  misnumeros.forEach(numero => {
    if (numero > 0) {
      sumaTotal += numero;
    }
  });

  return sumaTotal;
}

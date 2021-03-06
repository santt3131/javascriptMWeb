import MiArbol from './kata12';
describe('Kata #12: Expresiones regulares', () => {
  var plantar1 = new MiArbol('manzano', 'manzana');
  var plantar2 = new MiArbol('peral', 'manzana');
  plantar2.definirFruta('pera');

  test(
    '1.Al crear un arbol con los valores manzano y manzana e invocar posteriormente' +
      ' definirFruta con el valor pera el método lanza un error y mantiene su valor previo',
    () => {
      expect(plantar1.definirFruta('pera')).toBe(
        'Esta Fruta es Incorrecta, no tiene su correcto Arbol'
      );
    }
  );
  test('1. Parte- Mantiene su valor previo', () => {
    expect(plantar1.fruta).toBe('manzana');
  });
  test(
    '2.Al crear un arbol con los valores peral y manzana e invocar posteriormente' +
      'definirFruta con el valor pera el método modifica el valor de la propiedad fruta',
    () => {
      expect(plantar2.fruta).toBe('pera');
    }
  );
});

import Fruta from './kata8_2';

describe('Kata #8.2: Objeto Arbol', () => {
  var miObjetoArbol = {
    especie: 'manzano',
    fruta: 'manzana',
    obtenerFruta: function obtenerFruta() {
      return this.fruta;
    }
  };
  let ex1 = new Fruta(miObjetoArbol);
  let ex2 = new Fruta(miObjetoArbol);
  var ObjectoPatata = {
    categoria: 'top'
  };
  let ex2_2 = new Fruta(ObjectoPatata);

  test('1-El elemento recibido tiene la propiedad fruta', () => {
    expect(ex1.objectoArbol.hasOwnProperty('fruta')).toBe(true);
  });

  test('2-Si el elemento contiene la propiedad fruta retorna su valor', () => {
    expect(ex2.obtenerFruta()).toBe('manzana');
  });

  test('2- en cualquier otro caso devuelve el string Nofruta ', () => {
    expect(ex2_2.obtenerFruta()).toBe('No fruta');
  });
});

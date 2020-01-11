import MiNuevoString from './kata5';
describe('Kata #5: elimina los espacios', () => {
  let ex1 = new MiNuevoString('buenos días');
  let ex2 = new MiNuevoString(' pastel de zanahoria ');
  let ex3 = new MiNuevoString('dábale arroz a la zorra el abad');

  test("de 'buenos días' deberia ser 'buenosdías' ", () => {
    expect(ex1.elimina_los_espacios()).toBe('buenosdías');
  });
  test("de ' pastel de zanahoria ' deberia ser 'pasteldezanahoria' ", () => {
    expect(ex2.elimina_los_espacios()).toBe('pasteldezanahoria');
  });
  test("de 'dábale arroz a la zorra el abad' deberia ser 'dábalearrozalazorraelabad' ", () => {
    expect(ex3.elimina_los_espacios()).toBe('dábalearrozalazorraelabad');
  });
});

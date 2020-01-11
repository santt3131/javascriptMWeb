import StringClase from './kata4';
describe('Kata #4: Elimina el primer y último carácter, con excepción si tiene menos de 2 caracteres', () => {
  let ex1 = new StringClase('JavaScript');
  let ex2 = new StringClase('Alejandría');
  let ex3 = new StringClase('hidrógeno');
  let ex4 = new StringClase('ok');

  test(" de ('JavaScript') deberia ser 'avaScrip' ", () => {
    expect(ex1.nuevoString()).toBe('avaScrip');
  });

  test(" de ('Alejandría') deberia ser 'lejandrí' ", () => {
    expect(ex2.nuevoString()).toBe('lejandrí');
  });

  test(" de ('hidrógeno') deberia ser 'idrógen' ", () => {
    expect(ex3.nuevoString()).toBe('idrógen');
  });

  test(" de (ok) deberia ser 'ok' ", () => {
    expect(ex4.nuevoString()).toBe('ok');
  });
});

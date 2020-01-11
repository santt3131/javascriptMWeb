function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}

test();

//El siguiente codigo lo podría explicar dividio en 3 partes:
// 1era- El primer console.log de la variable a , es undefined porque se trata de imprimir
// la variable antes de la declaración.

// 2da- El segundo console.log de foo imprime 2 , porque hace la llamada a la funcion foo(),
// la cual retorna un valor 2 ( es indeferente si la llamo después o antes , pero claro tiene
// que ser dentro de la funcion test() )

// 3er- undefined es porque cuando se llama a un funcion test() se espera
// retornar algo , pero como nunca se pone la palabra return entonces
// se muestra el undefined , es decir muestra undefined si no se ha devuelto ningun valor.

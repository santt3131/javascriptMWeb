//PRIMERA FORMA
/*var coche = {
  marca: 'Ford',
  obtenerMarca: function() {
    console.log(this.marca);
  }
};
coche.obtenerMarca(); // Ford
var marcaDelCoche = coche.obtenerMarca.bind(coche);
marcaDelCoche(); // Ford
*/

//Como está incialmente muestra undefined, porque el this
//no conoce el objeto,
//para que la reconozca se tiene que agregar el metodo bing y
//pasar como parametro el objeto coche
//el metodo bind lo que hace es agregar al this el valor entregado

// SEGUNDA FORMA

var coche = {
  marca: 'Ford',
  obtenerMarca: function() {
    console.log(this.marca);
  }
};
coche.obtenerMarca(); // Ford

var marcaDelCoche = coche.obtenerMarca;
marcaDelCoche.apply(this.coche); // Ford

//La segunda forma es llamando al metodo apply
// y pasarle como primer parametro
//el coche para que reconozca el objeto y poder llamar
// a la funcion

export default function plantarArbol() {
  String.prototype.presentarArbol = function(nuestra_fruta) {
    if (nuestra_fruta) {
      //console.log('Este arbol es un ' + this.toString() + ' y da un ' + nuestra_fruta);
      return `Este arbol es un(a) ${this.toString()} y da un ${nuestra_fruta}`;
    } else {
      //console.log('Este arbol es un ' + this.toString());
      return `Este arbol es un ${this.toString()}`;
    }
  };

  var arbol = {
    obtenerEspecie: function obtenerEspecie() {
      return 'manzano'.presentarArbol();
    }
  };
  return arbol;
}

/* TEST 
var planta3 = plantarArbol();
planta3.obtenerEspecie(); //OK test 1

//test 2 OKKKKK
'manzano'.presentarArbol();

//test 3 OKKK
'manzano'.presentarArbol('manzana');
*/

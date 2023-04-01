//variables

var a; //declarado.
var b = "b"; //declaramos y asignamos
b = "bb"; //reasignacion.
var a = "aa"; //redeclaricion

//Global scope.

var fruit = "Apple"; //Global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colomobia"; //

  console.log(country);
}

countries();
console.log(country);

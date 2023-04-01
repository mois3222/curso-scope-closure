function fruits() {
  if (true) {
    var fruitOne = "Apple"; //function scope
    let fruitTwo = "Kiwi"; //block scope
    const fruitThree = "Bannana"; //block scope
    console.log(fruitTwo);
    console.log(fruitThree);
  }
  // console.log(fruitTwo);
  // console.log(fruitThree);
  console.log(fruitOne);
}

fruits();

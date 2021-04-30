var x = 0;

function foo(){
  y = 10;
  var z = 20;
  console.log(x, y);
  // console.log(window.y);
  // console.log(window.x);
}

foo();
console.log(y);
// console.log(z); // ReferenceError !
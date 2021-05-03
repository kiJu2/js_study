'use strict';
function foo(){
  x = 10; // ERROR By strict mode
  console.log(x);
}

foo();
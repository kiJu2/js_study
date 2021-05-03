var x = 0;

function foo(){
  var x = 20;
  function bar(){
    console.log(x)
  }
  bar();
}

function baz(){
  var x = 100;
  noz();
}

function noz(){
  console.log(x)
}

foo();
baz();
// bar();


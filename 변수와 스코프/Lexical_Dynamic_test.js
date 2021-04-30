var x = 0;

function foo(){
  var x = 20;
  bar();
}

function bar(){
  console.log(x)
}

foo();
bar();
function foo(a, b, ...callback){
  console.log('a is', a);
  console.log('b is', b);

  console.log(callback);
  // console.log(callback);
  callback.map(foo=>{
    foo();
  })
}

function sum(a,b){
  return a+b;
}

const sume12 = sum;
foo(34, 55, sum);
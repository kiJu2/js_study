// 함수 호이스팅 - 함수 선언문
var res = square(5);

function square(number) {
  return number * number;
}

function sum(a, b){
  console.log(arguments)
  return a + b
}
console.log(sum(1,2,3,4))
console.log(sum(1))


function foo(){
  console.log(foo)
}
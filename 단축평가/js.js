function 단축평가1(){
  function fna() {return "fna 호출"}
  return true && fna()
}

function 단축평가2(){
  function fnb(){return "fnb 호출"}
  return false || fnb()
}

console.log(단축평가1())
console.log(단축평가2())
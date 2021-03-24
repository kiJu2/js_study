function 변수실험(){
  if(true){
    var var_ = "I am var"
  }

  function var실험(){
    console.log(var_)
  }

  var실험()

  if(true){
    let let_ = "I am let"
  }

  function let실험(){
    console.log(let_)
  }

  let실험()
}

function 변수실험2(){
  {
    var var_ = "I am var"
    const const_ = "I am const"
  }
  {
    console.log(var_)
    console.log(const_)
  }
}

변수실험2()
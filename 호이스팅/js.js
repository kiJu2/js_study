function let호이스팅(){
  console.log(let_)
  let let_ = "I am let"
}

function const호이스팅(){
  console.log(const_)
  const const_ = "I am let"
}

function var호이스팅(){  
  console.log(var_)
  var var_ = "I am var"
}

// let호이스팅()
// const호이스팅()

function scope_hoisting(){
  console.log(var_)
  console.log(let_)
  {
    let let_ = "I am let"
  }

  {
    var var_ = "I am var"
  }
}

function 순서(){
  console.log(a)
  console.log(b)
  console.log(c)

  var a = 1
  var b = a
  var c = b
}

// scope_hoisting()
순서()
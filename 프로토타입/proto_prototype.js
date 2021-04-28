function Person(name) {
  this.name = name;
}

function proto_prototype(){
  const foo = new Person('Lee');

  console.log(foo.prototype)
  console.log(foo.__proto__)
}

function prototype(){
  const foo = new Person('Lee');

  console.log(Person.prototype);
  console.log(Person.prototype.constructor);
}

// proto_prototype();
prototype()
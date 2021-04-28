function Person(name) {
  this.name = name;
}

function proto_prototype(){
  function Person(name) {
    this.name = name;
  }

  const foo = new Person('Lee');

  console.log(foo.prototype)
  console.log(foo.__proto__)
}

const foo = new Person('Lee');

// foo 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(foo)
console.log()

console.log("foo.constructor", foo.constructor);
console.log("foo.__proto__", foo.__proto__);
console.log()

console.log("foo.__proto__.constructor", foo.__proto__.constructor);
console.log("foo.constructor.__proto__", foo.constructor.__proto__);
console.log()

console.log("foo.__proto__.constructor.__proto__", foo.__proto__.constructor.__proto__);
console.log("foo.constructor.__proto__.constructor", foo.constructor.__proto__.constructor);
console.log()

console.log("foo.__proto__.constructor.__proto__.constructor", foo.__proto__.constructor.__proto__.constructor);
console.log("foo.constructor.__proto__.constructor.__proto__", foo.constructor.__proto__.constructor.__proto__);
console.log()

console.log("foo.__proto__.constructor.__proto__.constructor.__proto__", foo.__proto__.constructor.__proto__.constructor.__proto__);
console.log("foo.constructor.__proto__.constructor.__proto__.constructor", foo.constructor.__proto__.constructor.__proto__.constructor);
console.log()
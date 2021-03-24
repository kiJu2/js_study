function Person(name, gender){
  var three = 3

  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi~', this.name);
  }
}

var person1 = new Person('lee', 'male');
var person2 = new Person('kim', 'female');

console.log(person1['name']);
console.log(person1.gender)
console.log(person1.three)



//프로퍼티 삭제부터
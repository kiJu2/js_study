function Person(name){
  this.name = name;
}

function Adult(age){
  this.age = age;
}

var person = new Person("Lee");

// Object.create()

//속성 확장
Person.prototype.sex = "Male";

console.log(person.name);
console.log(person.sex);


// 추후에 하장 요긴 메써드 확장임
const adult = Object.create(Person);

console.log(adult.age);
// function someone(){
//   console.log(this)
// }

// function person(name){
//   this.name = name

//   this.call = function(){
//     console.log(this)
//   }
// }

// // someone();
// var p = new person()
// console.log(p)
// p.call();

// function test1(){
//   test2()
// }

// function test2(){
//   console.log(this)
// }

// test1()

// const obj = {
//   value : 200,
//   foo : function(){
//     var that = this;
//     console.log("foo's this : ", that);
    
//   }
// }

// obj.foo()
// const someone = obj.foo;
// console.log(someone.constructor);
// someone();
// var obj1 = {
//   name: 'Lee',
//   sayName: function() {
//     console.log(this.name);
//   }
// }

// var obj2 = {
//   name: 'Kim'
// }

// obj2['sayName'] = obj1.sayName;

// obj1.sayName();
// obj2.sayName();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function() {
//   return this.name;
// }

// var me = new Person('Lee');
// console.log(me.getName());

// Person.prototype.name = 'Kim';
// console.log(Person.prototype.getName());

// function obj(name){
//   this.name = name
// }

// var o = new obj("???");
// console.log(o.name);

// function b(){
//   a= 1;
// }
// b();
// console.log(a)

var value = 1;
var obj = function(){
  this.a = 0;
  // this.fn = function(){console.log(this)};

  function foo(){
    console.log(this);
  }
  this.fn = function(){foo()};
}
var a = new obj();
a.fn();
// console.log(a);
// var obj = {
//   value: 100,
//   foo: function() {
//     setTimeout(function() {
//       console.log("callback's this: ",  this);  // window
//       console.log("callback's this.value: ",  this.value); // 1
//     }, 100);
//   }
// };
// ㄴ
// obj.foo();
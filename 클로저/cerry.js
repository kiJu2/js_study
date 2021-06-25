const foo = (data) =>{
  const dummy = {
    a : '1',
    b : '2',
  }
  console.log("console.log. Call foo : ", data);

  return (data)=>{
    
    console.log("console log. Call in some function in foo : ", data);

    return {
      height : -1,
      width : -1,
      opacity : -0.5,
    }
  }
}

const some_1 = {
  height : 400,
  width : 200,
  opacity : 0.5,
}

const some_2 = {
  height: 180,
  weight : 75,
  state : 'sick',
}

// const call_1 = foo(some_1);
// const call_2 = call_1(some_2);
// console.log(call_2);

// console.log(foo);

const zoo = (data1) => (data2) => (data3) => (data4) => {
  console.log("data1 is ", data1);
  console.log("data2 is ", data2);
  console.log("data3 is ", data3);
  console.log("data3 is ", data4);
};

// Same it..
function uhm(data1){
  return function(data2){
    return function(data3){
      return 'End';
    }
  }
}

// const zoo_1 = zoo(some_1);
// const zoo_2 = zoo_1(some_1);
// const zoo_3 = zoo_2(some_1);
// const zoo_4 = zoo_3(some_1);
// console.log(zoo_3);
// console.log(zoo_4);

const um1 = uhm(some_1);
const um2 = um1(1);
const um3 = um2(2);
console.log(um3);
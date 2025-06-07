/* 
function declaration
 
// function- reusable block of code

function functionName(parameters){
    // parameters/arguments
    // block of code
}
    */


function greet(){
    console.log("good evening");
}
greet();


function greeting(message){
    console.log(message);
}
greeting("this is dheeraj sonkar and i am full stack developer and creating a responsive websites and apps.");


const greet1 = function(){
    console.log("director dheeraj  ");
}
console.log(greet1);
greet1();


const greet2 = function(username){
    console.log("hello", username);
}
greet2();

const greet3 = function(){
    console.log("boy",)
}
greet3("director");
greet3("raj sonkar");


// Arrow function - simplified syntax for function expression
// const add = (a,b) =>{
    //     return a + b;
    // }

    const add = (a,b) => a+b;
    console.log(add(5,15));

  // default parameters in functions
  const name = function(username = "krishna"){
    console.log(username);
  }  
  name("ram2");
  name();



  // higher order functions & callbacks
  // a function that accepts another function as an argument - higher order function

// let array1 = [1,2];
  function processArray(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
  }
  let array1 = [1,2];
  processArray(array1, function(num) {
    console.log(num * 2);
  });

  function multiplyByTwo(num) {
    console.log(num * 10);
  }
  processArray(array1, multiplyByTwo);
 

  // scope, closure
  // scope-  Accessibility of variables (global, local & block )
 // let a =5 global variable
 // closure -  function that remembers its outer variables 
 
  function outer(){
    let count = 0;   // local variable
    return function inner(){
        count++;
        console.log(`Count is : ${count}`);

        // let x =10; block variable
    };
  }

  let counter = outer();
  counter();
  counter(); // Count is : 1
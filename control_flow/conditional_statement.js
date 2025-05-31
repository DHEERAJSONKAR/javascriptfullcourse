/*conditional statement
conditional staytement are used to perform different actions based on different conditions.
they help control the flow of your code based on conditions that evaluate to true or false.
*/

/* if statement 
syntax: if (condition) {
// code to be executed if condition is true}
*/
 let  age = 75;
 if(age>= 18){
    console.log("you are an adult");
    // if(age > 65){
    //     return;  // return statement will stop the execution of the function
    // }
    console.log(age);
 }else{
    console.log("you are a minor");
    console.log(age);
 }



 // if -else statement

 let score = 85;
 if(score >= 90){
    console.log("grade A");
 }
 else if(score>=65){
    console.log("grade B");

 }else if(score>=40){
     console.log("grade C");    
 }
 else{
console.log("fail");    
 }
 
// ternary operator (conditional operator)
// a shorthand for if....else

// syntax: condition ? expressional : expression2;

let age1 = 10;
let message = (age1>=20) ? "you can give vote" : "you can not give vote";
console.log("message:", message);


// switch statement
// used for testing a variable against multiple values

/* syntax: switch(expression){
 case val1: // code to be execute: break;
 case val2: // code to be execute: break;
 default: // code to execute;
}
 */

let day =3 ;
switch(day){
   case 1:
   console.log("monday");
   break;
   case 2:
      console.log("tuesday");
   break;
   case 3:
         console.log("wednesday");
   break;
   default:
      console.log("this is no day");
}


switch(true){
   case (score >= 90 && score<=100):
      console.log("Grade A");
      break;
   case (score >=75 && score <=90):
      console.log("Grade B");
      break;
   case (score >=0 && score <=75):
      console.log("grade c");
      break;
   default:
      console.log("Fail");         

}
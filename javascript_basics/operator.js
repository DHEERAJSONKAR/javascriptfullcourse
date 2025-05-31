// arithmetic operators : +,-,x,/,%

// addition
let op1 = 5+4;

// subtraction
let op2 = 5-3;

// multiplication
let op3 = 5*4;

// division
let op4 = 4/2;

// modulus
let op5 = 5%2;
console.log("arithmetic operator: ", op1, op2, op3, op4, op5);


// comparison operators : 


// ==(equal to means value only not check type)
let isEqual = (5== "5"); // true (loose comparison)

// ===(strict equal to means value + type)
let isStrictEqual = 5 === "5"; // false (strict comparison)

// not equal to (!=) - value only
let isNotEqual = 5 != "5";  // false (loose comparison)

// !==(strict not equal to means value + type)
let isStrictNotEqual = 5 !== "5"; // true (strict comparison)

console.log("comparison operator: ", isEqual, isStrictEqual, isNotEqual, isStrictNotEqual);

// logical operator
// && (and)
let lop1 = true && false; // false - 1 * 0 = 0

//  ||(or)
let lop2 = true || false; // true - 1 + 0 = 1

// !(not) invert the value - true becomes false, & vice verse
 
let lop3 =!true; // false

console.log("logical operator: ", lop1, lop2, lop3);


/*define a variable to check if a person age is between 18 -64 or not */

// combining multiple conditions   
let age = 35;
let isAdult = (age >= 18 && age <=64); // true age is between 18 and 64
console.log("isAdult: " , isAdult);


/* --------------------- increment (++) and decrement (--) operator ----------------------*/
/*
 pre-increment: ++variable
 post-increment: variable++
 pre-increment: increment the value of  the variable before it is used in the expression
 post-increment: increment the value of the variable after it is used in the expression
*/

let x =5;
console.log("pre-increment: ", ++x); // 6 (x is increment before being logged)
console.log(x); // 6

x = 5; // reset x
console.log( x++); // 5 (x is logged first, then incremented)
console.log("post-increment:", x); // 6 (x is now incremented)

/*
decrement operator (--)
the -- operator decreases the value of a variable by 1.

syntax: 
 pre-decrement: --variable
 post-decrement: variable--
 pre-decrement: decrement the value of the variable before it is used in the expression
 post-decrement: decrement the value of the variable after it is used in the expression
*/ 

let y = 5;
console.log("pre-decrement: " ,--y);
console.log(y);

y= 5;
console.log(y--);
console.log("post-decrement: ", y); // 4 (y is now decremented)


//    example of increment and decrement operator   

let a = 5;
let b= ++a +3;
console.log(a);
console.log(b); // 9 (a is incremented to 6, then added to 3)

let c =6;
let d = c++ + 8;
console.log(c);
console.log(d);


let String = "40";
String++;
console.log(String); // 41 (string is converted to number and incremented)



let bool = true;
bool++;
console.log(bool); // 2 (true is converted to 1 and incremented)


let isnumber = "Dheeraj Sonkar";
isnumber++;
console.log(isnumber);  

let val;
val++;
console.log(val);

val = null;
val++;
console.log(val);


let x1 =5;
x1 += ++x1;
console.log(x1);

x1 = 5;
x1 += x1++;
console.log(x1);



// Real world example of increment and decrement operator 


// managing counters

let cartItem =0;
cartItem++;
console.log("cart item: ", cartItem);

// remove cart item

cartItem--;
console.log("remove cart item:", cartItem);

// array index
let fruit = ["apple", "banana", "orange", "grapes", "papaya"];
let index = 0;
console.log(fruit[index++]);
console.log(fruit[index]);
console.log(fruit[++index]);
console.log(fruit[++index]);
console.log(fruit[++index]);
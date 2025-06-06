/* practice problem 
1. write a program to check if a number is positive, negative, or zero.
*/
let num =0;
if(num>0){
    console.log("this is positive number");
}
else if(num<0){
    console.log("this is negative number");
}
else{
    console.log("this is zero number");
}

// 2. write a program to print number from 1 to 10 using for loop
for(let i = 1; i<=10; i++){
 console.log("print a number 1 to 10:", i);
}

// 3. create a simple program that handles a division by zero error.
try{
    let result= 10/0;
    console.log(result);
}catch(error){
    console.log("error:", error);
}
/*
loops in javascript are used to execute a block of code repeatedly until a specified condition is met. They are
essential for tasks like iterating over data, automating repetitive actions, or performing calculations.
*/

/*
for loop - block of code repeatedly.. used when the number of iterations is known which means execute a block of code a specific number of times.
*/

for (let i = 0; i < 5; i++) {
  
  console.log("number is:", + i)
}


/* while loop- execute a block of code as long as the conditions is true.  */
let i = 1;
while(i<5){
    console.log("while loop number is:" , i);
    i++;
}

// do while loop - similar to while loop, but the block execute at least once, even if the condition is false.
let x = 1;
do{
    console.log("do while number is:", x);
    x++;
}while(x<=0);


// for.. in loop -iterate over the keys/properties of an object.
// use case: used for obects, but not sutable for arrays.
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person){
    console.log(key  + ":" + person[key]);
}

const fruits = ["apple", "banana", "cherry", "mango"];
for(let index in fruits){
    console.log(fruits[index]);
}

/* for.. of loop-  iterates over values in iterable objects like arrays. strings. or maps. */

// the entrices() method returns an iterator that contains both the index and the value.
let vegitables = ["carrot", "potato", "onion", "cabbage"];
for (let vegitable of vegitables ){
    console.log("for of loop :", vegitable);
}

const word = "dheeraj";
for ( let char of word){
    console.log(char);
}

const user = new Map([
    ["name", "saurabh"],
    ["age", 30],
    ["city", "New York"]
]);

for(let [key, values] of user){
    console.log(`${key} : ${values}`);
}

// advanced concepts in loops
// break statement- exit the loop immediately when break condition is met.
for(let k = 0; k<=10; k++){
    if(k===5) break;
    console.log("break loop:", k);
}

// continue statement - skip the current iteration and move to the next one.
for(let j = 0; j<=5; j++){
    if(j===3) continue;
    console.log("continue loop:",j);
}

// nested loops - loops within loops
for(let a =1; a <=3; a++){
    for(let b= 1; b<=2; b++){
        console.log(`a: ${a}, b: ${b}`);
    }
}




/*
 choosing the right loop
 * use for - when you know the number of iterations.
 * use while - when the number of iterations depends on a conditions.
 * use do.. while loop - when the code must execute at least once.
 * use for.. in loop - for object. 
 * use for.. of loop - for arrays, strings, or iterable objects.
 * use break - to exit the loop immediately.           
*/
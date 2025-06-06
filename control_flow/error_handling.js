/*
structure of try..catch..finally in javascript
try block - code that may throw an error is written here.
catch block - code that handles the error if it occurs.
finally block - code that will execute regardless of whether an error occurred or not. (optional)

*/

try{
    let num=10/0;
    console.log(num);

    let a = Number('hello');
    console.log(a)

    if(isNaN(a)){
        throw("not a number");
    }

}
catch(error){
 console.log("exeception define:", error);
}
finally{
console.log("hello word");
}
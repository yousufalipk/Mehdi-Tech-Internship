//Simple logging text 
console.log("Ameer Yousuf Ali Bhatti");

//Type of declaration in JS
let name1 = 'Yousuf'; //Only Avaliable inside block
var name2 = 'Haider'; //Avaliable throughout function
const name3 = 'Ali'; //Value cannot be changed of constant

//Logging Data stores using diffrent types
console.log(name1);
console.log(name2);
console.log(name3);

//Declaring two variables 
let fname = 'Yousuf' , lname = 'ali';

console.log("First Name: " + fname + "- Last Name: " + lname);

/*
==> Primitive-Value Type 
String - Ali
Number  - 2323
Boolean - true/false
undefined - Is a type & we set the value to undefined
null - clear the value / 0
*/

// Javascript a dynamic language  - As variable declared data type can be change at any point.

/*
==> Refrence Types 
Object 
Array 
Function 
*/

//Objects in Javascript 

let obj = {
    name: 'Ali', 
    age: '21', 
    sex: 'Male'
}

//Logging object & its variables 
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.sex);

//Arrays in Javascript 

let selectedColors = ['red', 'blue', 'green'];
console.log(selectedColors);
console.log(selectedColors[2]);

//Direct Method
selectedColors[3] = 'black';
console.log(selectedColors);

//Push Method
selectedColors.push('yellow');
console.log(selectedColors);

//Logging number of items in an array
console.log(selectedColors.length);


//sorting array 
selectedColors.sort();
console.log(selectedColors);

//For loop in javascipt 

const fruits = ['banana' , 'apple', 'mango', 'watermelon'];
let flength = fruits.length;

for(let i=0; i<flength; i++){
    console.log("Fruit" + i + " " + fruits[i]);
}

//Functions in Javascript 
function display(fname, lname) {
    console.log("Hello World " + fname + " " + lname );
}

display('yousuf', 'bhatti');
display('haider', 'bhatti');
display('wazir', 'bhatti');

function add(a, b){
    let sum = a + b;
    console.log("Sum of " + a + " & " + b + " is: " + sum);
}

add(4,4);

function subtract(a, b){
    let difference = a - b;
    return difference;
}

console.log("Difference: " + subtract(10, 5));

//Function for square of a number 
function square(num) {
    return num*num;
}

console.log("Square of 10 is: " + square(10));

//IF else 

function calculator (type, a, b) {
    if(type == 'sum'){
        return a+b;
    }
    else if (type == 'difference'){
        return a-b;
    }
    else if (type == 'product'){
        return a*b;
    }
    else if(type == 'division'){
        return a/b;
    }
    else{
        console.log("Invalid Type");
    }
}

console.log("\nCalculator");
console.log("Sum " + calculator('sum', 1, 2));
console.log("Difference " + calculator('difference', 10, 5));
console.log("Product " + calculator('product', 10, 5));
console.log("Division " + calculator('division', 10, 2));


//Arrow function 

let sum = (a,b) => {
    let sum = a+b;
    console.log(`Sum is : ${sum}`);
}

console.log(sum);
console.log(sum(2,2));


// While loop  
/*
let a = 0 , n=100;

while (a<=n){
    console.log(" " + a);
    a++
}
*/

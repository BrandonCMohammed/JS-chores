console.log("Hello world!");

//variables
let name = 'Brandon';
console.log(name);

//const
const interestRate = 0.1; 

//objects
 let person = {
    name : 'Brandon',
    age : 22
 };

 console.log(person);

    //To access
console.log(person.name);
    //OR
console.log(person['age']);

//arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors)

//functions

function helloWorld(name, lname){
    console.log("hello " + name + " " + lname +" from function!");

}

helloWorld("Brandon", "Mohmamed");

function helloWorld2(name, lname){
    return ("hello " + name + " " + lname +" from function 2!");

}

console.log(helloWorld2("Brandon", "Mohmamed"));

//loops

for (let i = 0; i < 10; i++){
    console.log(i)

};

//If statements
let x = 0;

if (x ==0 ){
    console.log("HI")
} else if(x > 0){
    console.log("HII")
}else{
    console.log("HII")
}
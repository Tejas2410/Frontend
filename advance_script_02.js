/*
Higher order function
Constructor function
First class Function
iife
prototype
prototype inheritance
this
*/

// Higher order function are the function which accepts function as a parammeters or returns a function or both
// For ex :  forEach method always takes another function as a parameter , So forEach is a higher order function.

function abcd(val) {

}

abcd(function(){}); //  Higher order func

function abcd() {
    return function(){};
}

abcd(); //  Higher order func

//forEach method

var arr = [1 , 2 , 3 ,4 , 5];

arr.forEach(function(){});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Constructor function
// normal func jisme this keyword use kiya ho and while calling func we use new keyword.

function blueprintOfBiscuit() {
    this.width = 12;
    this.height = 22;
    this.taste = "Sugary";
    this.color = "Brown";
}

var obj1 = new blueprintOfBiscuit();
var obj2 = new blueprintOfBiscuit();

console.log(obj1);
console.log(obj2);

// jab humhe ek jaise properties wale bahut saare elements banane ho uss wakt hum constructor function use kar skte ho.

function circularButtonBanao(color) {
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}

var obj1 = new circularButtonBanao("red");
var obj2 = new circularButtonBanao("green");

console.log(obj1);
console.log(obj2);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// First class Function -> are the function that are treated as a normal value or like a variable
// you can save them as or pass them as arguments to other functions. 

var val = function abc() {

}

// or

function abcd(val) {

}

abcd(function(){}); //  Higher order func

setTimeout(function(){});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// new keyword -> creates object in heap memory and reference is created in stack call

// creates blank object for the constructor func which is getting called just after new keyword.

function cons(){
    this.age = 12;
}

new cons();

//o/p
// blank obj
{
    age : 12;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// iife -> immediately invoked function expression
// iife hai funvtion ko turant chalane ki kala (immediately invoked) , aur iife k andar hum joh varaible banate hai voh
// private variables hote hai , usko access krne k liye getter and setter methods use hote hai.


var ans = (function() {
    var privateVal = 12345;

    return {
        getter : function(){
            console.log(privateVal);
        },
        setter : function(val) {
            privateVal = val;
        }
    }
})();

console.log(ans.getter()); // 12345
ans.setter(15);
console.log(ans.getter()); // 15

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// prototype refer page no. 17 , 18 , 19

// [[prototype]] contains many helper properties and method which we can use to complete our task.
// let's say we create an array and we want to know length of it , we use .length property , 
// cos many properties and method are available to use prebuild by js creators inside prototype of every object.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Prototype Inheritance : refer page 20 , 21
// Prototype -> one extra property given by js to every object
// Inheritance is done in js with the help of prototype is called as prototype inheritance

var Human = {
    canFly : false,
    canWalk : true,
    canRun : true
}

var Developer = {
    canMakeWebsite : true,
    canDoCOding : true
}

Developer .__proto__ = Human; // Developer inherites Human

console.log(Developer.canFly); // false

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// global scope
console.log(this); // window ( some features js not gives that is given by browser)

// local scope
function abcd(){
    console.log(this); // window
}
abcd();

// window example
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] 

// ek function joh object k andar ho usse method kehte hai
// method  -> this value is obj

var obj =  {
    name : "Tejas",
    baatkaro : function(){
        console.log(this); // { name: 'Tejas', baatkaro: [Function: baatkaro] }
        // current obj under execution
    }
}

obj.baatkaro();
  
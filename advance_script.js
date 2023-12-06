/*
-var let const
--the difference
*/

// javascript 
// es5(old) ->  var
// es6(new) version -> const let
// We are using es5 + es6 (when web browser gets update it also update new properties of (html , css , js) preinstalled in browser)


// var old js mein tha

// var function scoped hota hai -> var apne parent func me kahi bhi use ho skta hai
function abcd() {
    for(var i = 0 ; i < 5 ; i++) {
        console.log(i); // 0 1 2 3 4
    }
    console.log(i); // 5 
}
abcd();

// var add itself to the window object
    // -> js me kahi saare features hai par kuch features joh hum use krte hai voh nhi hai
    // par phir bhi use kr paate hai kyuki wo features js language use kar leti hai window object se 
    // (window is a box of features given by browser to use)
    // alert prompt console (part of window object)

    var a = 10; // expose variable name on browser
 

// let const new js mein hai
// let braces scoped hota hai

function abcd() {
    for(let i = 0 ; i < 5 ; i++) {
        console.log(i); // 0 1 2 3 4
    }
    // console.log(i); // error
}
abcd();

// let doesn't add itself to the window object

let b = 10;


// execution context is a container where the function code is executed and it is created when function is called.
// it contains 3 things, variables , function and lexical environment of that function.

// lexical environment hota hai ek chart jisme likha hota hai apka particular function kin cheejon ko access 
// kar skta hai aur kinko nhi. ex. abc() can access a and dummy() but not b.
// it holds function scope and it's scope chain.

function abc(){
    var a = 10;
    function dummy(){
        var b = 12;
    }
}

abc(); // func abc() can access var a and func dummy() but not var b (cos var has scope inside the parent func i.e. dummy)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// how to copy reference value

var m = [ 1 , 2 , 3 , 4 , 5];
var n = m; // n is referring to array m memory location

n.pop();
console.log(m); // [ 1, 2, 3, 4 ]
console.log(n); // [ 1, 2, 3, 4 ]

var x = [ 1 , 2 , 3 , 4 , 5];
var y = [...x]; //spread operator copies array x values and repace in place of spread operator
                //~~~~~~

y.pop();
console.log(x); // [ 1, 2, 3, 4, 5 ]
console.log(y); // [ 1, 2, 3, 4] // y is not referring to array x memory location


// copy reference value in obj

var obj = {name:"Tejas"};
var copyobj = obj;

obj.name = "Hello";
console.log(obj); // { name: 'Hello' }
console.log(copyobj); // { name: 'Hello' }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var obj = {name:"Tejas"};
var copyobj = {...obj}; // spread operator copies object of obj to copyobj

obj.name = "Hello";
console.log(obj); // { name: 'Hello' }
console.log(copyobj); // { name: 'Tejas' }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Truthy and Falsy
//js me kuch bhi likho 2 types k hote hai Truthy and Falsy

//Falsy values -> 0 , false , undefined null , NaN , document.all

if(0) {
    console.log("true");
} else {
    console.log("false");
}
//false

if(-1) {
    console.log("true");
} else {
    console.log("false");
}
//true

if("Tejas") {
    console.log("true");
} else {
    console.log("false");
}
//true
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

switch(2) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Not a valid Input");
} // Tuesday

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// forEach loop only works on array

var arr = [10 , 20 , 30 , 40 , 50];
arr.forEach(function(val){
    console.log(val);
});
// o/p
// 10
// 20
// 30
// 40
// 50

var arr = [10 , 20 , 30 , 40 , 50];
arr.forEach(function(val){
    console.log(val + 2);
});

// forEach will not make change in original array it changes array tmeporary copy , original array will remain same.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// forin loop
// objects par loop karne k liye forin loop use hota hai

var obj = {
    name : "Tejas",
    age : 23,
    city : "pune"
}

for(var key in obj) {
    console.log(key);
}
// o/p
// name
// age
// city

for(var key in obj) {
    console.log(key , obj[key]);
}
// o/p
// name Tejas
// age 23
// city pune

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var a = 12;

do{
    console.log(a);
    a++
} while(a > 15); // condition is false

// o/p -> 12

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// callback function
// aisa code joh baad me chlta hai , usse hum function dedete hai , ye func apna kaam complete karne k baad chalta hai , 
// joh func hum dete hai voh normal func hi hota hai usse hum callback func khete hai.

//callback function
setTimeout(function(){
    console.log("2 minutes halt");
} , 2000);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// First class function
// We can use/treat function as a value/variable

// var a = function(){console.log("Hey");};
// a(); // Hey

function abcde(a) {
    a();
}

// func can be stored in an variable so we can pass func as parameter
abcde(function(){console.log("Hello");}); // Hello

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//how arrays are made behind the scenes

var arr = [10 , 20 , 30 , 40];
console.log(typeof(arr)); // object

// arrays are object in js

// arr {
//     1 : 10,
//     2 : 20,
//     3 : 30,
//     4 : 40
// }

arr[-1] = 2; // only in js negative index is allowed cos arrays are obj
console.log(arr); // [ 10, 20, 30, 40, '-1': 2 ]

console.log(typeof({})); // object
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// how to delete object props

var obj = {
    name : "Tejas",
    age : 24
}
delete a.age;
console.log(obj); // { name: 'Tejas', age: 24 }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
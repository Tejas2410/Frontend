/*
JS
-word vs keyword
-var let const
--the difference
--window object (set of features given by browser)
--browser context api (includes window obj , heap and stack)
--stack ( first in last out)
--heap memory -> memory where data is stored
--execution context 
--lexical environment
-hoisting
-types in js
--how to copy reference value
primitive and reference
conditionals // if else else-if 
--truthy vs falsy
loops // for and while
--foreach forin  do-while
-function
-- callback function
-- what is first class func
-arrays
-push pop shift unshift splice
-- how arrays are made behind the scenes
--why we can make negative index array in js
-object
-props vs methods
-updating object props
--how to delete object props
-- practice questions and scenerios
*/

// word vs keyword ( word ko compiler nhi samjata aur keyword ko compiler smjta hai)
//chacha -> word
// for -> keyword


//var const let
//variable and constant

// code me kuch bhi data store krna hai toh variable use hota hai (variable matlab value badle)
// constant (value badalta nahi hai)

const a = 10;
var b = 20;
console.log(a + b); // 30
// a = 20; // const value cannot be change
b = 30;
console.log(a + b); // 40


//hoisting - variable and function are hoisted which means there declaration is moved on the top of the code

var c = 10;

var c; // js will covert above line in this and declaration will move to the top of the code
c = 10;

var d; // default value is undefined
console.log(d); // undefined (cos of hoisting)
d = 10;

// undefined vs not defined
// when var is declared and try printing then undefined
// when var is not declare and try printing than not defined


//primitives and reference


//primitives = number , string
// reference = [] () {}
// aesi kohi bhi value jisko copy krne par real copy nhi hota , balki us main value ka reference pass hojaata hai, 
//Aur jiska copy krne par real copy ho jaaye wo value primitive type value hai


var m = 10;
var n = m;
 n += 2;
 console.log(n); // 12

 var arr = [12 ,13];
 var arr1 = arr;

 arr1.pop();
 console.log(arr1);//[ 12 ]
 console.log(arr);// [ 12 ] // cos arr1 is refering to arr ka array


 //conditionals // if else else-if 
 
 if(11>11){

 } else if(12 > 11) {

 } else {

 }


 //loops  (matlab repeat) // for and while

 for(var i = 0 ; i <= 10 ; i++) {
    console.log(i);
 }

 var i = 0;

 while(i < 11) {
   console.log(i);
   i++;
 }


 // function is use for 3 things
 // 1. when I want to run my code not now but in future
 // 2. for code reuse
 // 3. when I want to run my code with different parameters

function sayHello(){
   console.log("hello");
}

sayHello();


function abcd(a , b , c){ // parameters (variables in which values of arguments are stored)
   console.log(a);
}

abcd(12, 13, 14); // arguments (real value that is give while calling func)

// arrays => to store multiple value in single variable
//arrays are group of values

var arr = [11 , 12 ,13 , 14 , 15];
arr.push(19); // [11 , 12 ,13 , 14 , 15 , 19] // add value at the end
arr.pop(); // [11 , 12 ,13 , 14 , 15] // remove value from end
arr.pop(); // [11 , 12 ,13 , 14]

arr.unshift(0); // [0 ,11 , 12 ,13 , 14] // add value at begining of arr

arr.shift() //[11 , 12 ,13 , 14] // remove value from begining of arr
arr.shift() //[12 ,13 , 14]

arr.splice(1 , 1); // remove value from between of arr (konse index se , kitne value starting from index)

console.log(arr); //[ 12, 14 ]


// objects
// ek bande k details ko hold krna in key-value pair

var ghadi = {
   brand: "Kenneth Cole", // property
   price: "16k",
   color: "silver",
   type: "automatic",
   digital: false,       // property

   sayHi : function(){console.log("Hi");} // method
}

console.log(ghadi.type); //automatic
console.log(ghadi.sayHi()); // Hi


ghadi.brand = "Titan Kenneth Cole";
console.log(ghadi);
1. What I Built:

I built a small JavaScript demo to visualize how hoisting works.
It demonstrates the behavior of different types of declarations:

var (hoisted and initialized with undefined)

let (hoisted but uninitialized, Temporal Dead Zone)

const (hoisted but uninitialized, must be assigned during declaration)

Function declarations (fully hoisted, callable before definition)

Function expressions (variable hoisted, function assignment not hoisted)

The output appears in the browser console.

2. How It Works:

var declarations are hoisted and initialized with undefined, so they can be accessed before assignment but return undefined.

let and const declarations are hoisted but uninitialized, so accessing them before declaration throws a ReferenceError (Temporal Dead Zone).

Function declarations are fully hoisted along with their body, allowing calls before definition.

Function expressions behave like variables: the variable is hoisted, but the function assignment is not. Calling them before assignment gives a TypeError.

3. Examples:

var example:
console.log(a); // undefined
var a = 5;
console.log(a); // 5

let example:
console.log(b); // ReferenceError
let b = 10;

const example:
console.log(c); // ReferenceError
const c = 20;

Function declaration:
greet(); // works
function greet() {
  console.log("Hello!");
}

Function expression:
hello(); // TypeError
var hello = function() {
  console.log("Hi!");
};
hello(); // works after assignment

4. References:

https://www.geeksforgeeks.org/javascript/javascript-hoisting/

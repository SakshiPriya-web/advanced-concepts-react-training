// Example 1: var is hoisted and initialized with undefined
console.log("var before declaration:", a); // undefined
var a = 5;
console.log("var after declaration:", a); // 5

// Example 2: let is hoisted but in Temporal Dead Zone (TDZ)
try {
  console.log("let before declaration:", b); // ReferenceError
} catch (e) {
  console.log("let before declaration error:", e.message);
}
let b = 10;
console.log("let after declaration:", b); // 10

// Example 3: const is similar to let
try {
  console.log("const before declaration:", c); // ReferenceError
} catch (e) {
  console.log("const before declaration error:", e.message);
}
const c = 20;
console.log("const after declaration:", c); // 20

// Example 4: Function declaration is fully hoisted
greet(); // works
function greet() {
  console.log("Hello from function declaration!");
}

// Example 5: Function expression is not fully hoisted
try {
  hello(); // TypeError
} catch (e) {
  console.log("function expression before assignment error:", e.message);
}
var hello = function() {
  console.log("Hello from function expression!");
};
hello(); // works after assignment

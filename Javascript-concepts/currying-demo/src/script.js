// Simple currying example
function add(a) {
  return function(b) {
    return a + b;
  };
}

const addTwo = add(5);
console.log("addTwo(4) =", addTwo(4)); // 9
console.log("add(3)(7) =", add(3)(7)); // 10

// Arrow function version
const addCurried = a => b => a + b;
console.log("addCurried(10)(2) =", addCurried(10)(2)); // 12

// More general curry utility
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example function to be curried
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log("curriedMultiply(2)(3)(4) =", curriedMultiply(2)(3)(4)); // 24
console.log("curriedMultiply(2, 3)(4) =", curriedMultiply(2, 3)(4)); // 24
console.log("curriedMultiply(2)(3, 4) =", curriedMultiply(2)(3, 4)); // 24

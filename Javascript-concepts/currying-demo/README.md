
1. What I Built  
I built a small JavaScript demo to illustrate function currying.  
It shows how a function accepting multiple arguments can be transformed into a sequence of functions each taking a single argument.  
In addition, I included a general `curry` utility to handle functions of any arity.

2. Key Concepts & How It Works

- Currying transforms a function `fn(a, b, c)` into `fn(a)(b)(c)`
- In the basic example:
  ```js
  function add(a) {
    return function(b) {
      return a + b;
    };
  }
Calling add(5)(4) returns 9.

The arrow version is more concise:
const addCurried = a => b => a + b;

The generic curry(fn) utility uses closures and argument accumulation:

If enough arguments are passed, call the original function.

Otherwise, return a new function that collects more arguments until ready.

curry(multiply) lets you call:

curriedMultiply(2)(3)(4)
curriedMultiply(2, 3)(4)
curriedMultiply(2)(3, 4)

3. Expected Output (Console)

addTwo(4) = 9
add(3)(7) = 10
addCurried(10)(2) = 12
curriedMultiply(2)(3)(4) = 24
curriedMultiply(2, 3)(4) = 24
curriedMultiply(2)(3, 4) = 24

4. References

https://www.geeksforgeeks.org/javascript/what-is-currying-function-in-javascript/
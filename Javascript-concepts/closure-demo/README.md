1. What I built

I built a small React project to understand closures. The project shows how to:

Create a closure that maintains a private counter variable.

Persist state across React re-renders using useRef.

Increment the counter every time a button is clicked.

Keep the UI simple while the closure handles the internal state logic.

2. What I learned

Closures: Functions that remember variables from their outer scope even after the outer function has executed.

Persistent State in React: Using useRef to store a closure allows state to persist across component re-renders.

Separation of Concerns: The closure handles the counter logic, while React state updates the UI.

Incrementing Logic: Each click correctly increments the private count variable without resetting.

3. What challenged me

Understanding why the counter was resetting on every render initially, and realizing that closures must be stored in useRef to persist across re-renders in a React component.

4. References

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
https://www.geeksforgeeks.org/javascript/closure-in-javascript/
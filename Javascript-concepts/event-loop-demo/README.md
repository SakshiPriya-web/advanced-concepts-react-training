1. What I Built

I built a small JavaScript demo to visualize how the Event Loop works.
It demonstrates the execution order of:

Synchronous code (runs immediately in the call stack).

Promises (microtasks) (executed right after synchronous code, before macrotasks).

setTimeout (macrotasks) (executed after microtasks).

The output appears both in the browser and in the DevTools console.

2. How It Works

Synchronous code executes first, top to bottom.

Promise callbacks go into the microtask queue, which has higher priority than macrotasks.

setTimeout callbacks go into the macrotask queue, executed only after the microtasks finish.

3. Expected Output

When we run the demo, the logs will appear in the following order:

1  
4  
3  
2  


Explanation:

1 → Synchronous code runs first.

4 → Still synchronous, runs immediately after 1.

3 → Promise (microtask) executes after synchronous code.

2 → setTimeout (macrotask) executes last.

4. References

GeeksforGeeks – What is an Event Loop in JavaScript?
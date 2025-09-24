
1. What I Built  
I created a small JavaScript demo to illustrate Callback Hell.  
It shows how nested callbacks are used to perform sequential asynchronous operations.


2. What is Callback Hell?    
Callback Hell happens when multiple asynchronous functions are nested within each other.  
This leads to deeply indented code that is hard to read, maintain, and debug.


3. How It Works  
- Three async steps (`step1`, `step2`, `step3`) are chained using nested callbacks.  
- Each step uses `setTimeout` to simulate asynchronous behavior.  
- The console output shows the execution order and demonstrates the “pyramid of doom” structure.


4. Reference  

https://www.geeksforgeeks.org/javascript/what-is-callback-hell-in-javascript/

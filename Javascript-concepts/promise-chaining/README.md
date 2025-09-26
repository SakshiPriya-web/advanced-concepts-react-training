1. What I Built  
The demo shows how multiple asynchronous tasks can be run in sequence, each waiting for the previous to finish.

2. How It Works  
- The `task(message, delay)` function returns a promise that resolves after a timeout, printing `message`.  
- We chain `task()` calls using `.then()` so that Task 2 waits for Task 1, and Task 3 waits for Task 2.  
- Any error in the chain is caught by the `.catch()` at the end.  
- In another chain, we fetch a user, then fetch orders for that user, passing values down the chain, and handling errors if the user is not found.

3. Expected Console Output  
Over time, we’ll see:
Task 1 completed
Task 2 completed
Task 3 completed
All tasks done
User: User1
Orders count: 1

If `fetchUser(0)` is used, we’d see an error caught:
Error: User not found


4. References  
https://www.geeksforgeeks.org/javascript/javascript-promise-chaining/
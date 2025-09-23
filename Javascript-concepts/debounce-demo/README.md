1. What I Built

I built a small JavaScript demo to show how debounce and throttle techniques work with a search input.
It demonstrates how to limit function calls when a user is typing, avoiding unnecessary triggers (like API calls) on every keystroke.

2. Key Concepts Learned

Debounce: Waits for a pause in user input; the function runs only after the user stops typing for a specified delay.

Throttle: Ensures a function is called at most once per specified interval, even if the event happens more frequently.

Helps improve performance by reducing redundant function calls.

3. How It Works

The debounce function wraps the actual search logic. It clears any previous timer if another input event occurs before the delay.

After the user stops typing for delay ms, the debounced function calls the search function.

Throttle is also implemented: it executes immediately and then ignores further inputs until the limit interval passes.

The demo shows results in the browser and logs events in the console for easier debugging.

4. References

https://www.geeksforgeeks.org/javascript/debouncing-in-javascript/

https://www.geeksforgeeks.org/html/implement-search-box-with-debounce-in-javascript/
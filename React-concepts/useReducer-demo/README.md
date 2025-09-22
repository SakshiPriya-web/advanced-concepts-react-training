1. What I built :

A small React app to understand how useReducer works. It shows:

Incrementing and decrementing a counter.
Resetting state to the initial value.
Updating state with a payload (e.g., add +5 or -5).
Managing all state updates in a single reducer function.

2. What I learned :

useReducer is useful when state logic is more complex than simple useState.

All updates are centralized in the reducer function, which makes the code more predictable and organized.

dispatch makes it easier to trigger updates without exposing internal logic.

You can pass additional data (payload) to reducers for flexible updates.

Why useReducer over useState?

Helps when next state depends on previous state (e.g., increment/decrement).

Simplifies complex state logic by handling all updates in one place.

Avoids prop drilling by passing just dispatch instead of multiple state setters.

3. What challenged me :

Understanding the difference between useState and useReducer and when to choose each.

4. References :

https://react.dev/reference/react/useReducer
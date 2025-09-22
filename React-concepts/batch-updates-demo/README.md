1. What I built :

A small React app to see how state updates work. It shows:

Updating the same state multiple times in one click.

Using updater functions to make sure state updates correctly.

What happens when state is replaced after other updates.

2. What I learned :

React batches multiple state updates to improve performance.

Calling setState(count + 1) multiple times might not work as expected because React uses the same value for all calls.

Using updater functions like setState(prev => prev + 1) ensures each update gets the latest state.

Replacing state after other updates overrides previous queued updates.

How batching improves performace : 

Without batching, each state update causes a re-render and DOM update, leading to many re-renders and slower UI for complex components.

With batching, multiple state updates are combined into a single re-render, resulting in fewer DOM updates and faster performance.

3. What challenged me :


4. References :

https://react.dev/learn/queueing-a-series-of-state-updates
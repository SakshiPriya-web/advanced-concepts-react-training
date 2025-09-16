1. What I built

I built a small React project to understand Higher-Order Components (HOCs). The project shows how to:

Create a HOC (withCounter) that adds logic to a component

Manage state (count) inside the HOC using useState

Pass down increment, decrement, and reset functions as props

Keep the Counter component focused only on UI while the HOC handles logic

2. What I learned

Higher-Order Components: Functions that take a component and return a new one with extra functionality.

Separation of Concerns: Logic stays in the HOC, UI stays in the wrapped component.

Reusability: The same HOC can enhance multiple components with shared behavior.

State Management: useState in HOC controls the counter while props pass logic to the child.

3. What challenged me

Understanding how props are passed from the HOC to the wrapped component and ensuring React re-renders correctly with updated state.

4. References

https://legacy.reactjs.org/docs/higher-order-components.html
https://www.geeksforgeeks.org/reactjs/react-js-higher-order-components/

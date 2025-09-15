1. What I built :

A small React app to understand how performance optimization works in React. It shows:

Using useCallback to avoid unnecessary re-renders when passing functions as props.
Using useMemo to avoid expensive recalculations when state changes unrelated to the calculation.
How React memoization improves efficiency in rendering and calculations.

2. What I learned :

useCallback keeps the same function reference between renders, so child components wrapped in React.memo don’t re-render unnecessarily.

useMemo remembers the result of expensive calculations and only recalculates when dependencies change.

Memoization helps React skip work when nothing important has changed.

How performance improves:

Without useCallback, every render creates a new function → child components re-render unnecessarily.

With useCallback, the function reference is stable → child re-rendering is prevented.

Without useMemo, expensive calculations run on every render → slower UI.

With useMemo, calculations run only when dependencies change → faster UI.

3. What challenged me :

Understanding the difference between memoizing functions (useCallback) vs memoizing values (useMemo).

4. References :

https://react.dev/reference/react/useCallback

https://react.dev/reference/react/useMemo
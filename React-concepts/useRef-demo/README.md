1. What I built :

A small React app to understand how useRef works. It shows:

Accessing and controlling a DOM element (auto-focus input on mount).
Storing values without causing re-renders (button click count in a ref).
Persisting values across renders (showing the previous count using a ref).

2. What I learned :

useRef gives a .current property that survives re-renders.

Unlike useState, changing a ref does not trigger re-renders.

Useful for:
Direct DOM access (focus, scroll, etc.).
Storing mutable values (timers, counters).
Tracking previous values across renders.
Works alongside useState and useEffect for non-UI values.

3. What challenged me :

Understanding when to use useState vs useRef for different cases.

4. References :

https://react.dev/reference/react/useRef
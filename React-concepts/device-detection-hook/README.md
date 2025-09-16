1. What I built :

I built a small React project to understand how to detect the user’s device and update the UI dynamically. The project shows:

How to create a custom hook (useDeviceDetection)

How to detect device type (Mobile, Tablet, Desktop) using screen width

How React updates the UI automatically on window resize

How to conditionally render different layouts for different devices

2. What I learned :

Custom hooks in React:

Hooks allow extracting reusable logic into separate functions.

useState stores the current device type.

useEffect is used to detect device type on mount and update it on resize.

Device detection with screen width:

window.innerWidth can determine whether the user is on Mobile, Tablet, or Desktop.

Breakpoints can be customized to fit different UI needs.

Re-rendering and reconciliation:

When state (device) changes, React re-renders only the affected parts.

Conditional rendering ensures the correct layout appears for each device type.

3. What challenged me :


4. References :

React Docs – https://reactjs.org/docs/hooks-intro.html

React Docs – https://react.dev/learn/reusing-logic-with-custom-hooks

Medium - https://medium.com/@josephat94/building-a-custom-hook-to-detect-user-device-in-react-js-e4dd6e0d2d9c
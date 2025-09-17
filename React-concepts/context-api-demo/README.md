1. What I built :

I built a small React project to understand how to use the Context API for global state management and implement a theme toggle (light/dark mode).  

The project shows:
How to create a ThemeContext with default values.  
How to provide context values globally with ThemeContext.Provider.  
How to consume context in components (Navbar and Button) using useContext.  
How to toggle between light and dark themes dynamically.  
How React re-renders only the components that consume the context when the theme changes.  


2. What I learned :

Creating Context:  
createContext() creates a context object with default values.  
A default theme (themes.light) is used if no provider wraps the component.  

Providing Context:  
Wrapping components with ThemeContext.Provider makes theme values available globally.  
Passing the theme state into value ensures all consumers access the current theme.  

Consuming Context:  
useContext(ThemeContext) allows direct access to theme values without prop drilling.  
Both Navbar and Button use context to update their styles dynamically.  

Re-rendering:  
When the toggleTheme function updates the theme, React re-renders only the components consuming the context.  
This avoids unnecessary re-renders across unrelated components.  


3. What challenged me :
 

4. References :

https://react.dev/learn/passing-data-deeply-with-context
https://www.freecodecamp.org/news/react-context-api-tutorial-examples/
1. What I built

I built a small React project to understand code splitting and lazy loading using React.lazy() and Suspense. The project shows how to:

Use React.lazy() to dynamically import components (Login, Dashboard, Listing).
Wrap lazy-loaded components in Suspense with a fallback loader.
Implement route-based code splitting using react-router-dom.
Optimize performance by loading only the code needed for the current route.

2. What I learned

Code Splitting:

Breaks the application into smaller chunks instead of one big bundle.
Each route/component is loaded only when needed.

Lazy Loading:

Defers the loading of a component until it’s actually rendered.
React.lazy(() => import("./Component")) dynamically imports the component.
Suspense provides a loading state while the component loads.

React Router Integration:

Routes are wrapped with Suspense so navigation loads components on demand.
Reduces initial load time, improving performance.

3. What challenged me


4. References

https://legacy.reactjs.org/docs/code-splitting.html

https://www.greatfrontend.com/blog/code-splitting-and-lazy-loading-in-react

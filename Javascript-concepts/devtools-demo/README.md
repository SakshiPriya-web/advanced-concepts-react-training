1. Accessing DevTools

Keyboard Shortcuts:

Windows/Linux: Ctrl + Shift + I or F12

macOS: Cmd + Option + I

Right-click on the webpage and select Inspect.

Browser Menu:

Chrome/Edge: Menu → More Tools → Developer Tools

Firefox: Menu → Web Developer → Toggle Tools

2. Key Panels in DevTools
    1. Elements Panel

    Purpose: Inspect and modify HTML and CSS.

    Use Cases:

    Debug layout issues.

    Edit styles on the fly.

    View DOM structure.

    2. Console Panel

    Purpose: View JavaScript logs, warnings, and errors.

    Use Cases:

    Output variable values.

    Trace code execution.

    Catch runtime errors.

    3. Sources Panel

    Purpose: Debug JavaScript with breakpoints and step-through execution.

    Use Cases:

    Set breakpoints to pause code.

    Step through code line by line.

    Inspect variables and call stacks.

    4. Network Panel

    Purpose: Monitor network requests and responses.

    Use Cases:

    Check API request status.

    Inspect request/response headers.

    Analyze load times.

    5. Performance Panel

    Purpose: Analyze page performance and rendering.

    Use Cases:

    Record page load times.

    Identify rendering bottlenecks.

    Optimize animations.

    6. Application Panel

    Purpose: Inspect storage and backend resources.

    Use Cases:

    View localStorage, sessionStorage, and cookies.

    Inspect IndexedDB and WebSQL data.

    Debug Service Workers and Cache Storage.

    7. Memory Panel

    Purpose: Detect memory leaks and monitor memory usage.

    Use Cases:

    Take memory snapshots.

    Compare memory usage over time.

    Optimize large or inefficient applications.

3. Debugging Workflow

Open DevTools using the methods mentioned above.

Reproduce the issue in your application.

Use the appropriate panel to inspect and debug:

Elements Panel: Modify HTML/CSS to fix layout issues.

Console Panel: Log variable values and errors.

Sources Panel: Set breakpoints and step through code.

Network Panel: Monitor network requests and responses.

Performance Panel: Record and analyze performance metrics.

Application Panel: Inspect storage and backend resources.

Memory Panel: Detect and fix memory leaks.

Apply fixes directly within DevTools and test changes in real-time.

4. Tips for Effective Debugging

Use console.log() to output variable values and trace code execution.

Set breakpoints in the Sources panel to pause code and inspect variables.

Monitor network requests in the Network panel to ensure API calls succeed.

Record performance metrics in the Performance panel to identify bottlenecks.

Inspect storage in the Application panel to debug issues with localStorage, sessionStorage, and cookies.

Detect memory leaks using the Memory panel to optimize application performance.

5. References:

https://developer.chrome.com/docs/devtools/

https://developer.mozilla.org/en-US/docs/Tools

https://www.freecodecamp.org/news/how-to-use-developer-tools-to-debug-javascript-in-the-browser/

6. How to Use DevTools for This Demo :

Network Panel

Open DevTools → Network tab.

Reload the page to see the API request to jsonplaceholder.typicode.com.

Console Panel

Observe the console.log("Fetched data:", result) output.

Click the button to trigger a deliberate error (ReferenceError).

Sources Panel

Set a breakpoint on setData(result) or the handleClick function.

Step through code to inspect variables and call stack.

Elements Panel

Inspect the <div> showing the fetched data.

Edit CSS styles live to see changes in real-time.
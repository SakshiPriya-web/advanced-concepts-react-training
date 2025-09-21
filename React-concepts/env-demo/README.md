1. Definition

An .env file is a simple text file where we define environment variables for our React project. These variables store configuration values (like API URLs, keys, or feature flags) outside of the codebase, so we don’t hardcode sensitive or environment-specific information directly in the code.

2. Usage

We use an .env file in React (Vite) to:

Keep sensitive information secure (e.g., API keys, secrets).

Differentiate environments (development, staging, production).

Make the app more flexible and maintainable, since values can be updated without modifying the source code.

3. Configuration

Create a file named .env in the root of the project (at the same level as package.json).

All variable names must start with VITE_, otherwise Vite will ignore them.

Example .env:

VITE_API_URL=https://jsonplaceholder.typicode.com
VITE_APP_NAME=MyReactEnvDemo


Restart the development server after creating or modifying .env:

npm run dev

4. Accessing Variables in React (Vite)

Inside React components or JS files, use import.meta.env:

console.log(import.meta.env.VITE_API_URL);
console.log(import.meta.env.VITE_APP_NAME);

5. References:

https://medium.com/@bhairabpatra.iitd/env-file-in-react-js-09d11dc77924

https://www.geeksforgeeks.org/javascript/how-to-load-environment-variables-from-env-file-using-vite/
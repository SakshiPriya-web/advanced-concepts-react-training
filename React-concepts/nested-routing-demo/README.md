1. What I built

I built a small React project to understand nested routing using React Router. The project shows how to:
Set up parent and child routes (/user, /user/profile, /user/account).
Use the Outlet component to render child routes inside the parent route.
Implement fallback routes with index and *.
Create both static nested routes (like Profile, Account) and dynamic nested routes (like /users/:userId).

2. What I learned

Nested Routes:
A parent route can contain multiple child routes.
Outlet renders the child route that matches the URL.
Example: Visiting /user/profile renders both User and Profile.

Index Route:
Acts as the default child route when only the parent path matches.
Example: /user can show Profile by default.

No Match Route:
Handles invalid routes within parent and global scope.

Dynamic Nested Routes:
Use :param (e.g., /users/:userId) for dynamic content.
useParams() retrieves the URL parameter inside the component.
Example: /users/1 shows user with ID 1.

3. What challenged me

Understanding the difference between absolute vs relative paths when linking inside nested routes.
Handling fallback routes (index and *) correctly to avoid blank screens.

4. References

https://reactrouter.com/en/main/start/tutorial
https://www.robinwieruch.de/react-router-nested-routes
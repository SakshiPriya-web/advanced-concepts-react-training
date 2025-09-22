1. What I built

I built a small React Todo App to practice different ways of using useEffect. The app lets users add and delete todos, stores them in localStorage, and shows short messages for actions.

2. What I learned

useEffect without dependency: In my app this just logs when the app re-renders. For the user it has no visible effect, but helps me debug.

useEffect with empty dependency: This loads todos from localStorage only once when the app starts. For the user it means their todos stay even after refresh.

useEffect with dependencies: This saves todos to localStorage whenever they change. For the user it means added or deleted todos are saved automatically.

useEffect with cleanup: This clears the success or delete message after three seconds. For the user it means messages disappear on their own.

3. What challenged me

Understanding when each type of useEffect runs.

4. References

React Docs – https://react.dev/reference/react/useEffect
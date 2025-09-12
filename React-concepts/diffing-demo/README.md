1. What I built :

I built a small React project to understand reconciliation and the diffing algorithm. The project shows:

what happens when the root element type changes

how React updates props and styles on the same element

how state is preserved when the same component type is re-rendered with new props



2. What I learned :

Reconciliation and diffing algorithm:

React uses a declarative approach where you describe what the UI should look like, and React handles the changes automatically.

It uses a diffing algorithm to quickly find and update only the parts that changed, making apps easy to write and fast to run.

The render function creates a tree structure of UI elements that represents the screen.

When state or props change, React builds a new tree, then uses diffing to update only the parts of the UI that changed, instead of rebuilding everything.

It follows a heuristic O(n) algorithm which is fast and efficient.

Root elements of different types:

When the root element type changes, state is lost and React builds a fresh instance.

Example: <div><Counter /></div> to <span><Counter /></span> → the old Counter is unmounted and the new Counter is mounted with fresh state.

Root elements of the same type:

If the type stays the same, React keeps the existing DOM node and only updates the changed attributes or styles.

Children are checked recursively.

Example: <div className="a" /> to <div className="b" /> only changes the className.

Example: <div style={{color:'red'}} /> to <div style={{color:'blue'}} /> only changes the color style.

Component elements of the same type:

If the component type is the same, React keeps the same instance.

It preserves state, updates props, and runs render again to diff the children.

Children comparison:

React compares children in order.

If a new child is added at the end, only that child is added.

If a new child is added at the beginning, React may re-render all children which is less efficient.

Keys:

Keys help React match children correctly across renders.

Example: <li key={id}>{name}</li>

Keys should be unique, stable, and predictable.

Using array index as a key can cause issues when items are reordered.



3. What challenged me :

The most challenging part was to practically understand the behavior of lists with and without keys.



4. References :

React Docs - https://legacy.reactjs.org/docs/reconciliation.html
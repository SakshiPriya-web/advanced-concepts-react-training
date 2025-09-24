The Temporal Dead Zone (TDZ) is the period between entering a scope (block) and the actual declaration of a variable defined with let or const. 

During the TDZ, the variable is in an “uninitialized” state. Accessing it results in a ReferenceError. 

Variables declared with let and const are hoisted but not initialized in this phase. 

var does not have a TDZ. var declarations are hoisted and initialized to undefined, so accessing them before declaration gives undefined, not an error. 

Explanation of TDZ and Why It Exists:

Hoisting: JavaScript moves declarations to the top of their scope before execution. With var, declaration + initialization (to undefined) happens. With let/const, only declaration is hoisted, not initialization. 

The TDZ is the time window after entering the scope but before the declaration/initialization of the variable. In that window, accessing the variable is illegal. 

This behavior helps avoid bugs from accessing variables too early or relying on default undefined values unexpectedly.

References:

https://www.geeksforgeeks.org/javascript/temporal-dead-zone-in-javascript/
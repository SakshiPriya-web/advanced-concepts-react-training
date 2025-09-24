// Example 1: let before declaration
function demoLet() {
  try {
    console.log(a); // ReferenceError
    let a = 5;
    console.log("After declaration:", a);
  } catch (error) {
    console.log("Error in demoLet:", error.message);
  }
}
demoLet();

// Example 2: const before declaration
function demoConst() {
  try {
    console.log(x); // ReferenceError
    const x = 100;
    console.log("After declaration:", x);
  } catch (error) {
    console.log("Error in demoConst:", error.message);
  }
}
demoConst();

// Example 3: var before declaration
function demoVar() {
  console.log(y); // undefined
  var y = 10;
  console.log("After declaration:", y);
}
demoVar();

// Example 4: Shadowing with let
function demoShadowing() {
  var foo = 10;
  try {
    if (foo) {
      console.log(foo); // ReferenceError (because of TDZ)
      let foo = 20; 
      console.log("Inner foo:", foo);
    }
  } catch (error) {
    console.log("Error in demoShadowing:", error.message);
  }
}
demoShadowing();

// Utility to print in browser
const print = (msg) => {
  const output = document.getElementById("output");
  const p = document.createElement("p");
  p.textContent = msg;
  output.appendChild(p);
  console.log(msg);
};

// 1. let
let n = 10;
{
  let n = 2;
  print(`Inside block n = ${n}`); // 2
}
print(`Outside block n = ${n}`); // 10

// 2. const
const PI = 3.14159;
print(`PI = ${PI}`);

// 3. Arrow functions
const add = (a, b) => a + b;
print(`add(2, 3) = ${add(2, 3)}`);

// 4. Destructuring
const person = { name: "Raj", age: 25 };
const { name, age } = person;
print(`Object destructuring → name: ${name}, age: ${age}`);

const colors = ["red", "blue", "green"];
const [first, second] = colors;
print(`Array destructuring → first: ${first}, second: ${second}`);

// 5. Spread operator
const nums1 = [1, 2, 3];
const nums2 = [...nums1, 4, 5];
print(`Spread operator → ${nums2}`);

// 6. Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
print(`Sum of 1,2,3,4 = ${sum(1, 2, 3, 4)}`);

// 7. Default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
print(greet());
print(greet("Bob"));

// 8. Template literals
const user = "Alice";
const userAge = 30;
print(`Template literal → Name: ${user}, Age: ${userAge}`);

// 9. for..of
const arr = [10, 20, 30, 40, 50];
for (const num of arr) {
  print(`for..of → ${num}`);
}

// 10. Maps and Sets
const map = new Map();
map.set("a", 1);
map.set("b", 2);
print(`Map get 'a' = ${map.get("a")}`);

const set = new Set([1, 2, 3, 3]);
print(`Set values = ${Array.from(set)}`);

// 11. Classes
class Animal {
  speak() {
    print("The animal makes a sound");
  }
}
const dog = new Animal();
dog.speak();

// 12. Promises
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched (after 2s)"), 2000);
  });
};
fetchData().then((data) => print(data));

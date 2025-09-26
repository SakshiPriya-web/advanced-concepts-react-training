// task() returns a promise with a delay

function task(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

// Promise chaining example
task("Task 1 completed", 1000)
  .then(() => task("Task 2 completed", 2000))
  .then(() => task("Task 3 completed", 1000))
  .then(() => {
    console.log("All tasks done");
  })
  .catch((err) => {
    console.error("Error in chain:", err);
  });

// Another example showing passing values and error handling
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 0) {
        reject("User not found");
      } else {
        resolve({ id: userId, name: "User1" });
      }
    }, 1000);
  });
}

function fetchOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ orderId: 1, userId: user.id }]);
    }, 1000);
  });
}

fetchUser(1)
  .then((user) => {
    console.log("User:", user.name);
    return fetchOrders(user);
  })
  .then((orders) => {
    console.log("Orders count:", orders.length);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function log(message) {
  const output = document.getElementById("output");
  output.innerText += message + "\n";
  console.log(message);
}

function runDemo() {
  document.getElementById("output").innerText = ""; // clear old logs

  log("1. Sync: Start");

  setTimeout(() => {
    log("4. Macrotask: setTimeout 0ms");
  }, 0);

  Promise.resolve().then(() => {
    log("3. Microtask: Promise.then");
  });

  log("2. Sync: End");
}

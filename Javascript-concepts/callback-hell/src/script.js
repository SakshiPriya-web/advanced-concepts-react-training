function step1(callback) {
  setTimeout(() => {
    console.log("Step 1: Data fetched");
    callback();
  }, 500);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2: Data processed");
    callback();
  }, 500);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3: Data displayed");
    callback();
  }, 500);
}

console.log("Callback Hell Example");

step1(function () {
  step2(function () {
    step3(function () {
      console.log("All steps completed (Callback Hell)");
    });
  });
});

console.log("Starting app");

setTimeout(() => {
  console.log("Inside of callback");
}, 2000);

setTimeout(() => {
  console.log("2nd callback with 0s");
}, 0);

console.log("Finishing app");

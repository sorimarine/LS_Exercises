function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// ReferenceError. When we use let, JavaScript creates a "temporary dead zone"
// in which the variables exist but doesn't have a value (even undefined)
// So the 'a' within that entire block never referenced the 'a' initialized
// just prior
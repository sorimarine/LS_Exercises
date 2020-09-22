let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// logs false. the b inside the if block does not exist outside of it.
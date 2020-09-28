function triangle(n) {
  for (let counter = 1; counter <= n; counter += 1) {
    console.log(' '.repeat(n - counter) + '*'.repeat(counter));
  }
}

triangle(5);
triangle(9);
triangle(0);
triangle(1);
triangle(-2);
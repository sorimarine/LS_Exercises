```
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
```

- above code will log *true*

- While the result would have been the same, the order of checking the expression would have been altered and changes in those values may not necessarily produce the same results again. Yes the parentheses was needed.
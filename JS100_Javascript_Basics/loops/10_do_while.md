```
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
```
```
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
```

- The while loop will not log anything because its condition was never true. 
- The do while loop will log 'Woooot!' once before terminating.
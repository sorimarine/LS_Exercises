Snippet 1:
```js script
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?
```

Snippet2:
```js script
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?
```

- snippet 1 will log *{prefix: 'Pacific'}*
- snippet 2 will log *{Indian: 'Pacific'}*
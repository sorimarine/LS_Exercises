let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = nestedArray.reduce((acc, curr) => {
  acc[curr[0]] = curr[1];
  return acc;
}, {});
console.log(person);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
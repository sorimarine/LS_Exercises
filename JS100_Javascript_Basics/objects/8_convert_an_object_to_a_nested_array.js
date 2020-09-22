let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let personArray = []
for (let property in person) {
  personArray.push([property, person[property]]);
}
console.log(personArray);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
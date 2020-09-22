function clone(obj) {
  let newObj = {}
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
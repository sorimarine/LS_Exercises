const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// logs { firstName: 'Jane', lastName: 'Doe' }. 
// This is because while a is constant, its properties are not.
// To make the properties constant, use Object.freeze.
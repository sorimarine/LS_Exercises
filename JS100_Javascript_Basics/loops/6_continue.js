let cities = [
  'Istanbul', 'Los Angeles', 'Tokyo', null, 
  'Vienna', null, 'London', 'Beijing', null
];

// logs the length of each string (not null) of the array cities on the console
for (let index = 0; index < cities.length; index += 1) {
  let city = cities[index];
  if (!city) continue;
  console.log(city.length);
}
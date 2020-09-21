let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// logs each element in the array fish, terminating immediately after logging 'Nemo'
for (let index = 0; index < fish.length; index += 1) {
  console.log(fish[index]);
  if (fish[index] === 'Nemo') break;
}
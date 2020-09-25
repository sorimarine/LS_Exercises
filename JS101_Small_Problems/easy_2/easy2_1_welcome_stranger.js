function greetings(nameArray, jobInfo) {
  let fullName = nameArray.join(' ');
  let greeting = `Hello, ${fullName}! Nice to have a ${jobInfo.title}` +
                 ` ${jobInfo.occupation} around.`
  console.log(greeting);
  return greeting;
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });
greetings(["Sorim", "Sam"], { title: "Super", occupation: "Awesome Dude" });
greetings(["Blue", "Moon", "Sways"],
          { title: "Something", occupation: "Meaningless" });
Problem
- Input: (array, object), call it (nameArray, jobInfo)
 - array:
  - 2 or more elements, combined with adjoining spaces to produce a name
 - objec: { title: string, occupation: string }

- Output:
 - greet the person, using his full name and mentions his title and occupation


Examples:
- input: (["Sorim", "Sam"], {title: "Super", occupation: "Awesome Dude"});
 - output: "Hello, Sorim Sam! Nice to have a Super Awesome Dude around.
- input: (["Blue", "Moon", "Sways"], {title: "Something", occupation: "Meaningless"})
 - output: "Hello, Blue Moon Sways! Nice to have a Something Meaningless around.

Data Structures: Array, Object

Algorithm:
- make person's full name
 - use nameArray.join(' ')
- output string: `Hello, ${full name}! Nice to have a ${jobInfo.title} ${jobInfo.occupation} around.`

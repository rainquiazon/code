// These are the two arrays: names and ages
const names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
const ages = [24, 65, 21, 5, 9];

// Create a new array to hold pairs of [name, age]
const paired = [];

// Pair each name with the corresponding age
for (let i = 0; i < names.length; i++) {
  paired.push([names[i], ages[i]]);
}

// Print each pair on a separate line
for (let i = 0; i < paired.length; i++) {
  console.log(paired[i]);
}

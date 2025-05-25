// These are the fixed arrays for numbers and names
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Combine numbers and names into one array
const combined = numbers.concat(names);

// Print the combined array
console.log("Combined array:", combined);

// Sort numbers from highest to lowest
numbers.sort((a, b) => b - a);
console.log("Numbers sorted from highest to lowest:", numbers);

// Sort names in alphabetical order
names.sort();
console.log("Names sorted alphabetically:", names);

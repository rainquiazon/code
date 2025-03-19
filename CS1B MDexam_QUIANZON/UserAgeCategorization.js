// Collect user's age using prompt and store it in the variable 'age'
var age = prompt("Enter your age:");

// Convert the user's input from a string to a number
age = Number(age);

// Check the age category using conditional statements
if (age < 5) {  // If the age is less than 5, the user is a toddler
    console.log("You are a Toddler (under 5 years).");
} else if (age >= 5 && age <= 12) {  // If the age is between 5 and 12, the user is a child
    console.log("You are a Child (5-12 years).");
} else if (age >= 13 && age <= 19) {  // If the age is between 13 and 19, the user is a teenager
    console.log("You are a Teenager (13-19 years).");
} else if (age >= 20 && age <= 35) {  // If the age is between 20 and 35, the user is a young adult
    console.log("You are a Young Adult (20-35 years).");
} else if (age >= 36 && age <= 60) {  // If the age is between 36 and 60, the user is middle-aged
    console.log("You are Middle-Aged (36-60 years).");
} else {  // If the age is above 60, the user is a senior
    console.log("You are a Senior (over 60 years).");
}

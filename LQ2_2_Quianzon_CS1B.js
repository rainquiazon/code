// printDogBreed.js - Beginner-Friendly Dog Breed Printer

function printDogBreed() {
    // Ask the user for a dog breed
    var breed = prompt("Enter a dog breed:");
    
    // Ask how many times to print
    var count = prompt("How many times to print?");
    
    // Convert input to a number
    count = parseInt(count);
    
    // Loop to print the dog breed multiple times
    for (var i = 0; i < count; i++) {
        console.log(breed);
    }
}

// Run the function
printDogBreed();

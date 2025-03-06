let correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    
    if (guess < correctNumber) {
        console.log("Too low!");
    } else if (guess > correctNumber) {
        console.log("Too high!");
    } else {
        console.log("Correct!");
    }
}

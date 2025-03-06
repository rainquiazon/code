let score = prompt("Enter your score:");
score = parseInt(score);

if (score >= 90) {
    console.log("Your grade is: Excellent.");
} else if (score >= 80) {
    console.log("Your grade is: Good.");
} else if (score >= 70) {
    console.log("Your grade is: Fair.");
} else {
    console.log("Your grade is: Needs Improvement.");
}

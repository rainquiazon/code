// matrixPrinter.js - Beginner-Friendly Matrix Printer with Mistakes

function matrixPrinter() {
    // Ask user if they want to create a matrix
    var answer = prompt("Do you want to create a matrix? (yes/no)");
    
    if (answer === "yes") {
        // Ask for 3 numbers (mistake: only asks for 2 numbers instead of 3)
        var num1 = parseInt(prompt("Enter first number: "));
        var num2 = parseInt(prompt("Enter second number: "));
        
        // Ask for 3 strings (mistake: only asks for 2 strings instead of 3)
        var str1 = prompt("Enter first string: ");
        var str2 = prompt("Enter second string: ");
        
        // Print matrix (mistake: using incorrect loop structure)
        for (var i = 0; i < num1; i++) {
            for (var j = 0; j < num2; j++) {
                console.log(str1 + " " + str2); // Mistake: Doesn't use the third string
            }
        }
    } else {
        console.log("Thank you, re-run the program if you change your mind.");
    }
}

// Run the function
matrixPrinter();

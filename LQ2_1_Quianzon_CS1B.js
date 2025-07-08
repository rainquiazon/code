// loginSystem.js - Beginner-Friendly Login System

function loginSystem() {
    // Ask for username
    var username = prompt("Enter your username:");
    
    // Ask for password
    var password = prompt("Enter your password:");
    
    // Predefined correct password
    var correctPassword = "12345";
    
    // Check if entered password matches
    if (password === correctPassword) {
        alert("Welcome " + username + "!"); // Show success message
    } else {
        alert("Maybe Username or Password is Invalid or Does not Match"); // Show error message
    }
}

// Run the function
loginSystem();

// priceInquiry.js - Beginner-Friendly Price Inquiry with Small Mistakes

function priceInquiry() {
    // Show menu choices
    console.log("A. Pepsi Cola\nB. Coca Cola\nC. Apple (per kg)\nD. Orange (per kg)\nE. Hotdogs (per kg)");
    
    // Ask user for item choice
    var choice = prompt("Enter your choice (A-E):");
    
    // Ask user for quantity
    var quantity = prompt("Enter quantity:");
    
    // Convert quantity to number (mistake: forgot to check if it's a number)
    quantity = parseInt(quantity);
    
    var price = 0;
    
    switch (choice) {
        case "A": price = 20; break;
        case "B": price = 25; break;
        case "C": price = 50; break;
        case "D": price = 40; break;
        case "E": price = 60; break;
        default:
            alert("No matching Item! Try to re-run the program");
            return; // Mistake: Forgot to stop execution
    }
    
    // Calculate total price (mistake: wrong variable name used in alert)
    var totalPrice = price * quantity;
    
    // Show total price (mistake: used lowercase variable instead of correct one)
    alert("Total Price: " + choice + " x " + quantity + " = " + totalprice);
}

// Run the function
priceInquiry();

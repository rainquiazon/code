// Sample Menu Data (Replace with your actual milk tea menu)
const menu = {
    Milkteas: [ //Category: Milkteas
        { name: "Classic Milk Tea", stock: 20, price: 80, description: "Simple and delicious milk tea" },
        { name: "Taro Milk Tea", stock: 15, price: 100, description: "Creamy taro milk tea" },
        { name: "Matcha Milk Tea", stock: 18, price: 120, description: "Subtle matcha milk tea" },
        { name: "Brown Sugar Milk Tea", stock: 12, price: 110, description: "Sweet brown sugar milk tea" },
        { name: "Thai Tea", stock: 10, price: 90, description: "Authentic Thai tea" }
    ],
    Toppings: [ //Category: Toppings
        { name: "Tapioca Pearls", stock: 30, price: 30, description: "Chewy tapioca pearls" },
        { name: "Pudding", stock: 25, price: 40, description: "Smooth milk pudding" },
        { name: "Jelly", stock: 20, price: 20, description: "Refreshing fruit jelly" },
        { name: "Coconut Jelly", stock: 15, price: 35, description: "Sweet coconut jelly" },
        { name: "Grass Jelly", stock: 22, price: 25, description: "Herbal grass jelly" }
    ],
    AddIns: [ //Category: AddIns
        { name: "Brown Sugar", stock: 25, price: 20, description: "Extra brown sugar" },
        { name: "Honey", stock: 20, price: 15, description: "Sweet honey" },
        { name: "Cream Cheese", stock: 18, price: 30, description: "Creamy cream cheese" },
        { name: "Salt Cream", stock: 15, price: 25, description: "Salty cream topping" },
        { name: "Chocolate", stock: 22, price: 25, description: "Chocolate syrup" }
    ],
    Extras: [ //Category: Extras
        { name: "Cheese Foam", stock: 10, price: 40, description: "Savory cheese foam" },
        { name: "Sea Salt Cream", stock: 8, price: 35, description: "Sweet and salty sea salt cream" },
        { name: "Mini Cookies", stock: 15, price: 45, description: "Mini chocolate chip cookies" },
        { name: "Brownie Bites", stock: 12, price: 50, description: "Fudgy brownie bites" },
        { name: "Popping Boba", stock: 18, price: 40, description: "Fruit-flavored popping boba" }
    ]
};

let cart = []; // Initialize the shopping cart

// Function to display the menu for a given category
function displayMenu(category) {
    console.log(`\n--- ${category} Menu ---`);
    menu[category].forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ₱${item.price} (Stock: ${item.stock})`);
    });
}

// Function to add an item to the cart
function addToCart() {
    const category = prompt("Enter category (Milkteas, Toppings, AddIns, Extras):").trim(); // Get the category from the user
    if (!menu[category]) { // Check if the category is valid
        alert("Invalid category!");
        return;
    }
    displayMenu(category); // Display the menu for the selected category
    const itemIndex = parseInt(prompt("Enter item number:")) - 1; // Get the item number from the user
    const item = menu[category][itemIndex]; // Get the item object
    if (!item || item.stock === 0) { // Check if the item is valid and in stock
        alert("Invalid item or out of stock!");
        return;
    }
    const quantity = parseInt(prompt("Enter quantity:")); // Get the quantity from the user
    if (isNaN(quantity) || quantity <= 0 || quantity > item.stock) { // Validate the quantity
        alert("Invalid quantity!");
        return;
    }
    item.stock -= quantity; // Update the stock
    cart.push({ ...item, quantity }); // Add the item to the cart
    alert(`${quantity} x ${item.name} added to cart!`); // Confirm the addition
}

// Function to remove an item from the cart
function removeFromCart() {
    if (cart.length === 0) { // Check if the cart is empty
        alert("Cart is empty!");
        return;
    }
    console.log("\n--- Your Cart ---"); // Display the cart
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} x ${item.quantity} - ₱${item.price * item.quantity}`);
    });
    const itemIndexToRemove = parseInt(prompt("Enter item number to remove:")) - 1; // Get the item number to remove
    const item = cart[itemIndexToRemove]; // Get the item object
    if (!item) { // Check if the item is valid
        alert("Invalid item!");
        return;
    }
    const quantityToRemove = parseInt(prompt("Enter quantity to remove:")); // Get the quantity to remove
    if (isNaN(quantityToRemove) || quantityToRemove <= 0 || quantityToRemove > item.quantity) { // Validate the quantity
        alert("Invalid quantity!");
        return;
    }
    item.quantity -= quantityToRemove; // Update the quantity
    if (item.quantity === 0) { // Remove the item if the quantity is 0
        cart.splice(itemIndexToRemove, 1);
    }
    alert(`${quantityToRemove} x ${item.name} removed from cart!`); // Confirm the removal
}

// Function to generate and print the receipt
function printReceipt() {
    if (cart.length === 0) { // Check if the cart is empty
        alert("Cart is empty!");
        return;
    }
    let totalPrice = 0; // Initialize total price
    console.log("\n--- Your Receipt ---"); // Print the receipt header
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity; //Calculate the total price for each item
        console.log(`${item.quantity} x ${item.name} - ₱${itemTotal}`); //Print each item and its total price
        totalPrice += itemTotal; // Add the item total to the total price
    });
    console.log(`\nTotal: ₱${totalPrice}`); // Print the total price
    const payment = parseFloat(prompt("Enter payment amount:")); //Get payment amount from user
    if (payment < totalPrice) { //Check if payment is sufficient
        alert("Insufficient payment!");
        return;
    }
    console.log(`Change: ₱${(payment - totalPrice).toFixed(2)}`); // Print the change
    console.log("Thank you for your order!"); // Print the thank you message
}

// Main function to run the milk tea ordering system
function runOrderSystem() {
    //Simulate Login (Replace with actual login)
    const cashierName = prompt("Enter cashier name to log in:"); // Get cashier name for login
    if (!cashierName) { // Check if login is cancelled
        alert("Login cancelled.");
        return;
    }
    console.log(`Logged in as: ${cashierName}`); // Display login message

    let choice; // Initialize choice variable
    do {
        console.log("\n--- Milk Tea Ordering System ---"); // Display menu options
        console.log("1. View Milkteas Menu");
        console.log("2. View Toppings Menu");
        console.log("3. View AddIns Menu");
        console.log("4. View Extras Menu");
        console.log("5. Add to Cart");
        console.log("6. Remove from Cart");
        console.log("7. Print Receipt");
        console.log("8. Cancel Order");
        console.log("9. Exit");

        choice = parseInt(prompt("Enter your choice:")); // Get user's choice

        switch (choice) {
            case 1: displayMenu("Milkteas"); break; // Display Milkteas menu
            case 2: displayMenu("Toppings"); break; // Display Toppings menu
            case 3: displayMenu("AddIns"); break; // Display AddIns menu
            case 4: displayMenu("Extras"); break; // Display Extras menu
            case 5: addToCart(); break; // Add to cart
            case 6: removeFromCart(); break; // Remove from cart
            case 7: printReceipt(); break; // Print receipt
            case 8: alert("Order cancelled."); cart = []; break; // Cancel order
            case 9: console.log("Exiting..."); break; // Exit the system
            default: alert("Invalid choice!"); // Handle invalid choice
        }
    } while (choice !== 9); // Continue until the user chooses to exit
}

runOrderSystem(); // Run the milk tea ordering system

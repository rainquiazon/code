// Ask the user if they want to create a grocery list
var createList = prompt("Do you want to create a grocery list? (y/n)");

if (createList === "y") { // Check if the user said "y"
    var groceryList = []; // Create empty list

    var itemCount = prompt("How many items do you want to add?"); // Ask how many items
    itemCount = Number(itemCount); // Convert input to a number

    // Get items from the user one by one
    for (var i = 0; i < itemCount; i++) {
        var item = prompt("Enter an item:");
        groceryList.push(item); // Add item to list
    }

    var groceryList_Sort = groceryList.slice().sort(); // Sort the list
    var groceryList_Reverse = groceryList.slice().reverse(); // Reverse the list

    // Show all lists
    alert("Original List: " + groceryList);
    alert("Sorted List: " + groceryList_Sort);
    alert("Reversed List: " + groceryList_Reverse);
} else {
    alert("No grocery list created."); // If "n", do nothing
}

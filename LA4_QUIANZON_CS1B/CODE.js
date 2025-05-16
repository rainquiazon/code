// Assignment 4: Simple Queueing System using Array

// create an empty array to store customer names
let customerQueue = [];

// loop for 5 customers
for (let i = 0; i < 5; i++) {
  // ask the customer to enter their name
  let name = prompt("Enter your name:");

  // check if input is not empty
  if (name) {
    // push the name to the queue
    customerQueue.push(name);

    // give customer number (index + 1)
    alert("Welcome, " + name + "! Your number is " + (i + 1));
  } else {
    alert("Name cannot be empty. Please refresh and try again.");
    break;
  }
}

// display the full queue in console
console.log("Initial Queue:", customerQueue);

// loop until the queue is empty
while (customerQueue.length > 0) {
  // ask the CSR which number to service
  let numberToService = prompt("Enter customer number to service:");

  // convert to index (number - 1)
  let index = parseInt(numberToService) - 1;

  // check if valid index
  if (!isNaN(index) && index >= 0 && index < customerQueue.length) {
    // show name of customer to be serviced
    alert("Now servicing: " + customerQueue[index]);

    // remove the customer from queue
    customerQueue.splice(index, 1);

    // show updated queue
    console.log("Updated Queue:", customerQueue);
  } else {
    alert("Invalid number. Try again.");
  }
}


// Assignment 5: Queueing System with Hash Function

// create an empty object to be our hash table
let hashTable = {};

// function to create simple hash using ASCII codes
function simpleHash(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return hash % 100;
}

// add 5 customers
for (let i = 0; i < 5; i++) {
  let name = prompt("Enter your name:");

  if (name) {
    let key = simpleHash(name);

    // check if key already used
    while (hashTable.hasOwnProperty(key)) {
      key = (key + 1) % 100; // simple linear probing
    }

    hashTable[key] = name;
    alert("Hello " + name + ", your number is " + key);
  } else {
    alert("Name cannot be empty. Please refresh and try again.");
    break;
  }
}

console.log("Initial Hashed Table:", hashTable);

// loop until hashTable is empty
let servicedCount = 0;
while (servicedCount < 5) {
  let keyToService = prompt("Enter number to service:");
  let numKey = parseInt(keyToService);

  if (!isNaN(numKey) && hashTable[numKey]) {
    alert("Now servicing: " + hashTable[numKey]);
    delete hashTable[numKey];
    console.log("Updated Hashed Table:", hashTable);
    servicedCount++;
  } else {
    alert("Number not found or already serviced.");
  }
}

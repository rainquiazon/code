// Create an empty array for the stack
const stack = [];

// Function to get the top item without removing it
function peek() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack[stack.length - 1];
}

// Function to add an item to the top of the stack
function push(item) {
  stack.push(item);
  console.log(`Added "${item}" to the stack.`);
  console.log("Top item now:", peek());
  console.log("Current stack:", stack);
}

// Function to remove the top item from the stack
function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty. Nothing to remove.");
    return;
  }
  const removed = stack.pop();
  console.log(`Removed "${removed}" from the stack.`);
  console.log("Top item now:", peek());
  console.log("Current stack:", stack);
}

// Ask user to enter 5 grocery items
for (let i = 1; i <= 5; i++) {
  const item = prompt(`Enter grocery item ${i}: `);
  push(item);
}

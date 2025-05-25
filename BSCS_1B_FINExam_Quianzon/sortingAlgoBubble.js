// Create an empty array for numbers
const numbers = [];

// Ask the user to enter 10 numbers
for (let i = 1; i <= 10; i++) {
  let input = prompt(`Enter number ${i}: `);
  let num = parseInt(input);
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    console.log("Please enter a valid number.");
    i--; // ask again for the same number
  }
}

// Bubble sort function with console output for each comparison
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j+1]}`);
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        console.log(`Swapped ${arr[j]} and ${arr[j+1]}`);
      }
    }
    if (!swapped) break; // no swaps means array is sorted
  }
  return arr;
}

// Sort the numbers and print the sorted array
const sorted = bubbleSort(numbers);
console.log("Sorted array:", sorted);
    

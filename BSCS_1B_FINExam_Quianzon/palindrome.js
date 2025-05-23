// Import prompt-sync to use prompt in Node.js
const prompt = require('prompt-sync')();

// Ask user input
const word1 = prompt("Enter the first word (e.g., RACECAR):");
const word2 = prompt("Enter the second word (e.g., RECORDER):");

// The rest of your code stays the same
function reverseString(str) {
  return str.split('').reverse().join('');
}

const reversedWord1 = reverseString(word1);
const reversedWord2 = reverseString(word2);

console.log("Original word 1:", word1);
console.log("Reversed word 1:", reversedWord1);

console.log("Original word 2:", word2);
console.log("Reversed word 2:", reversedWord2);

console.log(`Is "${word1}" a palindrome?`, word1 === reversedWord1);
console.log(`Is "${word2}" a palindrome?`, word2 === reversedWord2);

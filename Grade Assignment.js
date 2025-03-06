const prompt = require('prompt-sync')();
const score = parseInt(prompt('Enter your score: '));

// Determine grade using ternary statements
const grade = score >= 97 ? '1.00, Excellent' :
              score >= 94 ? '1.25, Excellent' :
              score >= 91 ? '1.50, Above Average' :
              score >= 88 ? '1.75, Above Average' :
              score >= 85 ? '2.00, Average' :
              score >= 82 ? '2.25, Average' :
              score >= 79 ? '2.50, Below Average' :
              score >= 76 ? '2.75, Below Average' :
              score >= 75 ? '3.00, Below Average' :
              score >= 72 ? '4.00, Poor' :
              '5.00, Poor';

console.log(`Your equivalent Grade is ${grade.split(',')[0]} ${grade.split(',')[1]}`);

// Determine final remarks using if..else if..else statements
if (score >= 90) {
    console.log('Final Remarks: HIGH PASS, Candidate for Cum Laude');
} else if (score >= 80) {
    console.log('Final Remarks: AVERAGE PASS');
} else if (score >= 75) {
    console.log('Final Remarks: LOW PASS');
} else {
    console.log('Final Remarks: FAILED, Needs Improvement');
}

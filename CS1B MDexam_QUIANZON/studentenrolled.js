// Creating two arrays for the subjects
var dsaList = [];  // Array to store students enrolled in DSA
var webDevelopment = [];  // Array to store students enrolled in Web Development

var subject;  // Variable to keep track of the current selected subject

while (true) { // Main loop to keep asking for subject selection
    // Asking for subject selection and converting input to uppercase
    var subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) Web Development").toUpperCase();

    // Assigning the chosen subject to the 'subject' variable
    if (subjectChoice == "A") {
        subject = dsaList;  // Assigning DSA list
    } else if (subjectChoice == "B") {
        subject = webDevelopment;  // Assigning Web Development list
    } else {
        alert("Invalid choice. Please enter A or B.");  // Handling invalid input
        continue;  // Restart the outer loop if input is invalid
    }

    while (true) { // Inner loop for operations on the selected subject
        // Asking the user for an operation and converting input to uppercase
        var operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

        if (operation == "A") { // Enroll a student
            var studentName = prompt("Enter student name to enroll:");  // Asking for the student's name
            subject.push(studentName);  // Adding the student to the selected subject's array
            alert(studentName + " has been added!");  // Confirmation message
        } 
        else if (operation == "B") { // Unenroll a student
            alert("Currently enrolled students: " + subject.join(", "));  // Displaying enrolled students
            
            var studentName = prompt("Enter student name to remove:");  // Asking for the name to remove
            var index = subject.indexOf(studentName);  // Finding the index of the student's name

            if (index !== -1) { // If the student exists in the list
                subject.splice(index, 1);  // Removing the student from the array
                alert(studentName + " has been removed!");  // Confirmation message
            } else {
                alert("Student not found.");  // Error message if student doesn't exist
            }
        } 
        else if (operation == "C") { // Select another subject
            break;  // Break the inner loop to reselect a subject
        } 
        else if (operation == "D") { // Exit the program
            alert("Final List:\nDSA: " + dsaList.join(", ") + "\nWeb Development: " + webDevelopment.join(", "));  // Display final lists
            return;  // Exit the entire program
        } 
        else { // Handling invalid input for operation
            alert("Invalid choice, try again!");  // Error message for invalid input
        }
    }
}

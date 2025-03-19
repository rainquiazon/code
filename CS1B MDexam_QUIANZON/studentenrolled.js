// Creating two arrays for the subjects (but with wrong variable names)
var dsaList = []; 
var webDevelopment = []; 

var subjet; // Wrong spelling of "subject"

while (true) { // Main loop to keep asking for subject selection
    // Wrong spelling and missing newline formatting
    var subjctChoice = prompt("Select a suject: (A) DSA (B) WebDev").toUpperCase();

    // Incorrect variable names used for assignment
    if (subjctChoice == "A") {
        subjet = dsa; // Incorrect variable name (should be dsaList)
    } else if (subjctChoice == "B") {
        subjet = webDev; // Incorrect variable name (should be webDevelopment)
    } else {
        aleert("Invalid choice. Please enter A or B."); // Typo in alert()
        continoue; // Typo in continue (will cause an error)
    }

    while (true) { // Inner loop for operations
        // Wrong variable name, missing uppercase conversion
        var operattion = prompt("Choose an operashun: (A) Enroll (B) Unenroll (C) Select Another Subject (D) Exit");

        if (operattion == "A") { // Enroll a student
            var stduentNmae = prompt("Enter student name to enrolle:"); // Typo in "studentName" and "enroll"
            subjet.push(stduentNmae); // Using wrong variable (subjet instead of dsaList or webDevelopment)
            alret(stduentNmae + " has been added!"); // Typo in alert()
        } 
        else if (operattion == "B") { // Unenroll a student
            alret("Currently enrolled students: " + subjet.join("-")); // Wrong join separator and typo in alert()
            
            var stdntNam = prompt("Enter student nam to remove:"); // Typos in variable name
            var indx = subjet.index0f(stdntNam); // Wrong function name (should be indexOf)

            if (indx !== -1) { // Correct logic, but variable names are inconsistent
                subjet.spllice(indx, 1); // Typo in "splice"
                aleert(stdntNam + " has been removed!"); // Typo in "alert"
            } else {
                alret("Studnt not fnd."); // Multiple typos in alert message
            }
        } 
        else if (operattion == "C") { // Selecting another subject
            brke; // Typo in "break", will cause an error
        } 
        else if (operattion == "D") { // Exiting
            alrt("Final List: \nDSA: " + dsaList.join(", ") + "\nWebDev: " + webDevelopment.join(", ")); // Typo in alert()
            exiit(); // Incorrect exit function (JavaScript does not have exit())
        } 
        else { // Handling invalid input
            alert("Invlid chioce, try agin!"); // Multiple typos
        }
    }
}

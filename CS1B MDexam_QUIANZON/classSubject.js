// Collect user information using prompt
var studentName = prompt("Enter your name:"); // ask for the name
var subjectTitle = prompt("Enter the subject title:");  //ask the subject
var classSchedule = prompt("Enter the class schedule (Time, Days):"); //ask for the shcedule specificaly time and days
var classroom = prompt("Enter the classroom:"); // ask the classroom
var classInstructor = prompt("Enter the class instructor:"); //ask the name of the isntructor

// Display the collected information in the console
console.log(studentName + " is currently enrolled in " + subjectTitle +  
    " with a class schedule of " + classSchedule + 
    " at room " + classroom + ". The instructor for the subject is " + classInstructor + ".");


// Start with your function here

function validateForm() 
{
    const errors = [];
    const data = {};
    
    const fullNameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

     // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.


    if (fullNameInput.value !== "") {
        data.fullname = fullNameInput.value;
    } else {
        errors.push("Full Name is required");
    }

    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.


    if (emailInput.value !== "") {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(emailInput.value)) {
            data.email = emailInput.value;
        } else {
            errors.push("Invalid Email");
        }
    } else {
        errors.push("Email is required");
    }

    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.


    if (messageInput.value !== "") {
        data.message = messageInput.value;
    } else {
        errors.push("Message is required");
    }

    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    if (errors.length > 0) {
        console.log("Errors:", errors);
    } else {
        console.log("Data:", data);
        fullNameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
}  

    
// Register your form to "click" event.

document.getElementById("submit-button").addEventListener("click", function() {
    validateForm();
});

document.addEventListener("DOMContentLoaded", function () {
    // Event Listeners for Keyup Events
    document.getElementById("lrn1").addEventListener("keyup", lrn);
    document.getElementById("email1").addEventListener("keyup", email);
  
    // Event Listener for Form Submit
    document.getElementById("registerForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // Validate the form fields
      lrn();
      email();
      // Add other validation functions if needed
  
      // Check for validation errors
      if (
        document.querySelector(".lrn").classList.contains("invalid") ||
        document.querySelector(".email").classList.contains("invalid")
        // Add other conditions for additional fields if needed
      ) {
        // Handle validation errors, show error messages, etc.
        console.log("Validation failed. Please check the form.");
      } else {
        // If no validation errors, proceed with form submission logic
        console.log("Form submitted successfully.");
      }
    });
  });
  
  // LRN Validation
  function lrn() {
    const lrnPattern = /^[0-9]{12}$/;
    const lrnInput = document.getElementById("lrn1");
    const lrnField = document.querySelector(".lrn");
  
    if (!lrnInput.value.match(lrnPattern)) {
      lrnField.classList.add("invalid");
    } else {
      lrnField.classList.remove("invalid");
    }
  }
  
  // Email Validation
  function email() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById("email1");
    const emailField = document.querySelector(".email");
  
    if (!emailInput.value.match(emailPattern)) {
      emailField.classList.add("invalid");
    } else {
      emailField.classList.remove("invalid");
    }
  }
  
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const eInput = document.getElementById("username1");
  const pInput = document.getElementById("pass1");

  if (!form || !eInput || !pInput) {
    console.error("Form or input elements not found.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate username and password
    username();
    checkPass();

    // If both fields are valid, make an Axios request
    if (!eInput.parentElement.classList.contains("error") && !pInput.parentElement.classList.contains("error")) {
      handleLoginForm();
    }
  });

  function username() {
    const pattern = /^[a-z0-9_\@]+$/;
    const eField = eInput.parentElement;

    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      eField.classList.remove("valid");

      const errorTxt = eField.querySelector(".error-txt");
      if (errorTxt) {
        errorTxt.textContent = eInput.value !== "" ? "Enter a valid username" : "Username can't be blank";
      }
    } else {
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass() {
    const pField = pInput.parentElement;

    if (pInput.value === "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else {
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  $(document).ready(function () {
    $('#loginForm').submit(function (event) {
      event.preventDefault();
  
      $.ajax({
        url: 'http://127.0.0.1:8000/api/login',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
          username: $('#username1').val(),
          password: $('#pass1').val(),
        }),
        success: function (response) {
          // Check the role of the logged-in user
          if (response.role === 'admin') {
            // Redirect to admin page
            Swal.fire({
              icon: 'success',
              title: 'Admin Login Successful!',
              text: response.message,
            }).then(() => {
              window.location.href = '../admin/admin.html'; // Adjust the URL for the admin page
            });
          } else if (response.role === 'user') {
            // Redirect to user page
            Swal.fire({
              icon: 'success',
              title: 'User Login Successful!',
              text: response.message,
            }).then(() => {
              window.location.href = '../user/home.html'; // Adjust the URL for the user page
            });
          } else {
            // Handle unexpected role
            console.error('Unexpected user role:', response.role);
            Swal.fire({
              icon: 'error',
              title: 'Login Failed!',
              text: 'Unexpected user role. Please try again.',
            });
          }
        },
        error: function (error) {
          // Login failed
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: error.responseJSON.error || 'Something went wrong. Please try again.',
          });
        },
      });
    });
  });
  
});

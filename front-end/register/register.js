
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("registerForm"),
      lrnField = document.querySelector(".lrn"),
      lrnInput = lrnField.querySelector(".lrn"),
      emailField = document.querySelector(".email"),
      emailInput = emailField.querySelector(".email"),
      usernameField = document.querySelector(".username"),
      usernameInput = usernameField.querySelector(".username"),
      passField = document.querySelector(".create-password"),
      passInput = passField.querySelector(".password"),
      cPassField = document.querySelector(".confirm-password"),
      cPassInput = cPassField.querySelector(".cPassword");

    // Hide and show password
    var eyeIcons = document.querySelectorAll(".show-hide");

    eyeIcons.forEach(function (eyeIcon) {
      eyeIcon.addEventListener("click", function () {
        var pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
          eyeIcon.classList.replace("bx-hide", "bx-show");
          pInput.type = "text";
        } else {
          eyeIcon.classList.replace("bx-show", "bx-hide");
          pInput.type = "password";
        }
      });
    });

    // LRN Validation
    function lrn() {
      var lrnPattern = /^[0-9]{12}$/;
      var lrnField = document.querySelector('.lrn');

      if (!lrnInput.value.match(lrnPattern)) {
        lrnField.classList.add('invalid');
      } else {
        lrnField.classList.remove('invalid');
      }
    }

    // Email Validation
    function email() {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var emailField = document.querySelector('.email');

      if (!emailInput.value.match(emailPattern)) {
        emailField.classList.add('invalid');
      } else {
        emailField.classList.remove('invalid');
      }
    }

    // Username Validation
    function username() {
      var unamePattern = /^[a-z0-9_@]+$/;

      if (!usernameInput.value.match(unamePattern)) {
        usernameField.classList.add("invalid");
      } else {
        usernameField.classList.remove("invalid");
      }
    }

    // Password Validation
    function createPass() {
      var passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!passInput.value.match(passPattern)) {
        passField.classList.add("invalid");
      } else {
        passField.classList.remove("invalid");
      }
    }

    // Confirm Password Validation
    function confirmPass() {
      if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        cPassField.classList.add("invalid");
      } else {
        cPassField.classList.remove("invalid");
      }
    }

    // Event Listeners for Keyup Events
    document.getElementById('lrn1').addEventListener('keyup', lrn);
    document.getElementById('email1').addEventListener('keyup', email);
    usernameInput.addEventListener("keyup", username);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    // Event Listener for Form Submit
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      validateForm();
    });

    function validateForm() {
      lrn();
      email();
      username();
      createPass();
      confirmPass();
    }

      // Assuming you have a form with id 'registerForm'
    $('#registerForm').submit(function (event) {
      event.preventDefault();

      $.ajax({
          url: 'http://127.0.0.1:8000/api/register',
          type: 'POST',
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify({
              lrn: $('#lrn1').val(),
              email: $('#email1').val(),
              username: $('#username2').val(),
              password: $('#pass2').val(),
          }),
          success: function (response) {
              // Registration successful
              Swal.fire({
                  icon: 'success',
                  title: 'Registration Successful!',
                  text: response.message,
              }).then(() => {
                  window.location.href = '../login/index.html'; // Redirect to login page
              });
          },
          error: function (error) {
              // Registration failed
              Swal.fire({
                  icon: 'error',
                  title: 'Registration Failed!',
                  text: error.responseJSON.error,
              });
          }
      });
    });
  });

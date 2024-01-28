(function ($) {
    $(document).ready(function () {
      
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  
      // Function to combine and format names
      function combineAndFormatNames() {
        // Capitalize first letters of names
        var lastName = capitalizeFirstLetter($('#last_name5').val());
        var firstName = capitalizeFirstLetter($('#first_name5').val());
        var middleName = capitalizeFirstLetter($('#middle_name5').val());
        var extension = $('#extension5').val();
        var name = lastName + ' ' + firstName + ' ' + middleName + ' ' + extension;
  
        // Prepare data for AJAX
        var formData = new FormData();
        formData.append('lrn', $('#lrn5').val());
        formData.append('grade_level', $('#grade_level5').val());
        formData.append('returnee', $('#returnee5').val());
        formData.append('name', name);
        formData.append('gender', $('#gender5').val());
        formData.append('birthdate', $('#datepicker5').val());
        formData.append('place_of_birth', $('#place_of_birth5').val());
        formData.append('age', $('#age5').val());
        formData.append('mother_tongue', $('#m_tongue5').val());
        formData.append('ip_member', $('#ip_member5').val());
        formData.append('beneficiary', $('#beneficiary5').val());
        formData.append('lwd', $('#lwd5').val());
        formData.append('currentHouseNo', $('#currentHouseNo5').val());
        formData.append('currentSitioStreet', $('#currentSitioStreet5').val());
        formData.append('currentBarangay', $('#currentBarangay5').val());
        formData.append('currentMunicipalityCity', $('#currentMunicipalityCity5').val());
        formData.append('currentProvince', $('#currentCountry5').val());
        formData.append('currentCountry', $('#currentZipCode5').val());
        formData.append('permanentHouseNo', $('#permanentHouseNo5').val());
        formData.append('permanentSitioStreet', $('#permanentSitioStreet5').val());
        formData.append('permanentBarangay', $('#permanentBarangay5').val());
        formData.append('permanentMunicipalityCity', $('#permanentMunicipalityCity5').val());
        formData.append('permanentProvince', $('#permanentCountry5').val());
        formData.append('permanentCountry', $('#permanentZipCode5').val());
        formData.append('flast', $('#flast5').val());
        formData.append('ffirst', $('#ffirst5').val());
        formData.append('fmiddle', $('#fmiddle5').val());
        formData.append('fcontact', $('#fcontact5').val());
        formData.append('mlast', $('#mlast5').val());
        formData.append('mfirst', $('#mfirst5').val());
        formData.append('mmiddle', $('#mmiddle5').val());
        formData.append('mcontact', $('#mcontact5').val());
        formData.append('glast', $('#glast5').val());
        formData.append('gfirst', $('#gfirst5').val());
        formData.append('gmiddle', $('#gmiddle5').val());
        formData.append('gcontact', $('#gcontact5').val());
        formData.append('last_school_attended', $('#last_school5').val());
        formData.append('last_grade_level_completed', $('#last_level5').val());
        formData.append('last_school_year_completed', $('#last_sy5').val());
        formData.append('school_id', $('#last_schoolId5').val());
        formData.append('first_semester', $('#semester1').val());
        formData.append('second_semester', $('#semester2').val());
        formData.append('track', $('#track').val());
        formData.append('strand', $('#strand').val());
        formData.append('card_of_previous_grade', $('#card_of_previous_grade5')[0].files[0]);
        formData.append('birth_certificate', $('#birth_certificate5')[0].files[0]);
  
        return formData;
      }
  
      // Function to submit form data using AJAX
      function submitFormData(formData) {
        $.ajax({
          url: 'http://127.0.0.1:8000/api/submit-shs',
          type: 'POST',
          data: formData,
          contentType: false,
          processData: false,
          success: function (response) {
            // Handle success
            console.log('AJAX success');
            console.log(response);
  
            // Show success message using a library like SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Form Submitted Successfully!',
              text: 'Congratulations!',
            });
                  // Hide the form
                  $('#enrollmentForm2').hide();
  
                  // Redirect to the messsage from the admin
                  window.location.href = '../shs/admin_message2.html';
  
            // Clear the form after successful submission
            $('#enrollmentForm2')[0].reset();
          },
          error: function (error) {
            // Handle error
            console.error(error);
  
            // Show error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while submitting the form.',
            });
          }
        });
      }
  
      // Attach submit event listener to the form
      $('#enrollmentForm2').submit(function (event) {
        // Prevent default form submission
        event.preventDefault();
  
        // Combine and format names
        var formData = combineAndFormatNames();
        // Submit form data using AJAX
        submitFormData(formData);
      });
  
    });
  })(jQuery);
  
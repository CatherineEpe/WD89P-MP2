(function ($) {
  $(document).ready(function () {
    
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Function to combine and format names
    function combineAndFormatNames() {
      // Capitalize first letters of names
      var lastName = capitalizeFirstLetter($('#last_name2').val());
      var firstName = capitalizeFirstLetter($('#first_name2').val());
      var middleName = capitalizeFirstLetter($('#middle_name2').val());
      var extension = $('#extension2').val();
      var name = lastName + ' ' + firstName + ' ' + middleName + ' ' + extension;

      // Combine father's name
      var fatherLastName = capitalizeFirstLetter($('#flast').val());
      var fatherFirstName = capitalizeFirstLetter($('#ffirst').val());
      var fatherMiddleName = capitalizeFirstLetter($('#fmiddle').val());
      var fatherName = fatherLastName + ' ' + fatherFirstName + ' ' + fatherMiddleName;

      // Combine mother's name
      var motherLastName = capitalizeFirstLetter($('#mlast').val());
      var motherFirstName = capitalizeFirstLetter($('#mfirst').val());
      var motherMiddleName = capitalizeFirstLetter($('#mmiddle').val());
      var motherName = motherLastName + ' ' + motherFirstName + ' ' + motherMiddleName;

      // Combine guardian's name
      var guardianLastName = capitalizeFirstLetter($('#glast').val());
      var guardianFirstName = capitalizeFirstLetter($('#gfirst').val());
      var guardianMiddleName = capitalizeFirstLetter($('#gmiddle').val());
      var guardianName = guardianLastName + ' ' + guardianFirstName + ' ' + guardianMiddleName;

      // Prepare data for AJAX
      var formData = new FormData();
      formData.append('lrn', $('#lrn').val());
      formData.append('grade_level', $('#grade_level').val());
      formData.append('returnee', $('#returnee1').val());
      formData.append('name', name);
      formData.append('gender', $('#gender2').val());
      formData.append('birthdate', $('#datepicker3').val());
      formData.append('place_of_birth', $('#place_of_birth').val());
      formData.append('age', $('#age1').val());
      formData.append('mother_tongue', $('#m_tongue').val());
      formData.append('ip_member', $('#ip_member').val());
      formData.append('beneficiary', $('#beneficiary').val());
      formData.append('lwd', $('#lwd').val());
      formData.append('currentHouseNo', $('#currentHouseNo').val());
      formData.append('currentSitioStreet', $('#currentSitioStreet').val());
      formData.append('currentBarangay', $('#currentBarangay').val());
      formData.append('currentMunicipalityCity', $('#currentMunicipalityCity').val());
      formData.append('currentProvince', $('#currentCountry').val());
      formData.append('currentCountry', $('#currentZipCode').val());
      formData.append('permanentHouseNo', $('#permanentHouseNo').val());
      formData.append('permanentSitioStreet', $('#permanentSitioStreet').val());
      formData.append('permanentBarangay', $('#permanentBarangay').val());
      formData.append('permanentMunicipalityCity', $('#permanentMunicipalityCity').val());
      formData.append('permanentProvince', $('#permanentCountry').val());
      formData.append('permanentCountry', $('#permanentZipCode').val());
      formData.append('fathers_name', fatherName);
      formData.append('fcontact', $('#fcontact').val());
      formData.append('mothers_maiden_name', motherName);
      formData.append('mcontact', $('#mcontact').val());
      formData.append('guardians_name', guardianName);
      formData.append('gcontact', $('#gcontact').val());
      formData.append('last_school_attended', $('#last_school_attended').val());
      formData.append('last_grade_level_completed', $('#last_grade_level_completed').val());
      formData.append('last_school_year_completed', $('#last_school_year_completed').val());
      formData.append('school_id', $('#school_id').val());
      formData.append('card_of_previous_grade', $('#card_of_previous_grade')[0].files[0]);
      formData.append('birth_certificate', $('#birth_certificate')[0].files[0]);

      return formData;
    }

    // Function to submit form data using AJAX
    function submitFormData(formData) {
      $.ajax({
        url: 'http://127.0.0.1:8000/api/submit-form',
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
            text: response.message,
          });
                // Hide the form
                $('#enrollmentForm').hide();

                // Redirect to the messsage from the admin
                window.location.href = '../jhs/admin_message.html';

          // Clear the form after successful submission
          $('#enrollmentForm')[0].reset();
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
    $('#enrollmentForm').submit(function (event) {
      // Prevent default form submission
      event.preventDefault();

      // Combine and format names
      var formData = combineAndFormatNames();
      // Submit form data using AJAX
      submitFormData(formData);
    });

  });
})(jQuery);

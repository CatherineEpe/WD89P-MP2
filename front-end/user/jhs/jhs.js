jQuery.noConflict();
(function($) {
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
  
      // Combine names
      var Name = lastName + ', ' + firstName + ' ' + middleName + ' ' + extension;
  
      // Combine current address fields
      var currentAddress = $('#currentHouseNo').val() + ', ' + $('#currentSitioStreet').val() + ', ' + $('#currentBarangay').val() + ', ' + $('#currentMunicipalityCity').val() + ', ' + $('#currentCountry').val() + ', ' + $('#currentZipCode').val();
  
      // Combine permanent address fields
      var permanentAddress = $('#permanentHouseNo').val() + ', ' + $('#permanentSitioStreet').val() + ', ' + $('#permanentBarangay').val() + ', ' + $('#permanentMunicipalityCity').val() + ', ' + $('#permanentCountry').val() + ', ' + $('#permanentZipCode').val();
  
      // Combine father's name
      var fatherName = $('#flast').val() + ', ' + $('#ffirst').val() + ' ' + $('#fmiddle').val();
  
      // Combine mother's maiden name
      var motherName = $('#mlast').val() + ', ' + $('#mfirst').val() + ' ' + $('#mmiddle').val();
  
      // Combine guardian's name
      var guardianName = $('#glast').val() + ', ' + $('#gfirst').val() + ' ' + $('#gmiddle').val();
  
      // Combine Parent's Contact
      var parentsContact = $('#fcontact').val() + ', ' + $('#mcontact').val() + ' ' + $('#gcontact').val();
  
      // Prepare data for AJAX
      var formData = {
        lrn: $('#lrn').val(),
        returnee: $('#returnee1').val(),
        Name: Name,
        gender: $('#gender2').val(),
        birthdate: $('#datepicker3').val(),
        place_of_birth: $('#place_of_birth').val(),
        age: $('#age1').val(),
        mother_tongue: $('#m_tongue').val(),
        ip_member: $('#ip_member').val(),
        beneficiary: $('#beneficiary').val(),
        lwd: $('#lwd').val(),
        current_address: currentAddress,
        permanent_address: permanentAddress,
        fathers_name: fatherName,
        mothers_maiden_name: motherName,
        legal_guardians_name: guardianName,
        parents_contact: parentsContact,
        last_school_attended: $('#last_school').val(),
        last_grade_level_completed: $('#last_level').val(),
        last_school_year_completed: $('#last_sy').val(),
        last_school_id: $('#last_schoolId').val(),
        card_of_previous_grade: $('#cardOfPreviousGrade')[0].files[0],
        birth_certificate: $('#birthCertificate')[0].files[0],
      };
  
      return formData;
    }
  
    // Function to submit form data using AJAX
    function submitFormData(formData) {
      $.ajax({
        url: 'http://127.0.0.1:8000/api/submit-form',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(formData),
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

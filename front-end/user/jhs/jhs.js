// Function to combine and format names
function combineAndFormatNames() {
  // Capitalize first letters of names
  var lastName = capitalizeFirstLetter($('#last_name').val());
  var firstName = capitalizeFirstLetter($('#first_name').val());
  var middleName = capitalizeFirstLetter($('#middle_name').val());
  var extension = $('#extension').val();

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
      returnee: $('#returnee').val(),
      Name: Name,
      gender: $('#gender').val(),
      birthdate: $('#birthdate').val(),
      place_birth: $('#place_birth').val(),
      age: $('#age').val(),
      m_tongue: $('#m_tongue').val(),
      ip_member: $('#ip_member').val(),
      beneficiary: $('#beneficiary').val(),
      lwd: $('#lwd').val(),
      current_address: currentAddress,
      permanent_address: permanentAddress,
      father_name: fatherName,
      mother_maiden_name: motherName,
      guardian_name: guardianName,
      parents_contact: parentsContact,
      last_school: $('#last_school').val(),
      last_level: $('#last_level').val(),
      last_sy: $('#last_sy').val(),
      last_schoolId: $('#last_schoolId').val(),
  };

  // AJAX function to submit form data
  $.ajax({
      url: 'http://127.0.0.1:8000/api/submit-form', // Update the URL based on your Laravel route
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify(formData),
      success: function(response) {
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
      error: function(error) {
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

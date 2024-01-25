
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

        // Update the form fields with the combined name
        $('#combined_name').val(Name);

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
            place_birth: $('#place_birth').val(),
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
            school_id: $('#last_schoolId').val(),
            card_of_previous_grade: $('#cardOfPreviousGrade').val(),
            birth_certificate: $('#birthCertificate').val(),
        };

    // Ajax connection to backend
    $('#enrollmentForm').submit(function (event) {
        event.preventDefault();

        // AJAX function to submit form data
        $.ajax({
            url: 'http://127.0.0.1:8000/api/submit-form',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function (response) {
                // Handle success
                console.log(response);

                // Show success message using a library like SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Enrollment Form Successfully!',
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
                    title: 'Please Try Again!',
                    text: error.responseJSON.error,
                });
            }
        });
    });
}

    document.getElementById('cancelButton1').addEventListener('click', function () {
        clearForm();
    });

    function clearForm() {
        // You can use AJAX to send a request to the server to clear data if needed
        // or simply reset the form fields using JavaScript
        var form = document.getElementById('enrollmentForm');

        // Reset form fields
        form.reset();
    }
});


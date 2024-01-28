$(document).ready(function () {
    $("#lrnSearchButton").click(function () {
        var lrn = $("#lrnSearchInput").val();

        $.ajax({
            url: "http://127.0.0.1:8000/api/search",
            type: "POST",
            data: {
                lrn: lrn
            },
            success: function (response) {
                if (response.success) {
                    // Populate the form fields with student data
                    // Assuming response.student.name is in the format "First Middle Last Extension"

                    $('#lrn').val(response.student.lrn);
                    $("#grade_level").val(response.student.grade_level);
                    $('#returnee1').val(response.student.returnee);

                    var fullName = response.student.name.split(' ');

                    // Extract individual components from the fullName array
                    var firstName = fullName[0];
                    var middleName = fullName[1] || ''; // Middle name might be missing so we should add ' '.
                    var lastName = fullName[2] || ''; // Last name might be missing
                    var extension = fullName.slice(3).join(' '); // Concatenate remaining parts for extension

                    // Set values of input fields
                    $('#first_name3').val(firstName);
                    $('#middle_name3').val(middleName);
                    $('#last_name3').val(lastName);
                    $('#extension3').val(extension);

                    $('#gender2').val(response.student.gender);
                    $('#datepicker4').val(response.student.birthdate);
                    $('#place_of_birth').val(response.student.place_of_birth);
                    $('#age1').val(response.student.age);
                    $('#m_tongue').val(response.student.mother_tongue);
                    $('#ip_member').val(response.student.ip_member);
                    $('#beneficiary').val(response.student.beneficiary);
                    $('#lwd').val(response.student.lwd);
                    $('#currentHouseNo').val(response.student.currentHouseNo);
                    $('#currentSitioStreet').val(response.student.currentSitioStreet);
                    $('#currentBarangay').val(response.student.currentBarangay);
                    $('#currentMunicipalityCity').val(response.student.currentMunicipalityCity);
                    $('#currentProvince').val(response.student.currentProvince);
                    $('#currentCountry').val(response.student.currentCountry);
                    $('#permanentHouseNo').val(response.student.permanentHouseNo);
                    $('#permanentSitioStreet').val(response.student.permanentSitioStreet);
                    $('#permanentBarangay').val(response.student.permanentBarangay);
                    $('#permanentMunicipalityCity').val(response.student.permanentMunicipalityCity);
                    $('#permanentProvince').val(response.student.permanentProvince);
                    $('#permanentCountry').val(response.student.permanentCountry);
                    $('#flast').val(response.student.flast);
                    $('#ffirst').val(response.student.ffirst);
                    $('#fmiddle').val(response.student.fmiddle);
                    $('#fcontact').val(response.student.fcontact);
                    $('#mlast').val(response.student.mlast);
                    $('#mfirst').val(response.student.mfirst);
                    $('#mmiddle').val(response.student.mmiddle);
                    $('#mcontact').val(response.student.mcontact);
                    $('#glast').val(response.student.glast);
                    $('#gfirst').val(response.student.gfirst);
                    $('#gmiddle').val(response.student.gmiddle);
                    $('#gcontact').val(response.student.gcontact);
                    $('#last_school').val(response.student.last_school);
                    $('#last_level').val(response.student.last_level);
                    $('#last_sy').val(response.student.last_sy);
                    $('#last_schoolId').val(response.student.last_schoolId);

                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: lrn + ' ' + response.student.name
                    });

                    $("#old_new").addClass("hidden");
                    $("#edit_form").removeClass("hidden");
                } else {
                     // Use SweetAlert2 for showing the alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No student with the LRN' + ' '+ lrn + ' ' + 'is found!'
                    });
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });

    $("#submitForm").click(function () {
        var lrn = $("#lrn").val();
        var gradeLevel = $("#grade_level").val();
        // Get other form field values
    
        $.ajax({
            url: "http://127.0.0.1:8000/api/update",
            type: "POST",
            data: {
                lrn: lrn,
                grade_level: gradeLevel
                // Add other form field values as needed
            },
            success: function (response) {
                if (response.success) {
                    // Use SweetAlert2 for success message
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Update successful!',
                        showConfirmButton: false,
                        timer: 1500 // Close alert after 1.5 seconds
                    }).then(function() {
                        window.location.href = "admin_message.html";
                    });
                } else {
                    // Use SweetAlert2 for error message
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Update failed. Please try again.'
                    });
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
                // Use SweetAlert2 for error message
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error occurred while updating. Please try again later.'
                });
            }
        });
    });
});

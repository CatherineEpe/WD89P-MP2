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

                    Swal.fire({
                        title: 'Confirm Student',
                        html: 'Is this the correct LRN and name?<br><br>' +
                            '<strong>LRN:</strong> ' + response.student.lrn + '<br>' +
                            '<strong>Name:</strong> ' + response.student.name,
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, proceed!',
                        cancelButtonText: 'No, cancel',
                    }).then((result) => {
                        if (result.isConfirmed) {


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
                            $('#last_school').val(response.student.last_school_attended);
                            $('#last_level').val(response.student.last_grade_level_completed);
                            $('#last_sy').val(response.student.last_school_year_completed);
                            $('#last_schoolId').val(response.student.school_id);

                            // Show success message using SweetAlert2
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: lrn + ' ' + response.student.name
                            });

                            $("#old_new").addClass("hidden");
                            $("#edit_form").removeClass("hidden");
                        }
                    });

                } else {
                    // Show error message using SweetAlert2
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No student with the LRN ' + lrn + ' is found!'
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
        var returnee = $("#returnee1").val();
        var age = $("#age1").val();
        var beneficiary = $("#beneficiary").val();
        var lwd = $("#lwd").val();
        var currentHouseNo = $("#currentHouseNo").val();
        var currentSitioStreet = $("#currentSitioStreet").val();
        var currentBarangay = $("#currentBarangay").val();
        var currentMunicipalityCity = $("#currentMunicipalityCity").val();
        var currentProvince = $("#currentProvince").val();
        var currentCountry = $("#currentCountry").val();
        var permanentHouseNo = $("#permanentHouseNo").val();
        var permanentSitioStreet = $("#permanentSitioStreet").val();
        var permanentBarangay = $("#permanentBarangay").val();
        var permanentMunicipalityCity = $("#permanentMunicipalityCity").val();
        var permanentProvince = $("#permanentProvince").val();
        var permanentCountry = $("#permanentCountry").val();
        var fcontact = $("#fcontact").val();
        var mcontact = $("#mcontact").val();
        var glast = $("#glast").val();
        var gfirst = $("#gfirst").val();
        var gmiddle = $("#gmiddle").val();
        var gcontact = $("#gcontact").val();
        var lastSchool = $("#last_school").val();
        var lastLevel = $("#last_level").val();
        var lastSY = $("#last_sy").val();
        var lastSchoolId = $("#last_schoolId").val();

        $.ajax({
            url: "http://127.0.0.1:8000/api/update",
            type: "POST",
            data: {
                lrn: lrn,
                grade_level: gradeLevel,
                returnee: returnee,
                age: age,
                beneficiary: beneficiary,
                lwd: lwd,
                currentHouseNo: currentHouseNo,
                currentSitioStreet: currentSitioStreet,
                currentBarangay: currentBarangay,
                currentMunicipalityCity: currentMunicipalityCity,
                currentProvince: currentProvince,
                currentCountry: currentCountry,
                permanentHouseNo: permanentHouseNo,
                permanentSitioStreet: permanentSitioStreet,
                permanentBarangay: permanentBarangay,
                permanentMunicipalityCity: permanentMunicipalityCity,
                permanentProvince: permanentProvince,
                permanentCountry: permanentCountry,
                fcontact: fcontact,
                mcontact: mcontact,
                glast: glast,
                gfirst: gfirst,
                gmiddle: gmiddle,
                gcontact: gcontact,
                last_school: lastSchool,
                last_level: lastLevel,
                last_sy: lastSY,
                last_schoolId: lastSchoolId
            },

            success: function (response) {
                if (response.success) {
                    // Show success message using SweetAlert2
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Update successful!',
                        showConfirmButton: false,
                        timer: 1500 // Close alert after 1.5 seconds
                    }).then(function () {
                        window.location.href = "admin_message.html";
                    });
                } else {
                    // Show error message using SweetAlert2
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Update failed. Please try again.'
                    });
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
                // Show error message using SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error occurred while updating. Please try again later.'
                });
            }
        });

    });

});

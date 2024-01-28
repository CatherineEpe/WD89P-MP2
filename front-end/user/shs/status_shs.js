$(document).ready(function () {
    $("#lrnSearchButton2").click(function () {
        var lrn = $("#lrnSearchInput2").val();

        $.ajax({
            url: "http://127.0.0.1:8000/api/search-shs",
            type: "POST",
            data: {
                lrn: lrn
            },
            success: function (response) {
                if (response.success) {
                    // Populate the form fields with student data
                    // Assuming response.student.name is in the format "First Middle Last Extension"

                    $('#lrn5').val(response.student.lrn);
                    $("#grade_level5").val(response.student.grade_level);
                    $('#returnee5').val(response.student.returnee);

                    var fullName = response.student.name.split(' ');

                    // Extract individual components from the fullName array
                    var firstName = fullName[0];
                    var middleName = fullName[1] || ''; // Middle name might be missing so we should add ' '.
                    var lastName = fullName[2] || ''; // Last name might be missing
                    var extension = fullName.slice(3).join(' '); // Concatenate remaining parts for extension

                    // Set values of input fields
                    $('#first_name5').val(firstName);
                    $('#middle_name5').val(middleName);
                    $('#last_name5').val(lastName);
                    $('#extension5').val(extension);

                    $('#gender5').val(response.student.gender);
                    $('#datepicker5').val(response.student.birthdate);
                    $('#place_of_birth5').val(response.student.place_of_birth);
                    $('#age5').val(response.student.age);
                    $('#m_tongue5').val(response.student.mother_tongue);
                    $('#ip_member5').val(response.student.ip_member);
                    $('#beneficiary5').val(response.student.beneficiary);
                    $('#lwd5').val(response.student.lwd);
                    $('#currentHouseNo5').val(response.student.currentHouseNo);
                    $('#currentSitioStreet5').val(response.student.currentSitioStreet);
                    $('#currentBarangay5').val(response.student.currentBarangay);
                    $('#currentMunicipalityCity5').val(response.student.currentMunicipalityCity);
                    $('#currentProvince5').val(response.student.currentProvince);
                    $('#currentCountry5').val(response.student.currentCountry);
                    $('#permanentHouseNo5').val(response.student.permanentHouseNo);
                    $('#permanentSitioStreet5').val(response.student.permanentSitioStreet);
                    $('#permanentBarangay5').val(response.student.permanentBarangay);
                    $('#permanentMunicipalityCity5').val(response.student.permanentMunicipalityCity);
                    $('#permanentProvince5').val(response.student.permanentProvince);
                    $('#permanentCountry5').val(response.student.permanentCountry);
                    $('#flast5').val(response.student.flast);
                    $('#ffirst5').val(response.student.ffirst);
                    $('#fmiddle5').val(response.student.fmiddle);
                    $('#fcontact5').val(response.student.fcontact);
                    $('#mlast5').val(response.student.mlast);
                    $('#mfirst5').val(response.student.mfirst);
                    $('#mmiddle5').val(response.student.mmiddle);
                    $('#mcontact5').val(response.student.mcontact);
                    $('#glast5').val(response.student.glast);
                    $('#gfirst5').val(response.student.gfirst);
                    $('#gmiddle5').val(response.student.gmiddle);
                    $('#gcontact5').val(response.student.gcontact);
                    $('#last_school5').val(response.student.last_school);
                    $('#last_level5').val(response.student.last_level);
                    $('#last_sy5').val(response.student.last_sy);
                    $('#last_schoolId5').val(response.student.last_schoolId);
                    $('#semester1').val(response.student.first_semester);
                    $('#semester2').val(response.student.second_semester);
                    $('#track').val(response.student.track);
                    $('#strand').val(response.student.strand);

                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: lrn + ' ' + response.student.name
                    });

                    $("#old_new2").addClass("hidden");
                    $("#edit_form2").removeClass("hidden");
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

    $("#submitForm2").click(function () {
        var lrn = $("#lrn5").val();
        var gradeLevel = $("#grade_level5").val();
        var returnee = $("#returnee5").val();
        var age = $("#age5").val();
        var beneficiary = $("#beneficiary5").val();
        var lwd = $("#lwd5").val();
        var currentHouseNo = $("#currentHouseNo5").val();
        var currentSitioStreet = $("#currentSitioStreet5").val();
        var currentBarangay = $("#currentBarangay5").val();
        var currentMunicipalityCity = $("#currentMunicipalityCity5").val();
        var currentProvince = $("#currentProvince5").val();
        var currentCountry = $("#currentCountry5").val();
        var permanentHouseNo = $("#permanentHouseNo5").val();
        var permanentSitioStreet = $("#permanentSitioStreet5").val();
        var permanentBarangay = $("#permanentBarangay5").val();
        var permanentMunicipalityCity = $("#permanentMunicipalityCity5").val();
        var permanentProvince = $("#permanentProvince5").val();
        var permanentCountry = $("#permanentCountry5").val();
        var fcontact = $("#fcontact5").val();
        var mcontact = $("#mcontact5").val();
        var glast = $("#glast5").val();
        var gfirst = $("#gfirst5").val();
        var gmiddle = $("#gmiddle5").val();
        var gcontact = $("#gcontact5").val();
        var semester1 = $("#semester1").val();
        var semester2 = $("#semester2").val();
        var track = $("#track").val();
        var strand = $("#strand").val();
        var lastSchool = $("#last_school5").val();
        var lastLevel = $("#last_level5").val();
        var lastSY = $("#last_sy5").val();
        var lastSchoolId = $("#last_schoolId5").val();
    
        $.ajax({
            url: "http://127.0.0.1:8000/api/update-shs",
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
                semester1: semester1,
                semester2: semester2,
                track: track,
                strand: strand,
                last_school: lastSchool,
                last_level: lastLevel,
                last_sy: lastSY,
                last_schoolId: lastSchoolId,

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
                        window.location.href = "admin_message2.html";
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

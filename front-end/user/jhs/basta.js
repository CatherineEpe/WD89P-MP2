User
$(document).ready(function () {
    $('#lrnSearchButton').click(function () {
        var lrn = $('#lrnSearchInput').val();

        $.ajax({
            url: 'http://127.0.0.1:8000/api/search',
            type: 'GET',
            data: { lrn: lrn },
            success: function (response) {
                displaySearchResults(response);
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
                $('#searchResults').html('<p>An error occurred while fetching data.</p>');
            }
        });
    });

    function displaySearchResults(result) {
        var html = '';
        if (result) {
            html += '<div class="col-md-12">';
            html += '<h5>Search Results</h5>';
            html += '<p>Learner\'s Reference Number: ' + result.name + result.lrn + '</p>';
            html += '<button class="btn btn-primary edit-btn" data-enrollment-id="' + result.id + '">Edit</button>';
            html += '</div>';
        } else {
            html = '<div class="col-md-12"><p>No results found.</p></div>';
        }
        $('#searchResults').html(html);
    }

    // Click event for edit button
    $(document).on('click', '.edit-btn', function () {
        var enrollmentId = $(this).data('enrollment-id');
        if (enrollmentId) {
            window.location.href = 'edit_old.html?id=' + enrollmentId;
        } else {
            console.error('Enrollment ID not found.');
            // Handle error or display message as needed
        }
    });

    // Fetch data and populate edit form on edit_old.html
    fetchDataAndDisplay();

    function fetchDataAndDisplay() {
        var enrollmentId = getEnrollmentIdFromUrl();
        if (enrollmentId) {
            $.ajax({
                url: 'http://127.0.0.1:8000/api/edit-old/' + enrollmentId,
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    populateEditForm(response);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching data:', error);
                    // Handle error or display message as needed
                }
            });
        } else {
            console.error('Enrollment ID not found in URL.');
            // Handle error or display message as needed
        }
    }

    function getEnrollmentIdFromUrl() {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('id') ? urlParams.get('id') : null;
    }
    

    function populateEditForm(response) {
        // Populate the edit form fields with fetched data
        $('#lrn').val(response.lrn || '');
        $('#grade_level').val(response.grade_level || '');
        $('#returnee1').val(response.returnee || '');
        $('#first_name3').val(response.first_name || '');
        $('#middle_name3').val(response.middle_name || '');
        $('#last_name3').val(response.last_name || '');
        $('#extension3').val(response.extension || '');
        $('#gender3').val(response.gender || '');
        $('#datepicker4').val(response.birthdate || '');
        $('#place_of_birth').val(response.place_of_birth || '');
        $('#age1').val(response.age || '');
        $('#m_tongue').val(response.mother_tongue || '');
        $('#ip_member').val(response.ip_member || '');
        $('#beneficiary').val(response.beneficiary || '');
        $('#lwd').val(response.lwd || '');
        $('#currentHouseNo').val(response.currentHouseNo || '');
        $('#currentSitioStreet').val(response.currentSitioStreet || '');
        $('#currentBarangay').val(response.currentBarangay || '');
        $('#currentMunicipalityCity').val(response.currentMunicipalityCity || '');
        $('#currentProvince').val(response.currentProvince || '');
        $('#currentCountry').val(response.currentCountry || '');
        $('#permanentHouseNo').val(response.permanentHouseNo || '');
        $('#permanentSitioStreet').val(response.permanentSitioStreet || '');
        $('#permanentBarangay').val(response.permanentBarangay || '');
        $('#permanentMunicipalityCity').val(response.permanentMunicipalityCity || '');
        $('#permanentProvince').val(response.permanentProvince || '');
        $('#permanentCountry').val(response.permanentCountry || '');
        $('#flast').val(response.flast || '');
        $('#ffirst').val(response.ffirst || '');
        $('#fmiddle').val(response.fmiddle || '');
        $('#fcontact').val(response.fcontact || '');
        $('#mlast').val(response.mlast || '');
        $('#mfirst').val(response.mfirst || '');
        $('#mmiddle').val(response.mmiddle || '');
        $('#mcontact').val(response.mcontact || '');
        $('#glast').val(response.glast || '');
        $('#gfirst').val(response.gfirst || '');
        $('#gmiddle').val(response.gmiddle || '');
        $('#gcontact').val(response.gcontact || '');
        $('#last_school').val(response.last_school || '');
        $('#last_level').val(response.last_level || '');
        $('#last_sy').val(response.last_sy || '');
        $('#last_schoolId').val(response.last_schoolId || '');
        $('#card_of_previous_grade').val(response.card_of_previous_grade || '');
        $('#birth_certificate').val(response.birth_certificate || '');
    }

    // Function to handle form submission for updating enrollment data
    $('#edit_old').submit(function (event) {
        event.preventDefault();

        var enrollmentId = $('#enrollmentId').val();

        // Serialize form data
        var formData = $(this).serialize();

        $.ajax({
            url: 'http://127.0.0.1:8000/api/edit-old/' + enrollmentId,
            type: 'PUT',
            data: formData,
            dataType: 'json',
            success: function (response) {
                // Handle success
                console.log('Enrollment data updated successfully.');
            },
            error: function (xhr, status, error) {
                console.error('Error updating data:', error);
                // Handle error or display message as needed
            }
        });
    });
});
$(document).ready(function () {
    var editForm = $('#editForm');
    var saveButton = $('#saveButton');
    var cancelButton = $('#cancelButton');
    var facultyStaffId; // This will be the variable to store the current faculty/staff ID

    // Function to fetch data of a specific faculty and staff for editing
    function fetchFacultyStaffDataForEdit(id) {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/faculty-staff/' + id,
            type: 'GET',
            success: function (response) {
                var facultyStaff = response.facultyStaff;

                // Set the fetched data to the form fields for editing
                $('#editForm #last_name').val(facultyStaff.last_name);
                $('#editForm #first_name').val(facultyStaff.first_name);
                $('#editForm #middle_name').val(facultyStaff.middle_name);
                $('#editForm #extension').val(facultyStaff.extension);
                $('#editForm #gender').val(facultyStaff.gender);
                $('#editForm #datepicker1').val(facultyStaff.date_of_birth);
                $('#editForm #contact_number').val(facultyStaff.contact_num);
                $('#editForm #email_address').val(facultyStaff.email_add);
                $('#editForm #education').val(facultyStaff.education);
                $('#editForm #specialization').val(facultyStaff.specialization);
                $('#editForm #datepicker').val(facultyStaff.date_appointment);
                $('#editForm #employee_number').val(facultyStaff.employee_num);
                $('#editForm #department').val(facultyStaff.department);
                $('#editForm #position').val(facultyStaff.position);
                $('#editForm #designation').val(facultyStaff.designation);
                $('#editForm #advisory').val(facultyStaff.advisory);

                // Show the edit form
                editForm.show();
            },
            error: function (error) {
                console.error('Error fetching data for edit:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error fetching data for edit. Please try again later.',
                });
            }
        });
    }

    // Function to submit edited data
    function submitEditedData() {
        saveButton.on('click', function () {
            // Get the edited data from the form fields
            var editedData = {
                last_name: $('#editForm #last_name').val(),
                first_name: $('#editForm #first_name').val(),
                middle_name: $('#editForm #middle_name').val(),
                extension: $('#editForm #extension').val(),
                gender: $('#editForm #gender').val(),
                date_of_birth: $('#editForm #datepicker1').val(),
                contact_num: $('#editForm #contact_number').val(),
                email_add: $('#editForm #email_address').val(),
                education: $('#editForm #education').val(),
                specialization: $('#editForm #specialization').val(),
                date_appointment: $('#editForm #datepicker').val(),
                employee_num: $('#editForm #employee_number').val(),
                department: $('#editForm #department').val(),
                position: $('#editForm #position').val(),
                designation: $('#editForm #designation').val(),
                advisory: $('#editForm #advisory').val(),
            };

            // Send the edited data to the server
            $.ajax({
                url: 'http://127.0.0.1:8000/api/faculty-staff/' + facultyStaffId,
                type: 'PUT', // Use 'PATCH' if your API supports partial updates
                data: editedData,
                success: function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Edited!',
                        text: 'The data has been updated successfully.',
                    });

                    // Hide the edit form after a successful update
                    editForm.hide();

                    // You can update the table to reflect the changes if needed
                    // updateFacultyStaffTable();
                },
                error: function (error) {
                    console.error('Error updating data:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error updating data. Please try again later.',
                    });
                }
            });
        });

        cancelButton.on('click', function () {
            // Hide the edit form when the cancel button is clicked
            editForm.hide();
        });
    }

    // Assume you have an event (e.g., a button click) to trigger data fetching for editing
    $('#editButton').on('click', function () {
        facultyStaffId = 1; // Replace with the actual faculty/staff ID you want to edit
        fetchFacultyStaffDataForEdit(facultyStaffId);
    });

    // Bind event handlers outside functions
    submitEditedData();
});

$(document).ready(function () {

    // Function to fetch all faculty and staff data and update the table
    function updateFacultyStaffTable() {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/all-faculty-staff',
            type: 'GET',
            success: function (response) {
                var facultyStaffList = response.facultyStaffList;
                var tableBody = $('#facultyStaffContainer');
                var emptyRow = $('#emptyRow');

                // Clear existing rows
                tableBody.empty();

                // If there is no data, display a message
                if (facultyStaffList.length === 0) {
                    emptyRow.show();
                } else {
                    emptyRow.hide();
                }

                // Update the table with the retrieved data
                $.each(facultyStaffList, function (index, facultyStaff) {
                    var row = '<tr>' +
                        '<td data-faculty-id="' + facultyStaff.id + '">' + facultyStaff.id + '</td>' +
                        '<td>' + facultyStaff.name + '</td>' +
                        '<td>' + facultyStaff.gender + '</td>' +
                        '<td>' + facultyStaff.date_of_birth + '</td>' +
                        '<td>' + facultyStaff.contact_num + '</td>' +
                        '<td>' + facultyStaff.email_add + '</td>' +
                        '<td>' + facultyStaff.education + '</td>' +
                        '<td>' + facultyStaff.specialization + '</td>' +
                        '<td>' + facultyStaff.date_appointment + '</td>' +
                        '<td>' + facultyStaff.employee_num + '</td>' +
                        '<td>' + facultyStaff.department + '</td>' +
                        '<td>' + facultyStaff.position + '</td>' +
                        '<td>' + facultyStaff.designation + '</td>' +
                        '<td>' + facultyStaff.advisory + '</td>' +
                        '<td>' +
                        '<a href="/edit-faculty/' + facultyStaff.id + '" class="btn btn-sm btn-secondary edit-btn"><i class="la la-pencil"></i></a>' +
                        '<a href="javascript:void(0);" class="btn btn-sm btn-danger" id="delete1"><i class="la la-trash-o"></i></a>' +
                        '</td>' +
                        '</tr>';
                    tableBody.append(row);
                });

                // Attach click event listener to dynamically created edit buttons
                tableBody.on('click', '.edit-btn', function (e) {
                    e.preventDefault();

                    // Retrieve the faculty ID from the data attribute
                    var facultyId = $(this).closest('tr').find('td[data-faculty-id]').data('faculty-id');

                    // Call your function to handle the edit action (e.g., fetch data and open the edit form)
                    fetchFacultyStaffDataForEdit(facultyId);
                    $('#editForm').removeClass('hidden');
                });
            },
            error: function (error) {
                console.error('Error retrieving data:', error);
            }
        });
    }

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

                // Show the edit form and hide list-view
                $('#editForm').removeClass('hidden');
                $('#listView').addClass('hidden');
            },
            error: function (error) {
                console.error('Error fetching data for edit:', error);
                // Handle errors, display a message using SweetAlert if needed
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
        $('#editForm').on('submit', function (e) {
            e.preventDefault();

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
                type: 'POST',
                data: editedData,
                success: function (response) {
                    // Display success message using SweetAlert
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Edited!',
                        text: 'The data has been updated successfully.',
                    });

                    // Hide the edit form after successful update
                    $('#editForm').addClass('hidden');
                    $('#listView').removeClass('hidden');

                    // Update the table to reflect the changes (call your function here)
                    updateFacultyStaffTable();
                },
                error: function (error) {
                    console.error('Error updating data:', error);
                    // Display an error message using SweetAlert if needed
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error updating data. Please try again later.',
                    });
                }
            });
        });

        $('#cancelButton').on('click', function () {
            // Hide the edit form when cancel button is clicked
            $('#editForm').addClass('hidden');
        });
    }

    // Call the function to submit edited data
    submitEditedData();

    // Call the function to update the table on page load
    updateFacultyStaffTable();
});

$(document).ready(function () {
    var facultyStaffId;


    // Function to update the professors table with the provided data
    function updateProfessorsTableWithData(facultyStaffList) {
        var tableBody = $('#professorsTable tbody');
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
                '<a href="javascript:void(0);" class="btn btn-sm btn-secondary edit-btn" data-faculty-id="' + facultyStaff.id + '"><i class="la la-pencil"></i></a>' +
                '<a href="javascript:void(0);" class="btn btn-sm btn-danger delete-btn"><i class="la la-trash-o"></i></a>' +
                '</td>' +
                '</tr>';
            tableBody.append(row);
        });
    }

    // Function to fetch faculty and staff data and update the table
    function updateProfessorsTable() {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/all-faculty-staff',
            type: 'GET',
            success: function (response) {
                var facultyStaffList = response.facultyStaffList;
                updateProfessorsTableWithData(facultyStaffList);
            },
            error: function (error) {
                console.error('Error retrieving data:', error);
            }
        });
    }

    // Function to fetch faculty and staff data for editing
    function fetchFacultyStaffDataForEdit(id) {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/faculty-staff/' + id,
            type: 'GET',
            success: function (response) {
                var facultyStaff = response.facultyStaff;
  
                if (facultyStaff) {
                    var nameParts = facultyStaff.name.split(' ');
                    var last_name = nameParts[0];
                    var first_name = nameParts[1];
                    var middle_name = nameParts[2] || '';
                    var extension = nameParts[3] || '';
  
                    $('#editForm #last_name').val(last_name);
                    $('#editForm #first_name').val(first_name);
                    $('#editForm #middle_name').val(middle_name);
                    $('#editForm #extension').val(extension);
                    $('#editForm #gender').val(facultyStaff.gender);
                    $('#editForm #datepicker1').val(facultyStaff.date_of_birth);
                    $('#editForm #contact_number').val(facultyStaff.contact_num);
                    $('#editForm #email_address').val(facultyStaff.email_add);
                    $('#editForm #education').val(facultyStaff.education);
                    $('#editForm #specialization').val(facultyStaff.specialization);
                    $('#editForm #datepicker2').val(facultyStaff.date_appointment);
                    $('#editForm #employee_number').val(facultyStaff.employee_num);
                    $('#editForm #department').val(facultyStaff.department);
                    $('#editForm #position').val(facultyStaff.position);
                    $('#editForm #designation').val(facultyStaff.designation);
                    $('#editForm #advisory').val(facultyStaff.advisory);
                } else {
                    console.error('Invalid facultyStaff data:', facultyStaff);
                }
            },
            error: function (error) {
                console.error('Error fetching facultyStaff data for edit:', error);
            }
        });
    }

    // Function to submit edited data
function submitEditedData(editData) {
    $.ajax({
        url: 'http://127.0.0.1:8000/api/faculty-staff/' + facultyStaffId,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(editData),
        success: function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Successfully Edited!',
                text: 'The data has been updated successfully.',
            });
            // Update the table after successful submission
            updateFacultyStaffTable();
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
}

    // Function to update the table with the latest data
    function updateFacultyStaffTable() {
        // Fetch and update the table data
        updateProfessorsTable();
    }

 // Function to handle the update (edit) action
 function updateFacultyStaffTable(id) {
    var updatedData = {
        'last_name': $('#editForm #last_name').val(),
        'first_name': $('#editForm #first_name').val(),
        'middle_name': $('#editForm #middle_name').val(),
        'extension': $('#editForm #extension').val(),
        'gender': $('#editForm #gender').val(),
        'date_of_birth': $('#editForm #datepicker1').val(),
        'contact_num': $('#editForm #contact_number').val(),
        'email_add': $('#editForm #email_address').val(),
        'education': $('#editForm #education').val(),
        'specialization': $('#editForm #specialization').val(),
        'date_appointment': $('#editForm #datepicker2').val(),
        'employee_num': $('#editForm #employee_number').val(),
        'department': $('#editForm #department').val(),
        'position': $('#editForm #position').val(),
        'designation': $('#editForm #designation').val(),
        'advisory': $('#editForm #advisory').val(),
    };

    submitEditedData(updatedData);
}

    function combineAndFormatNames() {
        // Get values from form fields
        var lastName = capitalizeFirstLetter($('#last_name').val());
        var firstName = capitalizeFirstLetter($('#first_name').val());
        var middleName = capitalizeFirstLetter($('#middle_name').val());
        var extension = $('#extension').val();
    
        // Combine names
        var combinedName = lastName + ', ' + firstName + ' ' + middleName + ' ' + extension;
    
        // Update the form fields with the combined name
        $('#combined_name').val(combinedName);
    
        // Format dates for MySQL
        var dateOfBirth = moment($('#datepicker1').val(), 'MM/DD/YYYY').format('YYYY-MM-DD');
        var dateAppointment = moment($('#datepicker').val(), 'MM/DD/YYYY').format('YYYY-MM-DD');
    
        // Prepare data for AJAX or further processing
        var formattedData = {
            last_name: lastName,
            first_name: firstName,
            middle_name: middleName,
            extension: extension,
            gender: $('#gender').val(),
            date_of_birth: dateOfBirth,
            contact_number: $('#contact_number').val(),
            email_address: $('#email_address').val(),
            education: $('#education').val(),
            specialization: $('#specialization').val(),
            date_appointment: dateAppointment,
            employee_number: $('#employee_number').val(),
            department: $('#department').val(),
            position: $('#position').val(),
            designation: $('#designation').val(),
            advisory: $('#advisory').val(),
            // Add other fields as needed
        };
    
        // You can now use the formattedData as needed, for example, sending it in an AJAX request.
        console.log('Formatted Data:', formattedData);
    }

    // Function to confirm and delete faculty and staff
    function confirmAndDeleteFacultyStaff(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFacultyStaff(id);
            }
        });
    }

    // Function to handle the update (edit) action
    function updateFacultyStaff(id) {
        var updatedData = {
            'last_name': $('#editForm #last_name').val(),
            'first_name': $('#editForm #first_name').val(),
            'middle_name': $('#editForm #middle_name').val(),
            'extension': $('#editForm #extension').val(),
            'gender': $('#editForm #gender').val(),
            'date_of_birth': $('#editForm #datepicker1').val(),
            'contact_num': $('#editForm #contact_number').val(),
            'email_add': $('#editForm #email_address').val(),
            'education': $('#editForm #education').val(),
            'specialization': $('#editForm #specialization').val(),
            'date_appointment': $('#editForm #datepicker2').val(),
            'employee_num': $('#editForm #employee_number').val(),
            'department': $('#editForm #department').val(),
            'position': $('#editForm #position').val(),
            'designation': $('#editForm #designation').val(),
            'advisory': $('#editForm #advisory').val(),
        };
  
        submitEditedData(updatedData);
    }

    // Function to handle the delete action
    function deleteFacultyStaff(id) {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/faculty-staff/' + id,
            type: 'DELETE',
            success: function (response) {
                console.log('Delete successful:', response);
                Swal.fire({
                    title: 'Success!',
                    text: 'Faculty and staff deleted successfully!',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                }).then(function () {
                    fetchAndPopulateTable();
                });
            },
            error: function (error) {
                console.error('Error deleting faculty and staff:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to delete faculty and staff. Please try again.',
                    icon: 'error',
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    }

    $(document).on('submit', '#editForm', function (e) {
        e.preventDefault();
        combineAndFormatNames(); // Call the function to combine and format names
        updateFacultyStaffTable(); // Update the table after combining names
        $('#editForm').addClass('hidden');
        $('#professorsTableContainer').removeClass('hidden');
    });

    // Event listener for edit button click
    $('#professorsTable').on('click', '.edit-btn', function (e) {
        e.preventDefault();
        facultyStaffId = $(this).closest('tr').find('td[data-faculty-id]').data('faculty-id');

        if (facultyStaffId) {
            fetchFacultyStaffDataForEdit(facultyStaffId);
            $('#listView').addClass('hidden');
            $('#editForm').removeClass('hidden');
        } else {
            console.error('Invalid facultyStaffId');
        }
    });

    // Event listener for delete button click
    $('#professorsTable').on('click', '.delete-btn', function (e) {
        e.preventDefault();
        var facultyId = $(this).closest('tr').find('td[data-faculty-id]').data('faculty-id');
        confirmAndDeleteFacultyStaff(facultyId);
    });

    // Event listener for form submission
    $(document).on('submit', '#editForm', function (e) {
        e.preventDefault();
        updateFacultyStaff();
        $('#editForm').addClass('hidden');
        $('#listView').removeClass('hidden');
        updateProfessorsTable();
    });

    // Initial load: Fetch and display faculty and staff data
    updateProfessorsTable();
});

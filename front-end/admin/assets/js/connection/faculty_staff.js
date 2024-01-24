
$(document).ready(function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    // Function to combine and format names
    function combineAndFormatNames() {
        // Capitalize first letters of names
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
    
        // Prepare data for AJAX
        var formData = {
            last_name: lastName,
            first_name: firstName,
            middle_name: middleName,
            extension: extension,
            gender: $('#gender').val(),
            date_of_birth: dateOfBirth,
            contact_num: $('#contact_number').val(),
            email_add: $('#email_address').val(),
            education: $('#education').val(),
            specialization: $('#specialization').val(),
            date_appointment: dateAppointment,
            employee_num: $('#employee_number').val(),
            department: $('#department').val(),
            position: $('#position').val(),
            designation: $('#designation').val(),
            advisory: $('#advisory').val(),
        };
    
        // AJAX function to submit form data
        $.ajax({
            url: 'http://127.0.0.1:8000/api/add-faculty', // Update the URL based on your Laravel route
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                // Handle success
                console.log(response);
    
                // Show success message using a library like SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Faculty/Staff Added Successfully!',
                    text: response.message,
                });
    
                // Update the table on the "all-professor.html" page
                updateListView(response);
    
                // Clear the form after successful submission
                $('#addFacultyForm')[0].reset();
            },
            error: function(error) {
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
    }
    
    // Function to update the table on the "all-professor.html" page
    function updateListView(response) {
        // Assuming "all-professor.html" has a table with an ID like "professorTable"
        // and you want to add a new row with the data from the response
        var newRow = '<tr>' +
            '<td>' + response.data.id + '</td>' +
            '<td>' + response.data.name + '</td>' +
            '<td>' + response.data.gender + '</td>' +
            '<td>' + response.data.date_of_birth + '</td>' +
            '<td>' + response.data.contact_num + '</td>' +
            '<td>' + response.data.email_add + '</td>' +
            '<td>' + response.data.education + '</td>' +
            '<td>' + response.data.specialization + '</td>' +
            '<td>' + response.data.date_appointment + '</td>' +
            '<td>' + response.data.employee_num + '</td>' +
            '<td>' + response.data.department + '</td>' +
            '<td>' + response.data.position + '</td>' +
            '<td>' + response.data.designation + '</td>' +
            '<td>' + response.data.advisory + '</td>' +
            '<td>' +
            '<a href="javascript:void(0);" class="btn btn-sm btn-secondary" id="edit1"><i class="la la-pencil"></i></a>' +
            '<a href="javascript:void(0);" class="btn btn-sm btn-danger" id="delete1"><i class="la la-trash-o"></i></a>' +
            '</td>' +
            '</tr>';
    
        // Append the new row to the table
        $('#professorTable tbody').append(newRow);
    }
    
    // Event listener for form submission
    $(document).ready(function() {
        $("#addFacultyForm").submit(function(e) {
            e.preventDefault();
    
            // Call the function to combine and format names
            combineAndFormatNames();
        });
    });

    document.getElementById('cancelButton1').addEventListener('click', function () {
        clearForm();
    });

    function clearForm() {
        // You can use AJAX to send a request to the server to clear data if needed
        // or simply reset the form fields using JavaScript
        var form = document.getElementById('addFacultyForm');
        
        // Reset form fields
        form.reset();
    }
});


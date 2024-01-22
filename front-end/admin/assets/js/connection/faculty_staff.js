
function addFacultyStaff() {
    $.ajax({
        url: '/api/faculty-and-staff',
        type: 'POST',
        data: $('#facultyStaffForm').serialize(),
        success: function(response) {
            // Append the new faculty/staff to your list
            // You may need to customize this based on your HTML structure
            // Assuming your list is displayed in a div with an ID of 'facultyStaffList'
            $('#facultyStaffList').append('<div>Name: ' + response.name + ', Email: ' + response.email + ' <button onclick="editFacultyStaff(' + response.id + ')">Edit</button> <button onclick="deleteFacultyStaff(' + response.id + ')">Delete</button></div>');

            // Clear the form fields after successful submission
            $('#facultyStaffForm')[0].reset();
        },
        error: function(error) {
            console.log(error);
            // Handle errors if needed
        }
    });
}



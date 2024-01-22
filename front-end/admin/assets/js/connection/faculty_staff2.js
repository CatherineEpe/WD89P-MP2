
$(document).ready(function () {

    // Function to fetch all faculty and staff data and update the table
    function updateFacultyStaffTable() {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/all-faculty-staff', // Route to retrieve all faculty and staff
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
                        '<td>' + facultyStaff.id + '</td>' +
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
                        '<a href="javascript:void(0);" class="btn btn-sm btn-secondary" id="edit1"><i class="la la-pencil"></i></a>' +
                        '<a href="javascript:void(0);" class="btn btn-sm btn-danger" id="delete1"><i class="la la-trash-o"></i></a>' +
                        '</td>' +
                        '</tr>';
                    tableBody.append(row);
                });
            },
            error: function (error) {
                console.error('Error retrieving data:', error);
            }
        });
    }

    // Call the function to update the table on page load
    updateFacultyStaffTable();
});

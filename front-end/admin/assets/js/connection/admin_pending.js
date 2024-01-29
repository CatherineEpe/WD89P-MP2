$(document).ready(function () {
    // Event delegation for dynamically created buttons
    $(document).on('click', '.confirm-enrollment', function () {
        var lrn = $(this).data('lrn'); // Get LRN dynamically from data attribute
        $.ajax({
            url: 'http://127.0.0.1:8000/api/confirm-enrollment',
            method: 'POST',
            data: { lrn: lrn },
            success: function (response) {
                // Handle success response
                console.log(response);
                // Show success message using SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Enrollment Confirmed!',
                    text: 'The enrollment has been confirmed successfully.',
                    timer: 2000 // Duration for the alert to automatically close (in milliseconds)
                });
            },
            error: function (xhr, status, error) {
                // Handle error response
                console.error(error);
                // Show error message using SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to confirm enrollment. Please try again.'
                });
            }
        });
    });

    // AJAX request to populate pending enrollments
    $.ajax({
        url: "http://127.0.0.1:8000/api/get-pending-enrollments",
        method: "GET",
        success: function (response) {
            $("#pendingEnrollment tbody").empty();
            

            response.forEach(function (enrollment) {
                var row = "<tr>" +
                    "<td>" + enrollment.lrn + "</td>" +
                    "<td>" + enrollment.name + "</td>" +
                    "<td>" + enrollment.grade_level + "</td>" +
                    "<td>" + enrollment.status + "</td>" +
                    "<td>" + enrollment.returnee + "</td>" +
                    "<td>" +
                    "<a href='javascript:void(0);' class='btn btn-sm btn-primary view-pdf' data-pdf-url='" + enrollment.pdf_url + "'>Review</a>" +
                    "<button class='btn btn-sm btn-primary confirm-enrollment' data-lrn='" + enrollment.lrn + "'>Confirm</button>" + // Pass LRN as data attribute
                    "</td>" +
                    "</tr>";

                $("#pendingEnrollment tbody").append(row);
            });

        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });

    // AJAX request to populate confirmed enrollments
    $.ajax({
        url: "http://127.0.0.1:8000/api/get-confirmed-enrollments",
        method: "GET",
        success: function (response) {
            $("#confirmedEnrollment tbody").empty();

            response.forEach(function (enrollment) {
                var row = "<tr>" +
                    "<td>" + enrollment.lrn + "</td>" +
                    "<td>" + enrollment.name + "</td>" +
                    "<td>" + enrollment.grade_level + "</td>" +
                    "<td>" + enrollment.gender + "</td>" +
                    "<td>" + enrollment.birthdate + "</td>" +
                    "<td>" + enrollment.age + "</td>" +
                    "<td>" + enrollment.beneficiary + "</td>" +
                    "<td>" + enrollment.returnee + "</td>" +
                    "<td>" + enrollment.status + "</td>" +
                    "<td>" +
                    "<a href='javascript:void(0);' class='btn btn-sm btn-primary view-pdf' data-pdf-url='" + enrollment.pdf_url + "'>View</a>" +
                    "</td>" +
                    "</tr>";

                $("#confirmedEnrollment tbody").append(row);
            });

        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });

    // AJAX request to populate confirmed enrollments
    $.ajax({
        url: "http://127.0.0.1:8000/api/get-teachers-staff",
        method: "GET",
        success: function (response) {
            $("#AdminTeachersList tbody").empty();

            response.forEach(function (teachersStaff) {
                var row = "<tr>" +
                    "<td>" + teachersStaff.employee_num + "</td>" +
                    "<td>" + teachersStaff.name + "</td>" +
                    "<td>" + teachersStaff.gender + "</td>" +
                    "<td>" + teachersStaff.date_of_birth + "</td>" +
                    "<td>" + teachersStaff.contact_num + "</td>" +
                    "<td>" + teachersStaff.email_add + "</td>" +
                    "<td>" + teachersStaff.department + "</td>" +
                    "<td>" + teachersStaff.position + "</td>" +
                    "<td>" + teachersStaff.designation + "</td>" +
                    "<td>" + teachersStaff.advisory + "</td>" +
                    "<td>" +
                    "<a href='javascript:void(0);' class='btn btn-sm btn-primary view-pdf' data-pdf-url='" + teachersStaff.pdf_url + "'>View</a>" +
                    "</td>" +
                    "</tr>";

                $("#AdminTeachersList tbody").append(row);
            });

        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });

    
    
});

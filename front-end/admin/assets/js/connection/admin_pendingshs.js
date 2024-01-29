$(document).ready(function () {
    // Event delegation for dynamically created buttons
    $(document).on('click', '.confirm-enrollment-shs', function () {
        var lrn = $(this).data('lrn'); // Get LRN dynamically from data attribute
        $.ajax({
            url: 'http://127.0.0.1:8000/api/confirm-enrollment', // Update URL to match your Laravel route
            method: 'POST',
            data: { lrn: lrn },
            success: function (response) {
                // Handle success response
                console.log(response);

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

                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to confirm enrollment. Please try again.'
                });
            }
        });
    });

    // Your existing AJAX request to populate pending enrollments
    $.ajax({
        url: "http://127.0.0.1:8000/api/get-pending-enrollments-shs",
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
        url: "http://127.0.0.1:8000/api/get-confirmed-enrollments-shs",
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
});




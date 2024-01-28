$.ajax({
    url: "http://127.0.0.1:8000/api/get-pending-enrollments",
    method: "GET",
    success: function(response) {
        $("#pendingEnrollment tbody").empty();

        response.forEach(function(enrollment) {
            var row = "<tr>" +
                "<td>" + enrollment.lrn + "</td>" +
                "<td>" + enrollment.name + "</td>" +
                "<td>" + enrollment.grade_level + "</td>" +
                "<td>" + enrollment.status + "</td>" +
                "<td>" + enrollment.returnee + "</td>" +
                "<td>" +
                "<a href='javascript:void(0);' class='btn btn-sm btn-primary view-pdf' data-pdf-url='" + enrollment.pdf_url + "'>View</a>" +  "<button class='btn btn-sm btn-primary confirm-enrollment' data-student-id='" + enrollment.student_id + "'>Confirm</button>" +
                "</td>" +
                "</tr>";

            $("#pendingEnrollment tbody").append(row);
        });
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
});

// Event listener for the "View" button
$(document).on("click", ".view-pdf", function() {
    var pdfUrl = $(this).data("pdf-url");
    $('#pdfViewer').removeClass('hidden');
    $('#admin').addClass('hidden');

    $('#pdfViewer').empty().append('<embed src="' + pdfUrl + '" width="100%" height="600px" type="application/pdf" />');
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF View</title>
    <style>
        /* Add your CSS styles here */
        /* Example styles */
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
        }
        .container {
            margin: 20px;
        }
        .row {
            margin-bottom: 10px;
        }
        .col-lg-3, .col-lg-4, .col-lg-6 {
            float: left;
            width: 33.33%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <strong>Learner's Reference No.:</strong> {{ $lrn }}
            </div>
            <div class="col-lg-3">
                <strong>Grade Level to Enroll:</strong> {{ $grade_level }}
            </div>
            <div class="col-lg-6">
                <strong>Returnee (Balik-aral), Transferee or Move In:</strong> {{ $returnee }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <strong>Full Name:</strong> {{ $name }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <strong>Gender:</strong> {{ $gender }}
            </div>
            <div class="col-lg-3">
                <strong>Date of Birth:</strong> {{ $birthdate }}
            </div>
            <div class="col-lg-3">
                <strong>Place of Birth:</strong> {{ $place_of_birth }}
            </div>
            <div class="col-lg-3">
                <strong>Age:</strong> {{ $age }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <strong>Mother Tongue:</strong> {{ $mother_tongue }}
            </div>
            <div class="col-lg-3">
                <strong>IP Member?</strong> {{ $ip_member }}
            </div>
            <div class="col-lg-3">
                <strong>4Ps Member?</strong> {{ $beneficiary }}
            </div>
            <div class="col-lg-3">
                <strong>Learner With Disability?</strong> {{ $lwd }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <strong>Current Sitio/Street:</strong> {{ $currentSitioStreet }}
            </div>
            <div class="col-lg-3">
                <strong>Current Barangay:</strong> {{ $currectBarangay }}
            </div>
            <div class="col-lg-3">
                <strong>Current Municipality/City:</strong> {{ $currentMunicipalityCity }}
            </div>
            <div class="col-lg-3">
                <strong>Current Province:</strong> {{ $currentProvince }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <strong>Father's Last Name:</strong> {{ $flast }}
            </div>
            <div class="col-lg-3">
                <strong>Father's First Name:</strong> {{ $ffirst }}
            </div>
            <div class="col-lg-3">
                <strong>Father's Middle Name:</strong> {{ $fmiddle }}
            </div>
            <div class="col-lg-3">
                <strong>Father's Contact Number:</strong> {{ $fcontact }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <strong>Mother's Last Name:</strong> {{ $mlast }}
            </div>
            <div class="col-lg-3">
                <strong>Mother's First Name:</strong> {{ $mfirst }}
            </div>
            <div class="col-lg-3">
                <strong>Mother's Middle Name:</strong> {{ $mmiddle }}
            </div>
            <div class="col-lg-3">
                <strong>Mother's Contact Number:</strong> {{ $mcontact }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <strong>Guardian's Last Name:</strong> {{ $glast }}
            </div>
            <div class="col-lg-3">
                <strong>Guardian's First Name:</strong> {{ $gfirst }}
            </div>
            <div class="col-lg-3">
                <strong>Guardian's Middle Name:</strong> {{ $gmiddle }}
            </div>
            <div class="col-lg-3">
                <strong>Guardian's Contact Number:</strong> {{ $gcontact }}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <strong>Last School Attended:</strong> {{ $last_school_attended }}
            </div>
            <div class="col-lg-4">
                <strong>Last Grade Level Completed:</strong> {{ $last_grade_level_completed }}
            </div>
            <div class="col-lg-4">
                <strong>Last School Year Completed:</strong> {{ $last_school_year_completed }}
            </div>
        </div>
    </div>
</body>
</html>

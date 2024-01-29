<?php

namespace App\Http\Controllers;

use App\Models\StudentForm;
use Illuminate\Http\Request;

class ConfirmedEnrollmentController extends Controller
{
    public function getConfirmedEnrollments() {
        $enrollment = StudentForm::select('lrn', 'name', 'grade_level', 'gender', 'birthdate', 'age', 'beneficiary', 'returnee', 'status')
                        ->where('enrollmentStatus', 'confirmed') // Fetch pending enrollment
                        ->get();

        return response()->json($enrollment);
    }
}

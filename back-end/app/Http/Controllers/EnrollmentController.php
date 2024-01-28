<?php

namespace App\Http\Controllers;

use App\Models\StudentForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EnrollmentController extends Controller
{
    public function getPendingEnrollments() {
        $enrollments = StudentForm::select('lrn', 'name', 'grade_level', 'status', 'returnee')
                        ->where('enrollmentStatus', 'pending') // Fetch pending enrollment
                        ->get();
        return response()->json($enrollments);
    }
}

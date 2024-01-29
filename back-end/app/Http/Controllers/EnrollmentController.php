<?php

namespace App\Http\Controllers;

use App\Models\StudentForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EnrollmentController extends Controller
{
    public function getPendingEnrollments() {
        $enrollment = StudentForm::select('lrn', 'name', 'grade_level', 'status', 'returnee')
                        ->where('enrollmentStatus', 'pending') // Fetch pending enrollment
                        ->get();
        return response()->json($enrollment);
    }

    public function confirmEnrollment(Request $request) {
        $lrn = $request->input('lrn');
        
        // Update enrollment status to 'confirmed' in the database
        StudentForm::where('lrn', $lrn)->update(['enrollmentStatus' => 'confirmed']);
        
        return response()->json(['message' => 'Enrollment confirmed successfully']);
    }


}

<?php

namespace App\Http\Controllers;

use App\Models\StudentFormShs;
use Illuminate\Http\Request;

class EnrollmentControllershs extends Controller
{
    public function getPendingEnrollmentsshs() {
        $enrollments = StudentFormshs::select('lrn', 'name', 'grade_level', 'status', 'returnee')
                        ->where('enrollmentStatus', 'pending') // Fetch pending enrollment
                        ->get();
        return response()->json($enrollments);
        
    }

    public function confirmEnrollment(Request $request) {
        $lrn = $request->input('lrn');
        
        // Update enrollment status to 'confirmed' in the database
        StudentFormshs::where('lrn', $lrn)->update(['enrollmentStatus' => 'confirmed']);
        
        return response()->json(['message' => 'Enrollment confirmed successfully']);
    }
}

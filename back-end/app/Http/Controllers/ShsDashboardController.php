<?php

namespace App\Http\Controllers;

use App\Models\StudentFormShs;
use App\Models\FacultyStaff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShsDashboardController extends Controller
{
    public function getConfirmedEnrollments() {
        $enrollment = StudentFormShs::select('lrn', 'name', 'grade_level', 'status', 'returnee')
                        ->get();
        return response()->json($enrollment);
    }

    public function confirmEnrollment(Request $request) {
        $lrn = $request->input('lrn');
        
        // Update enrollment status to 'confirmed' in the database
        StudentFormShs::where('lrn', $lrn)->update(['enrollmentStatus' => 'confirmed']);
        
        return response()->json(['message' => 'Enrollment confirmed successfully']);
    }

    public function getTeachersStaff() {
        $teachersStaff = FacultyStaff::select('employee_num', 'name', 'gender', 'date_of_birth', 'contact_num', 'email_add', 'department', 'position', 'designation', 'advisory')
                        ->where('department', 'Senior High School')
                        ->get();
        return response()->json($teachersStaff);
    }
}

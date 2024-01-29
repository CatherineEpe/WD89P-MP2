<?php

namespace App\Http\Controllers;

use App\Models\StudentForm;
use App\Models\FacultyStaff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JhsDashboardController extends Controller
{
    public function getConfirmedEnrollments() {
        $enrollment = StudentForm::select('lrn', 'name', 'grade_level', 'gender', 'birthdate', 'age', 'beneficiary', 'status', 'returnee')
                        ->get();
        return response()->json($enrollment);
    }

    public function confirmEnrollment(Request $request) {
        $lrn = $request->input('lrn');
        
        // Update enrollment status to 'confirmed' in the database
        StudentForm::where('lrn', $lrn)->update(['enrollmentStatus' => 'confirmed']);
        
        return response()->json(['message' => 'Enrollment confirmed successfully']);
    }

    public function getTeachersStaffjhs() {
        $teachersStaff = FacultyStaff::select('employee_num', 'name', 'gender', 'date_of_birth', 'contact_num', 'email_add', 'department', 'position', 'designation', 'advisory')
                        ->where('department', 'Junior High School')
                        ->get();
        return response()->json($teachersStaff);
    }

}

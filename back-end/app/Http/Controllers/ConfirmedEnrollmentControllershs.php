<?php

namespace App\Http\Controllers;

use App\Models\StudentFormShs;
use Illuminate\Http\Request;

class ConfirmedEnrollmentControllershs extends Controller
{
    public function getConfirmedEnrollmentsshs() {
        $enrollment = StudentFormshs::select('lrn', 'name', 'grade_level', 'gender', 'birthdate', 'age', 'beneficiary', 'returnee', 'status')
                        ->where('enrollmentStatus', 'confirmed') // Fetch confirmed enrollment
                        ->get();
        return response()->json($enrollment);
    }
}

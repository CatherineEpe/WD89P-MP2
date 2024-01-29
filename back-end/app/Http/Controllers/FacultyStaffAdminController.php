<?php

namespace App\Http\Controllers;

use App\Models\FacultyStaff;
use Illuminate\Http\Request;

class FacultyStaffAdminController extends Controller
{
    public function getTeachersStaff() {
        $teachersStaff = FacultyStaff::select('employee_num', 'name', 'gender', 'date_of_birth', 'contact_num', 'email_add', 'department', 'position', 'designation', 'advisory')
                        ->get();
        return response()->json($teachersStaff);
    }
}

<?php

// app\Http\Controllers\FacultyStaffController.php

use Illuminate\Http\Request;
use App\Models\FacultyStaff;

class FacultyStaffController extends Controller
{
    // ... (other methods)

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string',
            'date_of_birth' => 'required|date',
            'contact_number' => 'required|string',
            'email' => 'required|email|unique:faculty_staff,email',
            'education' => 'required|string',
            'specialization' => 'required|string',
            'appointment_date' => 'required|date',
            'employee_number' => 'required|string',
            'department' => 'required|string',
            'position' => 'required|string',
            'designation' => 'required|string',
            'advisory' => 'required|string',
        ]);

        // Handle file upload if needed
        if ($request->hasFile('file')) {
            // Handle file upload logic
            // $data['file'] = $request->file('file')->store('uploads');
        }

        $facultyStaff = FacultyStaff::create($data);

        return response()->json($facultyStaff);
    }

    // ... (other methods)
}

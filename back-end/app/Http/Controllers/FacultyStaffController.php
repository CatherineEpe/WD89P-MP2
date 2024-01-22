<?php

namespace App\Http\Controllers;

use App\Models\FacultyStaff;
use Illuminate\Http\Request;

class FacultyStaffController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'last_name' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'required|string|max:255',
            'extension' => 'required|string|max:10',
            'gender' => 'required|string|max:10',
            'date_of_birth' => 'required|date',
            'contact_num' => 'required|string|max:15',
            'email_add' => 'required|email|max:255',
            'education' => 'required|string|max:255',
            'specialization' => 'required|string|max:255',
            'date_appointment' => 'required|date',
            'employee_num' => 'required|string|max:20',
            'department' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'advisory' => 'required|string|max:255',
        ]);

        // Combine first, middle, and last names to form the combined name
        $name = $validatedData['last_name'] . ', ' . $validatedData['first_name'] . ' ' . $validatedData['middle_name'] . ' ' . $validatedData['extension'];

        // Add the combined name to the validated data
        $validatedData['name'] = $name;

        // Create a new FacultyStaff
        $facultyStaff = FacultyStaff::create($validatedData);

        // Prepare the response data
        $responseData = [
            'id' => $facultyStaff->id,
            'name' => $facultyStaff->combined_name,
            'gender' => $facultyStaff->gender,
            'date_of_birth' => $facultyStaff->date_of_birth,
            'contact_num' => $facultyStaff->contact_number,
            'email_add' => $facultyStaff->email_address,
            'education' => $facultyStaff->education,
            'specialization' => $facultyStaff->specialization,
            'date_appointment' => $facultyStaff->date_of_original_appointment,
            'employee_num' => $facultyStaff->employee_number,
            'department' => $facultyStaff->department,
            'position' => $facultyStaff->position,
            'designation' => $facultyStaff->designation,
            'advisory' => $facultyStaff->advisory,
        ];

        // Return the success response with the created faculty and staff data
        return response()->json([
            'success' => true,
            'message' => 'Faculty and staff added successfully',
            'data' => $responseData,
        ]);
    }

    public function getAllFacultyStaff()
    {
        // Retrieve all faculty and staff
        $facultyStaffList = FacultyStaff::all();

        // Return the data as JSON
        return response()->json(['facultyStaffList' => $facultyStaffList]);
    }
}

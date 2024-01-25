<?php

namespace App\Http\Controllers;

use App\Models\FacultyStaff;
use Illuminate\Http\Request;
use Carbon\Carbon;

class FacultyStaffController extends Controller
{
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
        $name = $validatedData['last_name'] . ' ' . $validatedData['first_name'] . ' ' . $validatedData['middle_name'] . ' ' . $validatedData['extension'];

        // Add the combined name to the validated data
        $validatedData['name'] = $name;

        // Create a new FacultyStaff
        $facultyStaff = FacultyStaff::create($validatedData);

        // Prepare the response data
        $responseData = [
            'name' => $facultyStaff->name,
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

    public function edit($id)
    {
        $facultyStaff = FacultyStaff::find($id);

        return response()->json(['facultyStaff' => $facultyStaff]);
    }

    public function update(Request $request, $id)
    {

        // Check if the faculty staff with the given ID exists
        $facultyStaff = FacultyStaff::find($id);


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
        $name = $validatedData['last_name'] . ' ' . $validatedData['first_name'] . ' ' . $validatedData['middle_name'] . ' ' . $validatedData['extension'];

        // Add the combined name to the validated data
        $validatedData['name'] = $name;

        // Check if the faculty staff with the given ID exists
        $facultyStaff = FacultyStaff::find($id);

        if (!$facultyStaff) {
            return response()->json(['error' => 'Faculty/Staff not found'], 404);
        }

        // Update the existing faculty staff record
        $facultyStaff->update($validatedData);

        // Delete the previous record (old data)
        FacultyStaff::where('id', '!=', $facultyStaff->id)->delete();

        return response()->json(['message' => 'Faculty/Staff updated successfully']);
    }

    public function delete($id)
    {
        // Find the faculty/staff by ID
        $facultyStaff = FacultyStaff::find($id);

        // Check if the faculty/staff exists
        if (!$facultyStaff) {
            return response()->json(['error' => 'Faculty/staff not found'], 404);
        }

        // Delete the faculty/staff
        $facultyStaff->delete();

        // Return a success response
        return response()->json(['message' => 'Faculty/staff deleted successfully']);
    }
}

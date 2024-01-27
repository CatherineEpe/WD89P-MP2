<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentForm;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function submitForm(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'lrn' => 'required',
            'grade_level' => 'required',
            'returnee' => 'required',
            'name' => 'required|string',
            'gender' => 'required|string|in:Male,Female',
            'birthdate' => 'required|date',
            'place_of_birth' => 'required|string|max:255',
            'age' => 'required|integer|min:0',
            'mother_tongue' => 'required|string|max:255',
            'ip_member' => 'required|string|in:Yes,No',
            'beneficiary' => 'required|string|in:Yes,No',
            'lwd' => 'required|string|max:255',
            'currentHouseNo' => 'required|string|max:255',
            'currentSitioStreet' => 'required|string|max:255',
            'currentBarangay' => 'required|string|max:255',
            'currentMunicipalityCity' => 'required|string|max:255',
            'currentProvince' => 'required|string|max:255',
            'currentCountry' => 'required|string|max:255',
            'permanentHouseNo' => 'required|string|max:255',
            'permanentSitioStreet' => 'required|string|max:255',
            'permanentBarangay' => 'required|string|max:255',
            'permanentMunicipalityCity' => 'required|string|max:255',
            'permanentProvince' => 'required|string|max:255',
            'permanentCountry' => 'required|string|max:255',
            'flast' => 'required|string|max:255',
            'ffirst' => 'required|string|max:255',
            'fmiddle' => 'required|string|max:255',
            'fcontact' => 'required|string|max:255',
            'mlast' => 'required|string|max:255',
            'mfirst' => 'required|string|max:255',
            'mmiddle' => 'required|string|max:255',
            'mcontact' => 'required|string|max:255',
            'glast' => 'required|string|max:255',
            'gfirst' => 'required|string|max:255',
            'gmiddle' => 'required|string|max:255',
            'gcontact' => 'required|string|max:255',
            'last_school_attended' => 'nullable|string|max:255',
            'last_grade_level_completed' => 'nullable|string|max:255',
            'last_school_year_completed' => 'nullable|string|max:255',
            'school_id' => 'nullable|string|max:255',
            'card_of_previous_grade' => 'required|file|max:10240', 
            'birth_certificate' => 'required|file|max:10240', 
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a new StudentForm instance
        $studentForm = new StudentForm();

        // Assign individual attributes
        $studentForm->fill($request->except(['card_of_previous_grade', 'birth_certificate']));

        // Handle file uploads
        if ($request->hasFile('card_of_previous_grade')) {
            // Store the file and get its path
            $cardOfPreviousGradePath = $request->file('card_of_previous_grade')->store('public');
            // Save the file path to the model attribute
            $studentForm->card_of_previous_grade = $cardOfPreviousGradePath;
        }

        if ($request->hasFile('birth_certificate')) {
            // Store the file and get its path
            $birthCertificatePath = $request->file('birth_certificate')->store('public');
            // Save the file path to the model attribute
            $studentForm->birth_certificate = $birthCertificatePath;
        }

        // Save the student form data to the database
        $studentForm->save();

        return response()->json(['message' => 'Form submitted successfully'], 201);
    }

    public function search(Request $request)
    {
        // Get the learner's reference number from the request
        $lrn = $request->input('lrn');

        // Perform the search in the database
        $enrollment = StudentForm::where('lrn', $lrn)->first();

        // Return the search results (you can customize this based on your database structure)
        return response()->json($enrollment);
    }

    public function editOld($id)
    {
        // Fetch the enrollment data by ID
        $enrollment = StudentForm::findOrFail($id);

    }

    public function updateOld(Request $request, $id)
    {
        // Find the enrollment by ID
        $enrollment = StudentForm::findOrFail($id);

        // Validate the request data (you can customize the validation rules)
        $validatedData = $request->validate([
            'lrn' => 'required',
            'grade_level' => 'required',
            'returnee' => 'required',
            'name' => 'required|string',
            'gender' => 'required|string|in:Male,Female',
            'birthdate' => 'required|date',
            'place_of_birth' => 'required|string|max:255',
            'age' => 'required|integer|min:0',
            'mother_tongue' => 'required|string|max:255',
            'ip_member' => 'required|string|in:Yes,No',
            'beneficiary' => 'required|string|in:Yes,No',
            'lwd' => 'required|string|max:255',
            'currentHouseNo' => 'required|string|max:255',
            'currentSitioStreet' => 'required|string|max:255',
            'currentBarangay' => 'required|string|max:255',
            'currentMunicipalityCity' => 'required|string|max:255',
            'currentProvince' => 'required|string|max:255',
            'currentCountry' => 'required|string|max:255',
            'permanentHouseNo' => 'required|string|max:255',
            'permanentSitioStreet' => 'required|string|max:255',
            'permanentBarangay' => 'required|string|max:255',
            'permanentMunicipalityCity' => 'required|string|max:255',
            'permanentProvince' => 'required|string|max:255',
            'permanentCountry' => 'required|string|max:255',
            'flast' => 'required|string|max:255',
            'ffirst' => 'required|string|max:255',
            'fmiddle' => 'required|string|max:255',
            'fcontact' => 'required|string|max:255',
            'mlast' => 'required|string|max:255',
            'mfirst' => 'required|string|max:255',
            'mmiddle' => 'required|string|max:255',
            'mcontact' => 'required|string|max:255',
            'glast' => 'required|string|max:255',
            'gfirst' => 'required|string|max:255',
            'gmiddle' => 'required|string|max:255',
            'gcontact' => 'required|string|max:255',
            'last_school_attended' => 'nullable|string|max:255',
            'last_grade_level_completed' => 'nullable|string|max:255',
            'last_school_year_completed' => 'nullable|string|max:255',
            'school_id' => 'nullable|string|max:255',
            'card_of_previous_grade' => 'required|file|max:10240', 
            'birth_certificate' => 'required|file|max:10240',
        ]);

        // Update the enrollment data with validated data
        $enrollment->update($validatedData);

        // Return a response indicating success (you can customize the response as needed)
        return response()->json(['message' => 'Enrollment data updated successfully']);
    }
}

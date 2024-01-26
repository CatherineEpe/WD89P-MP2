<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentForm;
use Illuminate\Support\Facades\Storage;

class FormController extends Controller
{
    public function submitForm(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'lrn' => 'required',
            'returnee' => 'required',
            'last_name' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'required|string|max:255',
            'extension' => 'required|string|max:10',
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
            'currentCountry' => 'required|string|max:255',
            'currentZipCode' => 'required|string|max:255',
            'permanentHouseNo' => 'required|string|max:255',
            'permanentSitioStreet' => 'required|string|max:255',
            'permanentBarangay' => 'required|string|max:255',
            'permanentMunicipalityCity' => 'required|string|max:255',
            'permanentCountry' => 'required|string|max:255',
            'permanentZipCode' => 'required|string|max:255',
            'flast' => 'nullable|string|max:255',
            'ffirst' => 'nullable|string|max:255',
            'fmiddle' => 'nullable|string|max:255',
            'fcontact' => 'nullable|string|max:255',
            'mlast' => 'nullable|string|max:255',
            'mfirst' => 'nullable|string|max:255',
            'mmiddle' => 'nullable|string|max:255',
            'mcontact' => 'nullable|string|max:255',
            'glast' => 'nullable|string|max:255',
            'gfirst' => 'nullable|string|max:255',
            'gmiddle' => 'nullable|string|max:255',
            'gcontact' => 'nullable|string|max:255',
            'last_school' => 'nullable|string|max:255',
            'last_level' => 'nullable|string|max:255',
            'last_sy' => 'nullable|string|max:255',
            'last_schoolId' => 'nullable|string|max:255',
            'card_of_previous_grade' => 'required|file|max:10240', 
            'birth_certificate' => 'required|file|max:10240', 
        ]);

        // Create a new StudentForm instance
        $studentForm = new StudentForm();

        // Combine data
        $Name = $request->input('last_name') . ' ' . $request->input('first_name') . ' ' . $request->input('middle_name') . ' ' . $request->input('extension');
        $currentAddress = $request->input('currentHouseNo') . ', ' . $request->input('currentSitioStreet') . ', ' . $request->input('currentBarangay') . ', ' . $request->input('currentMunicipalityCity') . ', ' . $request->input('currentCountry') . ', ' . $request->input('currentZipCode');
        $permanentAddress = $request->input('permanentHouseNo') . ', ' . $request->input('permanentSitioStreet') . ', ' . $request->input('permanentBarangay') . ', ' . $request->input('permanentMunicipalityCity') . ', ' . $request->input('permanentCountry') . ', ' . $request->input('permanentZipCode');
        $fatherName = $request->input('flast') . ' ' . $request->input('ffirst') . ' ' . $request->input('fmiddle');
        $motherName = $request->input('mlast') . ' ' . $request->input('mfirst') . ' ' . $request->input('mmiddle');
        $guardianName = $request->input('glast') . ' ' . $request->input('gfirst') . ' ' . $request->input('gmiddle');

        // Create a new StudentForm instance
        $studentForm = new StudentForm();

        // Assign combined data to model attributes
        $studentForm->lrn = $request->input('lrn');
        $studentForm->returnee = $request->input('returnee');
        $studentForm->Name = $Name;
        $studentForm->gender = $request->input('gender');
        $studentForm->birthdate = $request->input('birthdate');
        $studentForm->place_of_birth = $request->input('place_of_birth');
        $studentForm->age = $request->input('age');
        $studentForm->mother_tongue = $request->input('mother_tongue');
        $studentForm->ip_member = $request->input('ip_member');
        $studentForm->beneficiary = $request->input('beneficiary');
        $studentForm->lwd = $request->input('lwd');
        $studentForm->current_address = $currentAddress;
        $studentForm->permanent_address = $permanentAddress;
        $studentForm->fathers_name = $fatherName;
        $studentForm->mothers_maiden_name = $motherName;
        $studentForm->legal_guardians_name = $guardianName;
        $studentForm->parents_contact = $request->input('fcontact') . ' ' . $request->input('mcontact') . ' ' . $request->input('gcontact');
        $studentForm->last_school_attended = $request->input('last_school');
        $studentForm->last_grade_level_completed = $request->input('last_level');
        $studentForm->last_school_year_completed = $request->input('last_sy');
        $studentForm->last_school_id = $request->input('last_schoolId');

        // Handle file uploads
        if ($request->hasFile('card_of_previous_grade')) {
            $cardOfPreviousGradePath = $request->file('card_of_previous_grade')->store('public');
            $studentForm->card_of_previous_grade = $cardOfPreviousGradePath;
        }

        if ($request->hasFile('birth_certificate')) {
            $birthCertificatePath = $request->file('birth_certificate')->store('public');
            $studentForm->birth_certificate = $birthCertificatePath;
        }

        // Save the student form data to the database
        $studentForm->save();

        // Return a response (e.g., success or error message)
        return response()->json(['message' => 'Form submitted successfully']);
    }
}

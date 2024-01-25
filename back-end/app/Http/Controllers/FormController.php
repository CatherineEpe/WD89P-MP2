<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentForm;

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
            'place_birth' => 'required|string|max:255',
            'age' => 'required|integer|min:0',
            'm_tongue' => 'required|string|max:255',
            'ip_member' => 'required|string|in:Yes,No',
            'four_ps' => 'required|string|in:Yes,No',
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
            'flast' => 'required|string|max:255',
            'ffirst' => 'required|string|max:255',
            'fmiddle' => 'required|string|max:255',
            'fcontact' => 'required|string|max:255',
            'mlast' => 'required|string|max:255',
            'mfirst' => 'required|string|max:255',
            'mmiddle' => 'required|string|max:255',
            'mcontact' => 'required|string|max:255',
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

        // Combine last name, first name, middle name, and extension
        $combinedName = $request->input('last_name') . ', ' . $request->input('first_name') . ' ' . $request->input('middle_name') . ' ' . $request->input('extension');
        $studentForm->combined_name = $combinedName;

        // Combine current address fields
        $currentAddress = $request->input('currentHouseNo') . ', ' . $request->input('currentSitioStreet') . ', ' . $request->input('currentBarangay') . ', ' . $request->input('currentMunicipalityCity') . ', ' . $request->input('currentCountry') . ', ' . $request->input('currentZipCode');
        $studentForm->current_address = $currentAddress;

        // Combine permanent address fields
        $permanentAddress = $request->input('permanentHouseNo') . ', ' . $request->input('permanentSitioStreet') . ', ' . $request->input('permanentBarangay') . ', ' . $request->input('permanentMunicipalityCity') . ', ' . $request->input('permanentCountry') . ', ' . $request->input('permanentZipCode');
        $studentForm->permanent_address = $permanentAddress;

        // Combine father's name
        $fatherName = $request->input('flast') . ' ' . $request->input('ffirst') . ' ' . $request->input('fmiddle');
        $studentForm->fathers_name = $fatherName;

        // Combine mother's maiden name
        $motherName = $request->input('mlast') . ' ' . $request->input('mfirst') . ' ' . $request->input('mmiddle');
        $studentForm->mothers_maiden_name = $motherName;

        // Combine guardian's name
        $guardianName = $request->input('glast') . ' ' . $request->input('gfirst') . ' ' . $request->input('gmiddle');
        $studentForm->legal_guardians_name = $guardianName;

        // Combine parent's contact number
        $parentContact = $request->input('fcontact') . ' ' . $request->input('mcontact') . ' ' . $request->input('gcontact');
        $studentForm->parents_contact = $parentContact;

        // Combine guardian's name if all parts are present
        if ($request->filled(['glast', 'gfirst', 'gmiddle'])) {
            $guardianName = $request->input('glast') . ' ' . $request->input('gfirst') . ' ' . $request->input('gmiddle');
        } else {
            $guardianName = null;
        }

        // Combine parent's contact number if all parts are present
        if ($request->filled(['fcontact', 'mcontact'])) {
            $parentContact = $request->input('fcontact') . ' ' . $request->input('mcontact');
        } else {
            $parentContact = null;
        }

        // Assign values to the model
        $studentForm->legal_guardians_name = $guardianName;
        $studentForm->parents_contact = $parentContact;

        // Handle file uploads
        if ($request->hasFile('card_of_previous_grade')) {
            $cardOfPreviousGradePath = $request->file('card_of_previous_grade')->store('cardOfPreviousGrade');
            $studentForm->card_of_previous_grade = $cardOfPreviousGradePath;
        }

        if ($request->hasFile('birth_certificate')) {
            $birthCertificatePath = $request->file('birth_certificate')->store('birthCertificate');
            $studentForm->birth_certificate = $birthCertificatePath;
        }


        // If the user is not a returnee, set returnee-specific fields to null
        if ($request->input('returnee') === 'No') {
            $studentForm->last_school = null;
            $studentForm->last_level = null;
            $studentForm->last_sy = null;
            $studentForm->last_school_id = null;
        } else {
            // If the user is a returnee, assign values for returnee-specific fields
            $studentForm->last_school = $request->input('last_school');
            $studentForm->last_level = $request->input('last_level');
            $studentForm->last_sy = $request->input('last_sy');
            $studentForm->last_school_id = $request->input('last_schoolId');
        }

        // Save the student form data to the database
        $studentForm->save();

        // Return a response (e.g., success or error message)
        return response()->json(['message' => 'Form submitted successfully']);
    }
}

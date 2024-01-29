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

        $studentForm->status = 'new';

        // Set enrollmentStatus to 'pending'
        $studentForm->enrollmentStatus = 'pending';

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

         // Store submission status flag in session
         session(['data_submitted' => true]);

         // Return response indicating submission status
         return response()->json(['data_submitted' => true]);

        return response()->json(['message' => 'Form submitted successfully'], 201);
    }

    public function trySearch(Request $request)
    {
        $lrn = $request->input('lrn');
        $student = StudentForm::where('lrn', $lrn)->first();

        if ($student) {
            return response()->json(['success' => true, 'student' => $student]);
        } else {
            return response()->json(['success' => false, 'message' => 'Student not found']);
        }
    }

    public function tryUpdate(Request $request)
    {
        $lrn = $request->input('lrn');
        $gradeLevel = $request->input('grade_level');
        $returnee = $request->input('returnee');
        $age = $request->input('age');
        $beneficiary = $request->input('beneficiary');
        $lwd = $request->input('lwd');
        $currentHouseNo = $request->input('currentHouseNo');
        $currentSitioStreet = $request->input('currentSitioStreet');
        $currentBarangay = $request->input('currentBarangay');
        $currentMunicipalityCity = $request->input('currentMunicipalityCity');
        $currentProvince = $request->input('currentProvince');
        $currentCountry = $request->input('currentCountry');
        $permanentHouseNo = $request->input('permanentHouseNo');
        $permanentSitioStreet = $request->input('permanentSitioStreet');
        $permanentBarangay = $request->input('permanentBarangay');
        $permanentMunicipalityCity = $request->input('permanentMunicipalityCity');
        $permanentProvince = $request->input('permanentProvince');
        $permanentCountry = $request->input('permanentCountry');
        $fcontact = $request->input('fcontact');
        $mcontact = $request->input('mcontact');
        $glast = $request->input('glast');
        $gfirst = $request->input('gfirst');
        $gmiddle = $request->input('gmiddle');
        $gcontact = $request->input('gcontact');
        $lastSchool = $request->input('last_school');
        $lastLevel = $request->input('last_level');
        $lastSY = $request->input('last_sy');
        $lastSchoolId = $request->input('last_schoolId');
    
        $student = StudentForm::where('lrn', $lrn)->first();
        $student->grade_level = $gradeLevel;
        $student->returnee = $returnee;
        $student->age = $age;
        $student->beneficiary = $beneficiary;
        $student->lwd = $lwd;
        $student->currentHouseNo = $currentHouseNo;
        $student->currentSitioStreet = $currentSitioStreet;
        $student->currentBarangay = $currentBarangay;
        $student->currentMunicipalityCity = $currentMunicipalityCity;
        $student->currentProvince = $currentProvince;
        $student->currentCountry = $currentCountry;
        $student->permanentHouseNo = $permanentHouseNo;
        $student->permanentSitioStreet = $permanentSitioStreet;
        $student->permanentBarangay = $permanentBarangay;
        $student->permanentMunicipalityCity = $permanentMunicipalityCity;
        $student->permanentProvince = $permanentProvince;
        $student->permanentCountry = $permanentCountry;
        $student->fcontact = $fcontact;
        $student->mcontact = $mcontact;
        $student->glast = $glast;
        $student->gfirst = $gfirst;
        $student->gmiddle = $gmiddle;
        $student->gcontact = $gcontact;
        $student->last_school_attended = $lastSchool;
        $student->last_grade_level_completed = $lastLevel;
        $student->last_school_year_completed = $lastSY;
        $student->school_id = $lastSchoolId;

        if ($student) {
            // Update existing student data
            $student->fill($request->all());
            $student->status = 'old'; // Set status to 'old' for updated data
            $student->enrollmentStatus = 'pending';
        }
    
        $student->save();
    
        return response()->json(['success' => true]);
    }

}


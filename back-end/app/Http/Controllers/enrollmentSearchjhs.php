<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentForm;

class enrollmentSearchjhs extends Controller
{
    public function search(Request $request)
    {
        // Get the learner's reference number from the request
        $lrn = $request->input('lrn');

        // Perform the search in the database
        $enrollment = Enrollment::where('lrn', $lrn)->first();

        // Return the search results (you can customize this based on your database structure)
        return response()->json($enrollment);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class EnrollmentLimitController extends Controller
{
    public function submitData(Request $request)
    {
        // Process submission or update
        
        // Store submission status flag in session
        session(['data_submitted' => true]);

        // Redirect user to dashboard or any other page
        return redirect()->route('user_dashboard');
    }
    
}

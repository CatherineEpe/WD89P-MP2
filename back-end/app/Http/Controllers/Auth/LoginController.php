<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            
            // Determine user role and prepare the response
            $response = [
                'message' => 'Login successful.',
                'role' => $user->role,
            ];

            return response()->json($response, 200);
        }

        // Login failed
        return response()->json(['error' => 'Invalid credentials.'], 401);


    }

    
}

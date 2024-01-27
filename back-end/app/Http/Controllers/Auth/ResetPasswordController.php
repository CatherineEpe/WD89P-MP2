<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    public function resetPassword(Request $request)
    {
        $lrn = $request->lrn;

        $user = User::where('lrn', $lrn)->first();

        if ($user) {
            // Generate a temporary password (you can customize this)
            $temporaryPassword = $this->generateTemporaryPassword(); // You need to define this function

            // Update the user's password with the temporary password
            $user->password = Hash::make($temporaryPassword);
            $user->save();

            // Send the temporary password to the user through another channel (e.g., email or SMS)

            return response()->json(['message' => 'Password reset initiated successfully. Check your email for further instructions.']);
        } else {
            return response()->json(['error' => 'User with provided Learner\'s Reference Number not found.'], 404);
        }
    }

    public function updatePassword(Request $request)
    {
        // Validate the request data (e.g., new password)
        $request->validate([
            'lrn' => 'required',
            'newPassword' => 'required|min:8', // Add any additional validation rules as needed
        ]);

        $lrn = $request->lrn;
        $newPassword = $request->newPassword;

        // Find the user by LRN
        $user = User::where('lrn', $lrn)->first();

        if ($user) {
            // Update the user's password with the new password
            $user->password = Hash::make($newPassword);
            $user->save();

            return response()->json(['message' => 'Password updated successfully.']);
        } else {
            return response()->json(['error' => 'User with provided Learner\'s Reference Number not found.'], 404);
        }
    }

    // You can define the generateTemporaryPassword function here or in a separate helper file
    // Remember to import any necessary libraries for password generation
    private function generateTemporaryPassword() {
        // Your password generation logic here
    }
}

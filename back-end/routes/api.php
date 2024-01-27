<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FacultyStaffController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Models\FacultyStaff;
use Illuminate\http\Request;
use Illuminate\Support\Facades\Route;


// Other API routes...




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Login
Route::post('/login', [LoginController::class, 'login']);
// Registration
Route::post('/register', [RegisterController::class, 'register']);


// Display the list of all faculty and staff
Route::get('/all-faculty-staff', [FacultyStaffController::class, 'getAllFacultyStaff']);
// Store (Add) new faculty or staff
Route::post('/add-faculty', [FacultyStaffController::class, 'store']);

//Editing Faculty And Staff Data
Route::get('/faculty-staff/{id}', [FacultyStaffController::class, 'edit']);
Route::put('/faculty-staff/{id}', [FacultyStaffController::class, 'update']);

// Add a route to handle faculty and staff deletion
Route::delete('/faculty-staff/{id}', [FacultyStaffController::class, 'delete']);
Route::get('/delete-faculty-staff/{id}', [FacultyStaffController::class, 'edit']);

// Enrollment Form
Route::post('/submit-form', [FormController::class, 'submitForm']);
Route::post('/submit-form', [FormController::class, 'submitForm']);
Route::get('/search', [FormController::class, 'search']);
Route::get('/edit-old/{id}', [FormController::class, 'editOld']);
Route::put('/edit-old/{id}', [FormController::class, 'updateOld']);


// Route to initiate the password reset process
Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword']);
// Route to update the password
Route::post('/update-password', [ResetPasswordController::class, 'updatePassword']);


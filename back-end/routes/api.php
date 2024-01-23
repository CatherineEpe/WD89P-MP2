<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FacultyStaffController;
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


// Update (Edit) faculty or staff
Route::put('/update-faculty-staff/{id}', [FacultyStaffController::class, 'update']);

// Delete faculty or staff
Route::delete('/delete-faculty-staff/{id}', [FacultyStaffController::class, 'destroy']);



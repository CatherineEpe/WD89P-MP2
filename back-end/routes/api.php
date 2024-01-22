<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FacultyAndStaffController;
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

// Fetch all faculties and staffs
Route::get('/api/faculty-and-staff', [FacultyAndStaffController::class, 'index']);

// Add new faculty
Route::post('/api/faculty-and-staff', [FacultyAndStaffController::class, 'store']);

// Update faculty details
Route::put('/api/faculty-and-staff/{id}', [FacultyAndStaffController::class, 'update']);

// Delete faculty
Route::delete('/api/faculty-and-staff/{id}', [FacultyAndStaffController::class, 'destroy']);

// For Grid View
Route::get('/faculties-and-staffs', 'FacultyAndStaffController@showFacultiesAndStaffs');


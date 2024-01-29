<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FacultyStaffController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FormControllershs;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\EnrollmentController;
use App\Models\FacultyStaff;
use Illuminate\http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
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

// Enrollment Form JHS
Route::post('/submit-form', [FormController::class, 'submitForm']);
Route::post('/search', [FormController::class, 'trySearch']);
Route::post('/update', [FormController::class, 'tryUpdate']);
Route::post('/update-form-status', [FormController::class, 'updateFormStatus']);


// Enrollment Form SHS
Route::post('/submit-shs', [FormControllershs::class, 'StudentFormshs']);
Route::post('/search-shs', [FormControllershs::class, 'trySearchshs']);
Route::post('/update-shs', [FormControllershs::class, 'tryUpdateshs']);
Route::post('/update-form-status-shs', [FormControllershs::class, 'updateFormStatus']);


// Route to initiate the password reset process and update
Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword']);
Route::post('/update-password', [ResetPasswordController::class, 'updatePassword']);

Route::get('/get-pending-enrollments', [EnrollmentController::class, 'getpendingEnrollments']);



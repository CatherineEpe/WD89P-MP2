<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FacultyStaffController;
use App\Http\Controllers\FacultyStaffAdminController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FormControllershs;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\ConfirmedEnrollmentController;
use App\Http\Controllers\EnrollmentControllershs;
use App\Http\Controllers\ConfirmedEnrollmentControllershs;
use App\Http\Controllers\EnrollmentLimitController;
use App\Http\Controllers\JhsDashboardController;
use App\Http\Controllers\ShsDashboardController;
use App\Http\Middleware\SubmissionCheckMiddleware;


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

Route::group(['middleware' => 'submission.check'], function () {});
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



Route::get('/admin_message', [EnrollmentLimitController::class, 'index'])->name('admin_message');


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
Route::get('/get-teachers-staff', [FacultyStaffAdminController::class, 'getTeachersStaff']);



// Route to initiate the password reset process and update
Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword']);
Route::post('/update-password', [ResetPasswordController::class, 'updatePassword']);

Route::get('/get-pending-enrollments', [EnrollmentController::class, 'getpendingEnrollments']);
Route::post('/confirm-enrollment', [EnrollmentController::class, 'confirmEnrollment']);
Route::get('/get-confirmed-enrollments', [ConfirmedEnrollmentController::class, 'getConfirmedEnrollments']);

Route::get('/get-pending-enrollments-shs', [EnrollmentController::class, 'getpendingEnrollments']);
Route::post('/confirm-enrollment-shs', [EnrollmentControllershs::class, 'confirmEnrollmentshs']);
Route::get('/get-confirmed-enrollments-shs', [ConfirmedEnrollmentControllershs::class, 'getConfirmedEnrollmentsshs']);

Route::get('/get-confirmed-enrollments', [JhsDashboardController::class, 'getConfirmedEnrollments']);
Route::post('/confirm-enrollment', [JhsDashboardController::class, 'confirmEnrollment']);
Route::get('/get-teachers-staffjhs', [JhsDashboardController::class, 'getTeachersStaffjhs']);

Route::get('/get-confirmed-enrollments-shs', [ShsDashboardController::class, 'getConfirmedEnrollments']);
Route::post('/confirm-enrollment-shs', [ShsDashboardController::class, 'confirmEnrollment']);
Route::get('/get-teachers-staff-shs', [ShsDashboardController::class, 'getTeachersStaff']);
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacultyStaff extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'gender',
        'date_of_birth',
        'contact_num',
        'email_add',
        'education',
        'specialization',
        'date_appointment',
        'employee_num',
        'department',
        'position',
        'designation',
        'advisory',
    ];
}

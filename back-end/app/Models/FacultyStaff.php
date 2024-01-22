<?php

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacultyAndStaff extends Model
{
    use HasFactory;

    protected $fillable = [
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

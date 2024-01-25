<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentForm extends Model
{
    protected $fillable = [
        'lrn',
        'returnee',
        'Name',
        'gender',
        'birthdate',
        'place_birth',
        'age',
        'm_tongue',
        'ip_member',
        'four_ps',
        'lwd',
        'current_address',
        'permanent_address',
        'fathers_name',
        'mothers_maiden_name',
        'legal_guardians_name',
        'parents_contact',
        'last_school_attended',
        'last_grade_level_completed',
        'last_school_year_completed',
        'school_id',
        'card_of_previous_grade',
        'birth_certificate',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentForm extends Model
{
    protected $fillable = [
        'lrn',
        'grade_level',
        'returnee',
        'name',
        'gender',
        'birthdate',
        'place_of_birth',
        'age',
        'mother_tongue',
        'ip_member',
        'beneficiary',
        'lwd',
        'currentHouseNo',
        'currentSitioStreet',
        'currentBarangay',
        'currentMunicipalityCity',
        'currentProvince',
        'currentCountry',
        'permanentHouseNo',
        'permanentSitioStreet',
        'permanentBarangay',
        'permanentMunicipalityCity',
        'permanentProvince',
        'permanentCountry',
        'flast',
        'ffirst',
        'fmiddle',
        'fcontact',
        'mlast',
        'mfirst',
        'mmiddle',
        'mcontact',
        'glast',
        'gfirst',
        'gmiddle',
        'gcontact',
        'last_school_attended',
        'last_grade_level_completed',
        'last_school_year_completed',
        'school_id',
        'card_of_previous_grade', 
        'birth_certificate', 
    ];
}

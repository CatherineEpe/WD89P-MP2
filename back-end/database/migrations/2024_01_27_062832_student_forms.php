<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
      /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_forms', function (Blueprint $table) {
            $table->id();
            $table->string('lrn');
            $table->string('grade_level');
            $table->string('returnee');
            $table->string('name');
            $table->string('gender');
            $table->date('birthdate');
            $table->string('place_of_birth');
            $table->integer('age');
            $table->string('mother_tongue');
            $table->string('ip_member');
            $table->string('beneficiary');
            $table->string('lwd');
            $table->string('currentHouseNo');
            $table->string('currentSitioStreet');
            $table->string('currentBarangay');
            $table->string('currentMunicipalityCity');
            $table->string('currentProvince');
            $table->string('currentCountry');
            $table->string('permanentHouseNo');
            $table->string('permanentSitioStreet');
            $table->string('permanentBarangay');
            $table->string('permanentMunicipalityCity');
            $table->string('permanentProvince');
            $table->string('permanentCountry');
            $table->string('fathers_name')->nullable();
            $table->string('fcontact')->nullable();
            $table->string('mothers_maiden_name')->nullable();
            $table->string('mcontact')->nullable();
            $table->string('guardians_name')->nullable();
            $table->string('gcontact')->nullable();
            $table->string('last_school_attended')->nullable();
            $table->string('last_grade_level_completed')->nullable();
            $table->string('last_school_year_completed')->nullable();
            $table->string('school_id')->nullable();
            $table->string('card_of_previous_grade');
            $table->string('birth_certificate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_forms');
    }
};

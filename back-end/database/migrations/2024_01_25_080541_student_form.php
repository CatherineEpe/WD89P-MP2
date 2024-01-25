<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('student_form', function (Blueprint $table) {
            $table->id();
            $table->string('lrn');
            $table->string('returnee');
            $table->string('Name');
            $table->string('extension')->nullable();
            $table->string('gender');
            $table->date('birthdate');
            $table->string('place_of_birth');
            $table->integer('age');
            $table->string('mother_tongue');
            $table->string('ip_member');
            $table->string('four_ps');
            $table->string('lwd');
            $table->string('current_address');
            $table->string('permanent_address');
            $table->string('fathers_name');
            $table->string('mothers_maiden_name');
            $table->string('legal_guardians_name');
            $table->string('parents_contact');
            $table->string('last_school_attended')->nullable();
            $table->string('last_grade_level_completed')->nullable();
            $table->string('last_school_year_completed')->nullable();
            $table->string('school_id')->nullable();
            $table->string('card_of_previous_grade')->nullable();
            $table->string('birth_certificate')->nullable();
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
        Schema::dropIfExists('student_form');
    }
};

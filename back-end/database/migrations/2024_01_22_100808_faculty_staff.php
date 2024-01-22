<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('faculty_staff', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('gender');
            $table->date('date_of_birth');
            $table->string('contact_num');
            $table->string('email_add');
            $table->string('education');
            $table->string('specialization');
            $table->date('date_appointment');
            $table->string('employee_num');
            $table->string('department');
            $table->string('position');
            $table->string('designation');
            $table->string('advisory');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('faculty_staff');
    }
};

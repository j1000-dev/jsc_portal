<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_info', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('user_id')->unique();
            $table->index('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->text('image_path');
            $table->string('first_name');
            $table->string('last_name');
            $table->text('address');
            $table->string('city');
            $table->string('province');
            $table->string('postal_code');
            $table->dateTime('dob');
            $table->json('sport_options');
            $table->string('school_name');
            $table->string('year_of_study');
            $table->text('program')->nullable();
            $table->text('faculty')->nullable();
            $table->text('biography')->nullable();
            $table->string('one_line_bio', 50);
            $table->string('university_bio_link')->nullable();
            $table->string('cellphone_number');
            $table->string('emergency_contact_number');
            $table->boolean('has_car');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_info');
    }
};

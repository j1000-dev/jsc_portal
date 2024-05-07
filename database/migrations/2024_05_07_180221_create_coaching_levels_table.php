<?php

use App\Models\CoachingLevel;
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
        Schema::create('coaching_levels', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('coaching_level');
            $table->string('description');
            $table->decimal('rate');
            $table->decimal('travel');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coaching_levels');
    }
};

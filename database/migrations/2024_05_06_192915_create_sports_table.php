<?php

use App\Models\Sports;
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
        Schema::create('sports', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });
        $sports = ['Sprints', 'Throws', 'Long Jump', 'High Jump', 'Cross Country', 'Basketball', 'Soccer', 'Ultimate Frisbee'];
        foreach ($sports as $sport) {
            Sports::create([
                'name' => $sport
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sports');
    }
};

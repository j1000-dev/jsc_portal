<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(SeasonSeeder::class);
        $this->call(SportSeeder::class);
        $this->call(VenueSeeder::class);
        $this->call(CoachingLevelSeeder::class);
    }
}

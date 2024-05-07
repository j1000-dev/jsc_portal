<?php

namespace Database\Seeders;

use App\Models\CoachingLevel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CoachingLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $coachingLvl = new CoachingLevel();
        foreach (config('seeder.coaching_level') as $coachData) {
            if (!CoachingLevel::where('coaching_level', $coachData['coaching_level'])->first()) {
                $coachingLvl->create([
                    'coaching_level' => $coachData['coaching_level'],
                    'description' => $coachData['description'],
                    'rate' => $coachData['rate'],
                    'travel' => $coachData['travel']
                ]);
            }
        }
    }
}

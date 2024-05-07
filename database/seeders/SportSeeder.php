<?php

namespace Database\Seeders;

use App\Models\Sport;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sport = new Sport();
        foreach (config('seeder.sports') as $sportData) {
            if (!Sport::where('name', $sportData['name'])->first()) {
                $sport->create([
                    'name' => $sportData['name'],
                ]);
            }
        }
    }
}

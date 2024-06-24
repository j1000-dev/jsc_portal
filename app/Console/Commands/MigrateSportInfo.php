<?php

namespace App\Console\Commands;

use App\Models\Sport;
use App\Models\UserInfo;
use App\Models\User;
use Illuminate\Console\Command;

class MigrateSportInfo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate-sport-info';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sports = [
            1 => 'Basketball',
            2 => 'Sprints',
            3 => 'Throws',
            4 => 'Long Jump',
            5 => 'High Jump',
            6 => 'Ultimate Frisbee',
            7 => 'Cross Country',
            8 => 'Soccer'
        ];
        $fileName = 'coach-sports.csv';
        $file = fopen(storage_path("app/data/$fileName"), "r");
        $headers = fgetcsv($file);
        $allSports = Sport::pluck('name')->toArray();
        while ($row = fgetcsv($file)) {
            $userId = User::where('email', $row[1])->value('id');
            $sportOptions = [];
            foreach (explode(',',$row[0]) as $s) {
                $sportOptions[] = $sports[$s];
            }
            $selectedSports = array_fill_keys($sportOptions, true);
            $unselectedSports = array_fill_keys(array_diff($allSports, $sportOptions), false);
            $data = array_merge($selectedSports, $unselectedSports);
            UserInfo::where('user_id', $userId)->update(
                ['sport_options' => json_encode($data)]
            );
        }

    }
}

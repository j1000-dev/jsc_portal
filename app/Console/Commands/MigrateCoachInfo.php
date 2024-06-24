<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\UserInfo;
use Carbon\Carbon;
use Illuminate\Console\Command;

class MigrateCoachInfo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate-coach-info';

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
        $coachInfo = new UserInfo();
        $fileName = 'coach-information.csv';
        $file = fopen(storage_path("app/data/$fileName"), 'r');
        $headers = fgetcsv($file);
        while ($row = fgetcsv($file)) {
            $id = User::where('email', $row[3])->value('id');
            $coachInfo->updateOrCreate([
                'user_id' => $id,
                'image_path' => $row[10],
                'first_name' => $row[1],
                'last_name' => $row[2],
                'address' => $row[18],
                'city' => $row[20],
                'province' => 'BC',
                'postal_code' => $row[19],
                'dob' => Carbon::parse($row[15]),
                'sport_options' => [],
                'school_name' => $row[9],
                'year_of_study' => $row[5],
                'faculty' => $row[7],
                'program' => $row[6],
                'biography' => $row[8],
                'one_line_bio' => '',
                'university_bio_link' => $row[16],
                'cellphone_number' => $row[11],
                'emergency_contact_number' => $row[12],
                'has_car' => $row[14]
            ]);
        }
    }
}

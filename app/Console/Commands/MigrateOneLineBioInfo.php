<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\UserInfo;
use Illuminate\Console\Command;

class MigrateOneLineBioInfo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate-one-line-bio-info';

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
        $fileName = 'coach-introduction.csv';
        $file = fopen(storage_path("app/data/$fileName"), 'r');
        $headers = fgetcsv($file);
        while ($row = fgetcsv($file)) {
            $userId = User::where('email', $row[1])->value('id');
            UserInfo::where('user_id', $userId)->update([
                "one_line_bio" => $row[0]
            ]);
        }
    }
}

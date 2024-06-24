<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class MigrateCoaches extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate-coaches';

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
        $coaches = new User();
        $fileName = 'coach.csv';
        $file = fopen(storage_path("app/data/$fileName"), 'r');
        $headers = fgetcsv($file);
        while ($row = fgetcsv($file)) {
            if (!User::where('email', $row[3])) {
                $coaches->create([
                    'name' => trim($row[1]) . " " . trim($row[2]),
                    'email' => $row[3],
                    'password' => bcrypt($row[4]),
                    'registered' => true,
                    'coaching_lvl' => (int)$row[6],
                    'is_validated' => boolval($row[7])
                ]);
            }
        }
    }
}

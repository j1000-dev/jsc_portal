<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
        foreach (config('seeder.users') as $defaultUser) {
            if (!User::where('email', $defaultUser['email'])->first()) {
                $user->create([
                    'name' => $defaultUser['name'],
                    'email' => $defaultUser['email'],
                    'password' => bcrypt($defaultUser['password']),
                    'remember_token' => null
                ]);
            }
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (config('seeder.users') as $u) {
            $user = User::where('email', $u['email'])->first();
            if ($user) {
                $user->assignRole($u['roles']);
            }
        }
    }
}

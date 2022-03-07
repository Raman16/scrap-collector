<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [[
            'first_name'             => 'Raman',
            'last_name'              => 'Sai',
            'username'               => 'bandari raman',
            'email'                  => 'admin@scrap_bees2022.com',
            'password'               =>  bcrypt('Admin@123'),
            'country_code'           => '+91',
            'phone_number'           => '9886426568',
            'phone_number_with_code' => '+919886426568',
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s')
        ]];
        foreach ($users as $user) {
            User::create($user);
        }
    }
}

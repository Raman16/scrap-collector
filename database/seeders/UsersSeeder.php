<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            'first_name'             => 'EW-POT',
            'last_name'              => 'Admin',
            'username'               => 'Admin',
            'email'                  => 'admin.ewpot@gmail.com',
            'password'               =>  bcrypt('Admin@2022'),
            'country_code'           => '+91',
            'phone_number'           => '8985542754',
            'phone_number_with_code' => '+918985542754',
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s')
        ];
        
        $userD = User::create($users);

        DB::table('user_roles')->truncate();
        DB::table('user_roles')->insert([
            'user_id'       => $userD->id,
            'role_id'       => 1,
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s')
        ]);


        $user2 = [
            'first_name'             => 'Raman',
            'last_name'              => 'B',
            'username'               => 'bandariraman',
            'email'                  => 'raman.acube@gmail.com',
            'password'               =>  bcrypt('Admin@123'),
            'country_code'           => '+91',
            'phone_number'           => '9989615030',
            'phone_number_with_code' => '+919989615030',
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s')
        ];
        $userD2 = User::create($user2);
        DB::table('user_roles')->insert([
            'user_id'       => $userD2->id,
            'role_id'       => 2,
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s')
        ]);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}9886426568

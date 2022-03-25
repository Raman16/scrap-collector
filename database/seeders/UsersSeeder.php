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
            'first_name'             => 'Raman',
            'last_name'              => 'Sai',
            'username'               => 'bandari raman',
            'email'                  => 'admin@scrapbees2022.com',
            'password'               =>  bcrypt('Admin@123'),
            'country_code'           => '+91',
            'phone_number'           => '9886426565',
            'phone_number_with_code' => '+919886426565',
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
            'first_name'             => 'Ragav',
            'last_name'              => 'R',
            'username'               => 'Ragav',
            'email'                  => 'user@userbee.com',
            'password'               =>  bcrypt('Admin@123'),
            'country_code'           => '+91',
            'phone_number'           => '9886426564',
            'phone_number_with_code' => '+919886426564',
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
}

<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\State;
use Illuminate\Database\Seeder;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country = Country::all();
        $states = [
            [
                'name'      => 'Andhra Pradesh',
                'country_id' => $country->random()->id
            ],
            [
                'name'    => 'Karnataka',
                'country_id' => $country->random()->id
            ],
            [
                'name'    => 'Tamil Nade',
                'country_id' => $country->random()->id
            ],
            [
                'name'    => 'Telangana',
                'country_id' => $country->random()->id
            ],
        ];
        foreach ($states as $state) {
            State::create($state);
        }
    }
}

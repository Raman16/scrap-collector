<?php

namespace Database\Seeders;

use App\Models\ScrapType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScrapTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        

        $scrap_types = [
            [
                'name' => 'Furniture',
                'description' => ''
            ],
            [
                'name' => 'Washers & Dyers',
                'description' => ''
            ],
            [
                'name' => 'Industrail & Factory Equipment',
                'description' => ''
            ],
            [
                'name' => "Electronis, TV's & Monitors",
                'description' => ''
            ],
            [
                'name' => "Junk Cars & Equipments",
                'description' => ''
            ],
            [
                'name' => "Scrap Tyres of All Size",
                'description' => ''
            ],
            [
                'name' => "Farm Equipments",
                'description' => ''
            ],
            [
                'name' => "Matresses & Box Springs",
                'description' => ''
            ],
            [
                'name' => "Paints, Solvent & Chemicals",
                'description' => ''
            ]
        ];

        foreach ($scrap_types as $type) {
            ScrapType::create($type);
        }
    }
}

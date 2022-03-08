<?php

namespace Database\Seeders;

use App\Models\MaterialType;
use Illuminate\Database\Seeder;

class MaterialTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        

        $material_types = [
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

        foreach ($material_types as $material) {
            MaterialType::create($material);
        }
    }
}

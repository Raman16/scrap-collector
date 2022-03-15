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
                'name' => 'Fridges, freezers and other cooling equipment',
                'description' => ''
            ],
            [
                'name' => 'Computers and telecommunications equipment',
                'description' => ''
            ],
            [
                'name' => 'Consumer electronic devices and solar panels',
                'description' => ''
            ],
            [
                'name' => "TVs, monitors and screens",
                'description' => ''
            ],
            [
                'name' => "LED bulbs",
                'description' => ''
            ],
            [
                'name' => "Vending machines",
                'description' => ''
            ]
        ];

        foreach ($material_types as $material) {
            MaterialType::create($material);
        }
    }
}

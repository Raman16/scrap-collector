<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MaterialTypeResource;
use App\Models\MaterialType;

class MaterialTypesController extends Controller
{

    public function index()
    {
        $types = MaterialType::all();
        return response()->json(
            [
                'material_types' => MaterialTypeResource::collection($types)
            ]
        );
    }
}

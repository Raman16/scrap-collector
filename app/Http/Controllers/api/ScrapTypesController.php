<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ScrapTypes;
use App\Models\ScrapType;
use Illuminate\Http\Request;

class ScrapTypesController extends Controller
{

    public function index()
    {
        $types = ScrapType::all();
        return response()->json(
            [
                'material_types' => ScrapTypes::collection($types)
            ]
        );
    }
}

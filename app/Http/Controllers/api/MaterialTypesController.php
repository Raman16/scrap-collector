<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MaterialTypeResource;
use App\Models\MaterialType;
use Illuminate\Http\Request;


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

    
    public function store(Request $request)
    {
        try{
            $type = MaterialType::create($request->all());
            return response()->json(
                [
                    'material_type' => new MaterialTypeResource($type),
                    'message'       => 'Created Successfully'
                ],201
            );
        }
        catch(Exception $e){
            return response()->json(
                [
                    'message'       => $e->getMessage()
                ],500
            );
        }
        
    }

    public function update(Request $request)
    {
        try{
            $type = MaterialType::where(['id'=>$request->id])->first();
            $type->update($request->all());
            return response()->json(
                [
                    'material_type' => new MaterialTypeResource($type),
                    'message'       => 'Update Successfully'
                ],201
            );
        }
        catch(Exception $e){
            return response()->json(
                [
                    'message'       => $e->getMessage()
                ],500
            );
        }
        
    }

    public function delete(Request $request)
    {
        try{
            $type = MaterialType::where(['id'=>$request->id])->first();
            $type->delete();
            return response()->json(
                [
                    'material_type' => new MaterialTypeResource($type),
                    'message'       => 'Deleted Successfully'
                ],201
            );
        }
        catch(Exception $e){
            return response()->json(
                [
                    'message'       => $e->getMessage()
                ],500
            );
        }
        
    }
}

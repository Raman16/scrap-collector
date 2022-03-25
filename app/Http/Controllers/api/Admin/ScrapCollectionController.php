<?php

namespace App\Http\Controllers\api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MaterialType;
use App\Models\User;

use App\Http\Resources\MaterialTypeResource;
use App\Models\ScrapCollection;
use App\Http\Resources\ScrapCollectionResource;
use App\Http\Resources\UsersScrapCollectionResource;

use Symfony\Component\HttpFoundation\Response;

class ScrapCollectionController extends Controller
{

    public function index()
    {

        $material_types = MaterialType::all();

        $pickup_agents = User::whereHas('roles', function($q) {
            $q->where('role_id', '=',3);
        })->where(['status'=>1])->get();
       
        
        return response()->json(
            [
                'material_types' => MaterialTypeResource::collection($material_types),
                'pickup_agents' => $pickup_agents,
                'booking_status'=>ScrapCollection::BOOKING_STATUS

            ],
            Response::HTTP_OK
        );
    }

    public function showAll($date)
    {
        $pickup_list = ScrapCollection::with(['address', 'bankDetail', 'materialType','image','agent','user'])
                           ->whereDate('pickup_date','=',date("Y-m-d",strtotime($date)))->get();

        return response()->json(
            [
                'pickup_list' => UsersScrapCollectionResource::collection($pickup_list) 
            ],
            Response::HTTP_OK
        );
    }

    public function changeStatus(Request $request)
    {

        try {

            $pickup_data = ScrapCollection::where(['id' => $request->pickup_id])
                ->with(['address', 'bankDetail', 'materialType','image','agent','user'])
                ->first();

            $pickup_data->update(['status' => ScrapCollection::BOOKING_STATUS[$request->status]]);


            return response()->json([
                'message' => 'Status Changed',
                'pickup' => new UsersScrapCollectionResource($pickup_data) 
            ], 201);
        } catch (Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function update(Request $request)
    {

        try {

            $pickup_data = ScrapCollection::where(['id' => $request->pickup_id])
                ->with(['address', 'bankDetail', 'materialType','image','agent','user'])
                ->first();

            $pickup_data->update($request->all());


            return response()->json([
                'message' => 'Update Success',
                'pickup' => new UsersScrapCollectionResource($pickup_data) 
            ], 201);
        } catch (Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
 
}

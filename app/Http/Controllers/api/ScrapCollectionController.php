<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ScrapCollectionRequest;
use App\Http\Resources\CountryStateResource;
use App\Http\Resources\MaterialTypeResource;
use App\Http\Resources\ScrapCollectionResource;
use App\Models\Country;
use App\Models\MaterialType;
use App\Models\ScrapCollection;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Ui\Presets\React;
use Symfony\Component\HttpFoundation\Response;

class ScrapCollectionController extends Controller
{

    public function index()
    {

        $material_types = MaterialType::all();
        $countries = Country::with(['state'])->get();
        // echo '<pre>';print_r($countries);die;

        return response()->json(
            [
                'material_types' => MaterialTypeResource::collection($material_types),
                'countries' => CountryStateResource::collection($countries)
            ]
        );
    }

    public function showAll()
    {
        $pickup_list = ScrapCollection::where(
            ['user_id' => auth()->user()->id]
        )->with(['address', 'bankDetail', 'materialType','image'])->get();

        return response()->json(
            [
                'pickup_list' => ScrapCollectionResource::collection($pickup_list)
            ],
            Response::HTTP_OK
        );
    }


    public function store(ScrapCollectionRequest $request)
    {

        $validated = $request->validated();

        try {
            DB::beginTransaction();
            $address = auth()->user()->address()->create(
                [
                    'address'           => $validated['address'],
                    'land_mark'         => $validated['land_mark'],
                    'country_id'        => $validated['country_id'],
                    'state_id'          => $validated['state_id'],
                    'city'              => $validated['city'],
                    'pincode'           => $validated['pincode'],
                    'address_type'      => $validated['address_type']
                ]
            );

            $bank = auth()->user()->bankDetail()->create(
                [
                    'bank_name'         => $validated['bank_name'],
                    'account_name'      => $validated['account_name'],
                    'account_no'        => $validated['account_no'],
                    'ifsc_code'         => $validated['ifsc_code'],
                    'branch'            => $validated['branch']
                ]
            );

            $scrap_collection =  auth()->user()->scrapCollection()->create(
                [
                    'material_type_id'  => $validated['material_type_id'],
                    'message'           => $validated['message'],
                    'pickup_date'       => date('Y-m-d H:m:s', strtotime($validated['pickup_date'])),
                    'address_id'        => $address->id,
                    'bank_id'           => $bank->id,
                    'latitude'          => $validated['latitude'],
                    'longitude'         => $validated['longitude'],

                    // 'status'            => ScrapCollection::BOOKING_STATUS['CREATED']
                ]
            );
           

            $pickup_list = ScrapCollection::where(['id' => $scrap_collection->id])
                ->with(['address', 'bankDetail'])
                ->first();

            DB::commit();

            return response()->json(
                [
                    'message' => 'Booking Created to Pickup the Scrap',
                    'pickup_list' => new ScrapCollectionResource($pickup_list)
                ],
                Response::HTTP_CREATED
            );
        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_EXPECTATION_FAILED);
        }
    }


    public function show($pickup)
    {

        try {

            $pickup_list = ScrapCollection::where(['id' => $pickup])
                ->with(['address', 'bankDetail', 'materialType'])
                ->first();

            return response()->json([
                'pickup' => new ScrapCollectionResource($pickup_list)
            ], 201);
        } catch (Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function recentPickup()
    {

        try {
            $pickup_list = ScrapCollection::where(
                ['user_id' => auth()->user()->id]
            )->take(5) //take first five rows
                ->orderBy('created_at', 'desc')
                ->get();

            return response()->json(
                [
                    'pickup_list' => ScrapCollectionResource::collection($pickup_list)
                ],
                Response::HTTP_OK
            );
        } catch (Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function changeStatus(Request $request)
    {

        try {

            $request->validate([
                'pickup_id' => 'required',
                'status'    => 'required',
            ]);

            $pickup_data = ScrapCollection::where(['id' => $request->pickup_id])
                ->with(['address', 'bankDetail', 'materialType'])
                ->first();

            $pickup_data->update(['status' => $request->status]);


            return response()->json([
                'message' => 'Status Changed',
                'pickup' => new ScrapCollectionResource($pickup_data)
            ], 201);
        } catch (Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
}

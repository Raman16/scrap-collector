<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ScrapCollectionRequest;
use App\Http\Resources\ScrapCollectionResource;
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
        $pickup_list = ScrapCollection::where(
            ['user_id' => auth()->user()->id]
        )
            ->get();

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
                    // 'status'            => ScrapCollection::BOOKING_STATUS['CREATED']
                ]
            );

            $pickup_list = ScrapCollection::findOrFail(['id' => $scrap_collection->id])->first();

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


    public function show(ScrapCollection $pickup){
        try {
            return response()->json([
                'pickup' => new ScrapCollectionResource($pickup)
            ], 201);
        } catch (Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function cancelPickup(ScrapCollection $pickup)
    {

        try {
            $pickup->update(['status' => ScrapCollection::BOOKING_STATUS['CANCELLED']]);
            return response()->json([
                'message' => 'Status Changed'
            ], 201);
        } catch (Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
}

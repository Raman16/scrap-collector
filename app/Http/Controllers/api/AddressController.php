<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddressRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use function GuzzleHttp\Promise\all;

class AddressController extends Controller
{
    public function storeD(AddressRequest $request)
    {
        print_r($request->all());die;

        // $validated = $request->validated();
        // echo '<pre>';
        // print_r($validated);
        die;
        // $address = auth()->user()->address()->create($validated);
        // return response()->json(
        //     [
        //         'message' => 'Address Created',
        //         'address' => $address
        //     ],
        //     Response::HTTP_CREATED
        // );
    }
}

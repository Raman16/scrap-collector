<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ScrapCollectionController extends Controller
{

    public function store(Request $request)
    {
        echo '<pre>';
        print_r($request->all());
        $data = $request->all();
        $address = auth()->user()->address()->create(
            [
                'address'      => $data['address'],
                'land_mark'    => $data['land_mark'],
                'country_id'   => $data['country_id'],
                'state_id'     => $data['state_id'],
                'city'         => $data['city'],
                'pincode'      => $data['pincode'],
                'address_type' => $data['address_type']
            ]
        );

        $bank = auth()->user()->bank_detail()->create(
            [
                'bank_name'      => $data['bank_name'],
                'account_name'   => $data['account_name'],
                'account_no'     => $data['account_no'],
                'ifsc_code'      => $data['ifsc_code'],
                'branch'         => $data['branch']
            ]
        );

        die;
    }
}

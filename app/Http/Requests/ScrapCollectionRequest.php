<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScrapCollectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'material_type_id'  => 'required',
            'message'           => 'required',
            'pickup_date'       => 'required',
            'address'           => 'required|string',
            'land_mark'         => 'required|string',
            'latitude'          => 'required',
            'longitude'         => 'required',
            'country_id'        => 'required',
            'state_id'          => 'required',
            'city'              => 'required',
            'pincode'           => 'required',
            'address_type'      => 'required',
            'bank_name'         => 'required',
            'account_name'      => 'required',
            'account_no'        => 'required',
            'ifsc_code'         => 'required',
            'branch'            => 'required'
        ];
    }
}

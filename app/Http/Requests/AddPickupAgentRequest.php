<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddPickupAgentRequest extends FormRequest
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
    public function prepareForValidation()
    {
        $this->merge(['phone_number_with_code' => $this->request->get('country_code') .
            $this->request->get('phone_number')]);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {


        return [
            'first_name'                => 'required',
            'last_name'                 => 'required',
            'username'                  => 'required',
            'email'                     => 'string|max:255|unique:users',
            'country_code'              => 'required',
            'phone_number'              => 'required|digits:10',
            'phone_number_with_code'    => 'required|string|unique:users',
            'password'                  => 'required|string|min:6',
            'device_name'               => 'required',
            'device_id'                 => 'required',
            'device_token'              => 'required',
            'device_type'               => ['required', 'in:1,2'],
        ];
    }
}

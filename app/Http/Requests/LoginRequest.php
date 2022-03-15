<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'country_code'              => 'required',
            'phone_number'              => 'required|digits:10',
            'phone_number_with_code'    => 'required|string',
            'password'                  => 'required',
            // 'otp'                       => 'required|digits:6',
            'device_name'               => 'required',
            'device_id'                 => 'required',
            'device_token'              => 'required',
            'device_type'               => ['required', 'in:1,2'],
        ];
    }
}

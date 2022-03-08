<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ScrapCollectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        
        $result = [
            'pick_id'             => $this->id,
            'material_type_id'    => $this->material_type_id,
            'message'             => $this->message,
            'pickup_date'         => $this->pickup_date,
            //Address
            'address_id'          => $this->address_id,
            'address'             => $this->address->address,
            'land_mark'           => $this->address->land_mark,
            'city'                => $this->address->city,
            'country_id'          => $this->address->country_id,
            'state_id'            => $this->address->state_id,
            'pincode'             => $this->address->pincode,
            'address_type'        => $this->address->address_type,
            //Bank 

            'bank_id'             => $this->bank_id,
            'bank_name'           => $this->bankDetail->bank_name,
            'account_name'        => $this->bankDetail->account_name,
            'account_no'          => $this->bankDetail->account_no,
            'ifsc_code'           => $this->bankDetail->ifsc_code,
            'branch'              => $this->bankDetail->branch,
        ];
        return $result;
    }
}

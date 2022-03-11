<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AddressResource extends JsonResource
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
            'address_id'          => $this->id,
            'address'             => $this->address,
            'land_mark'           => $this->land_mark,
            'city'                => $this->city,
            'country_id'          => $this->country_id,
            'country'             => $this->country->name,
            'state'               => $this->state->name,
            'state_id'            => $this->state_id,
            'pincode'             => $this->pincode,
            'address_type'        => $this->address_type,
        ];
        return $result;
    }
}

<?php

namespace App\Http\Resources;

use App\Models\ScrapCollection;
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
            'material_name'       => $this->materialType->name,
            'message'             => $this->message,
            'pickup_date'         => $this->pickup_date,
            'status'              => array_search($this->status, ScrapCollection::BOOKING_STATUS),
            'status_id'           => (int)$this->status,
            'address'             => new AddressResource($this->whenLoaded('address')),
            'bank'                => new BankResource($this->whenLoaded('bankDetail')),
            'created_at'          => (string)$this->created_at
        ];
        return $result;
    }
}

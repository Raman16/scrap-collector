<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'id'                    => $this->id,
            'username'              => $this->username,
            'first_name'            => $this->first_name,
            'last_name'             => $this->last_name,
            'email'                 => $this->email,
            'emailVerifiedAt'       => $this->email_verified_at,
            'phone_number'          => $this->phone_number,
            'country_code'          => $this->country_code,
            'createdAt'             => $this->created_at->diffForHumans(),
        ];
        return $result;
    }
}

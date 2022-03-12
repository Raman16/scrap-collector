<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

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
            'image'                 => $this->image != null ? URL::to('/') . Storage::url('avatar/' . $this->image->name) : '',
            'country_code'          => $this->country_code,
            'role'                  => UserRoleResource::collection($this->roles),
            'createdAt'             => $this->created_at->diffForHumans(),
        ];
        return $result;
    }
}

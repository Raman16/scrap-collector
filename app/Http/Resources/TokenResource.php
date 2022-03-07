<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TokenResource extends JsonResource
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
            'id'                    => $this->accessToken->id,
            'name'                  => $this->accessToken->name,
            'plainTextToken'        => $this->plainTextToken
        ];
        return $result;
    }
}

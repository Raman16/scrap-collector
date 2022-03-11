<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BankResource extends JsonResource
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
            'bank_id'             => $this->id,
            'bank_name'           => $this->bank_name,
            'account_name'        => $this->account_name,
            'account_no'          => $this->account_no,
            'ifsc_code'           => $this->ifsc_code,
            'branch'              => $this->branch,
        ];
        return $result;    }
}

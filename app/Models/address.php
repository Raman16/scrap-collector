<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'pickup_date',
        'land_mark',
        'country_id',
        'state_id',
        'city',
        'pincode',
        'address_type'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}

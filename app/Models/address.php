<?php

namespace App\Models;

use App\Http\Traits\BelongsToUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    use BelongsToUser;

    protected $fillable = [
        'user_id',
        'address',
        'land_mark',
        'country_id',
        'state_id',
        'city',
        'pincode',
        'address_type'
    ];

    public function scrap_collection(){
        return $this->belongsTo(Address::class);
    }
    public function country(){
        return $this->belongsTo(Country::class);
    }
    public function state(){
        return $this->belongsTo(State::class);
    }
}

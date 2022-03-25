<?php

namespace App\Models;

use App\Http\Traits\BelongsToUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScrapCollection extends Model
{
    use HasFactory;
    use BelongsToUser;

    public const BOOKING_STATUS = [
        'Created',
        'Accepted',
        'InProgress',
        'Cancelled',
        'Completed'
    ];
    // public const BOOKING_STATUS = [
    //     'Created',
    //     'Accepted',
    //     'InProgress',
    //     'Cancelled',
    //     'Completed'  ];


   
    protected $fillable = [
        'material_type_id',
        'address',
        'message',
        'pickup_date',
        'status',
        'address_id',
        'bank_id',
        'pickup_agent_id',
        'latitude',
        'longitude'
    ];  

    public function agent()
    {
        return $this->belongsTo(User::class, 'pickup_agent_id', 'id');
    }
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
    public function address()
    {
        return $this->hasOne(Address::class, 'id', 'address_id');
    }
    public function bankDetail()
    {
        return $this->hasOne(BankDetail::class, 'id', 'bank_id');
    }
    public function materialType()
    {
        return $this->belongsTo(MaterialType::class, 'material_type_id', 'id');
    }
}

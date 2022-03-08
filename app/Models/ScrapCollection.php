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
        'CREATED' => 1,
        'INPROGESS' => 2,
        'CANCELLED' => 3,
        'COMPLETED' => 4
    ];

    protected $fillable = [
        'material_type_id',
        'address',
        'message',
        'pickup_date',
        'status',
        'address_id',
        'bank_id',
    ];
    public function address()
    {
        return $this->hasOne(Address::class,'id','address_id');
    }
    public function bankDetail()
    {
        return $this->hasOne(BankDetail::class,'id','bank_id');
    }
}

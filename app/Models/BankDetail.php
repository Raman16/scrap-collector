<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'bank_name',
        'account_no',
        'account_name',
        'ifsc_code',
        'branch'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

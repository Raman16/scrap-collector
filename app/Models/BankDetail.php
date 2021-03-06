<?php

namespace App\Models;

use App\Http\Traits\BelongsToUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankDetail extends Model
{
    use HasFactory;
    use BelongsToUser;
    protected $fillable = [
        'bank_name',
        'account_no',
        'account_name',
        'ifsc_code',
        'branch'
    ];

    public function scrapCollection()
    {
        return $this->belongsTo(ScrapCollection::class, 'bank_id', 'id');
    }
}

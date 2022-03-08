<?php

namespace App\Http\Traits;

use App\Models\User;

trait BelongsToUser
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

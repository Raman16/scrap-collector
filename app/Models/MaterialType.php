<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaterialType extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'description'
    ];

    public function scrapCollection()
    {
        return $this->hasMany(ScrapCollection::class, 'material_type_id', 'id');
    }
}

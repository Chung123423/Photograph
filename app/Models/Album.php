<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $table = 'albums';
    public $primaryKey = 'id';
    protected $fillable = [
        'name',
        'user_id',
    ];

    public function photos()
    {
        return $this->belongsToMany(Photo::class, 'album_photo');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Models;

class Photo extends Model
{
    use HasFactory;

    protected $table = 'photos';
    public $primaryKey = 'id';
    protected $keyType = 'string';
    
    protected $fillable = [
        'id',
        'title',
        'user_id',
        'ext',
    ];

    public function albums(){
        return $this->belongsToMany(Album::class, 'album_photo');
    }

}

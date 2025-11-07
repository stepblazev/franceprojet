<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Storage;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'disk',
        'name',
        'type',
        'size',
        'active',
    ];


    /**
     * Function return image url
     *
     * @return string
     */
    public function getImageAttribute(): string
    {
        return Storage::disk($this->disk)->url($this->name);
    }

    /**
     * Function return file url
     *
     * @return string
     */
    public function getUrlAttribute(): string
    {
        return Storage::disk($this->disk)->url($this->name);
    }
}

<?php

namespace App\Models;

use App\Models\Translations\LocaleModel;
use App\Models\Translations\ProjectTranslation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Storage;

/**
 * @property ProjectTranslation
 */
class Project extends LocaleModel
{
    use HasFactory;

    protected $fillable = [
        'photo_id',
        'is_active',
        'created_at',
        'public_at',
        'slug',
        'youtube'
    ];
    protected array $localisable = [
        'text',
        'title',
        'block_left',
        'block_right',
        'feedback',
        'feedback_author',
        'feedback_job',
    ];

    public function file(): HasOne
    {
        return $this->hasOne(File::class, 'id', 'photo_id');
    }

    public function getPhotoAttribute(): string
    {
        if (!is_null($this->photo_id) && Storage::disk($this->file->disk)->exists($this->file->name)) {
            return Storage::disk($this->file->disk)->url($this->file->name);
        }
        return asset('img/article.png');
    }
}

<?php

namespace App\Http\Resources;

use App\Models\Blog;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Blog */
class BlogListResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'slug' => $this->slug,
            'is_active' => $this->is_active,
            'public_at' => $this->public_at,
            'photo' => $this->photo,
            'title' => $this->title,
            'text' => $this->text
        ];
    }
}

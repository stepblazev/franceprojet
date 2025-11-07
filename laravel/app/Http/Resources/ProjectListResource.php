<?php

namespace App\Http\Resources;

use App\Models\Project;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Project */
class ProjectListResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'slug' => $this->slug,
            'public_at' => $this->public_at,
            'youtube' => $this->youtube,
            'photo' => $this->photo,
            'title' => $this->title,
            'text' => $this->text,
        ];
    }
}

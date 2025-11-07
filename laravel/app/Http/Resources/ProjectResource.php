<?php

namespace App\Http\Resources;

use App\Models\Project;
use Faker\Factory;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Project */
class ProjectResource extends JsonResource
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
            'block_left' => $this->block_left,
            'block_right' => $this->block_right,
            'projects' => ProjectListResource::collection(
                Project::query()
                    ->where('slug', '!=', $this->slug)
                    ->get()
            )
        ];
    }
}

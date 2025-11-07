<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectListResource;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        return ProjectListResource::collection(
            Project::query()
                ->where('is_active', true)
                ->get()
        );
    }
    public function show(
        string $slug
    )
    {
        return ProjectResource::make(
            Project::query()
                ->where('slug', $slug)
                ->where('is_active', true)
                ->firstOrFail(),
        );
    }
}

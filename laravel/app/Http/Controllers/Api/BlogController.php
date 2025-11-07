<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogListResource;
use App\Http\Resources\BlogResource;
use App\Models\Article;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        return BlogListResource::collection(
            Blog::query()
                ->where('is_active', true)
                ->get()
        );
    }
    public function show(
        string $slug
    )
    {
        return BlogResource::make(
            Blog::query()
                ->where('slug', $slug)
                ->where('is_active', true)
                ->firstOrFail()
        );
    }
}

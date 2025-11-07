<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleListResource;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

class ArticleController extends Controller
{
    public function index()
    {
        return ArticleListResource::collection(
            Article::query()
                ->where('is_active', true)
                ->get()
        );
    }
    public function show(
        string $slug
    )
    {
        return ArticleResource::make(
            Article::query()
                ->where('slug', $slug)
                ->where('is_active', true)
                ->firstOrFail()
        );
    }
}

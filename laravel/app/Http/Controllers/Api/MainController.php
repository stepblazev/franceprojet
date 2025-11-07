<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleListResource;
use App\Http\Resources\BlogListResource;
use App\Http\Resources\ProjectListResource;
use App\Models\Article;
use App\Models\Blog;
use App\Models\Project;

class MainController extends Controller
{
    public function getData()
    {
        return [
            'data' => [
                'article' => ArticleListResource::collection(
                    Article::query()
                        ->where('is_active', 1)
                        ->orderBy('id', 'desc')
                        ->get()
                ),
                'blogs' => BlogListResource::collection(
                    Blog::query()
                        ->where('is_active', 1)
                        ->orderBy('id', 'desc')
                        ->get()
                ),
                'projects' => ProjectListResource::collection(
                    Project::query()
                        ->where('is_active', 1)
                        ->orderBy('id', 'desc')
                        ->get()
                ),
            ]
        ];
    }
}

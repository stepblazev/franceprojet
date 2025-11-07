<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Articles\CreatedRequest;
use App\Http\Requests\Admin\Articles\EditRequest;
use App\Http\Requests\Admin\Articles\ItemsRequest;
use App\Models\Article;
use App\Models\Language;
use App\Models\Translations\ArticleTranslation;
use App\Services\Files\FileService;
use Carbon\Carbon;
use Illuminate\Support\Str;

class ArticlesController extends Controller
{
    public function get(){
        $items = collect();

        $articles = Article::orderBy('id', 'desc')->paginate(20);

        foreach ($articles as $item){
            $items->add([
                'id' => $item->id,
                'title' => $item->title,
                'text' => $item->text,
                'slug' => $item->slug,
                'active' => $item->is_active,
                'created' => $item->created_at,
                'public_at' => $item->public_at,
            ]);
        }

        return response()->json([
            'items' => $items,
            'pagination' => [
                'total' => $articles->total()
            ]
        ]);
    }

    public function created(
        CreatedRequest $request,
        FileService $service
    ){

        $file = $request->hasFile('photo')
            ? $service->setParams($request, 'photo', 'articles')->storeFile()
            : null;

        $createdId = Article::create([
            'photo_id' => $file->id ?? null,
            'is_active' => $request->get('status'),
            'public_at' => Carbon::parse($request->get('public_at')),
            'slug' => Str::slug($request->get('title')['en']),
        ]);

        foreach (Language::where('active', 1)->get() as $item){
            ArticleTranslation::create([
                'title' => $request->get('title')[$item->value],
                'text' => $request->get('text')[$item->value],
                'article_id' => $createdId->id,
                'language_id' => $item->id,
            ]);
        }
    }


    public function edit(
        EditRequest $request,
        FileService $service
    ){
        $article = Article::where('id', $request->get('id'))->first();

        if($article) {
            $file = $request->hasFile('photo')
                ? $service->setParams($request, 'photo', 'articles')->storeFile()
                : null;

            $article->update([
                'photo_id' => is_null($file) ? $article->photo_id : $file->id,
                'is_active' => $request->get('status'),
                'public_at' => Carbon::parse($request->get('public_at')),
                'slug' => Str::slug($request->get('title')['en']),
            ]);

            foreach (Language::where('active', 1)->get() as $item) {
                ArticleTranslation::query()
                    ->where('article_id', $article->id)
                    ->where('language_id', $item->id)
                    ->update([
                        'title' => $request->get('title')[$item->value],
                        'text' => $request->get('text')[$item->value],
                        'article_id' => $article->id,
                        'language_id' => $item->id,
                    ]);
            }

            return [
                'status' => 1
            ];
        }

        return [
            'status' => 0
        ];

    }


    public function getArticle(
        ItemsRequest $request
    ){
        $article = Article::query()
            ->where('id', $request->get('id'))
            ->first();

        $translations = collect();

        foreach ($article->translations as $translation){
            $translations->add([
                'title' => $translation->title,
                'text' => $translation->text,
                'language' => $translation->lang,
            ]);
        }

        return response()->json([
            'status' => 1,
            'data' => [
                'slug' => $article->slug,
                'photo' => $article->photo,
                'translations' => $translations,
                'public_at' => $article->public_at,
                'is_active' => $article->is_active,
            ],
        ]);
    }

    public function setStatus(
        ItemsRequest $request
    ){
        Article::where('id', $request->get('id'))->update([
            'is_active' => $request->get('status')
        ]);

        return [
            'status' => 1,
        ];
    }

    public function remove(
        ItemsRequest $request
    ){
        Article::where('id', $request->get('id'))->delete();

        return [
            'status' => 1,
        ];
    }
}

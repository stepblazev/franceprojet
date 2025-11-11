<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Projects\CreatedRequest;
use App\Http\Requests\Admin\Projects\EditRequest;
use App\Http\Requests\Admin\Projects\ItemsRequest;
use App\Models\Language;
use App\Models\Project;
use App\Models\Translations\ProjectTranslation;
use App\Services\Files\FileService;
use Carbon\Carbon;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function get(){
        $items = collect();

        $projects = Project::query()
            ->orderBy('id', 'desc')
            ->paginate(20);

        foreach ($projects as $item){
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
                'total' => $projects->total()
            ]
        ]);
    }

    public function created(
        CreatedRequest $request,
        FileService $service
    ){

        $file = $request->hasFile('photo')
            ? $service->setParams($request, 'photo', 'projects')->storeFile()
            : null;

        $createdId = Project::create([
            'photo_id' => $file->id ?? null,
            'is_active' => $request->get('status'),
            'youtube' => $request->get('youtube'),
            'public_at' => Carbon::parse($request->get('public_at')),
            'slug' => Str::slug($request->get('title')['fr']),
        ]);

        foreach (Language::where('active', 1)->get() as $item){
            ProjectTranslation::create([
                'title' => $request->get('title')[$item->value],
                'text' => $request->get('text')[$item->value],
                'block_left' => $request->get('block_left')[$item->value],
                'block_right' => $request->get('block_right')[$item->value],
                'feedback' => $request->get('feedback')[$item->value],
                'feedback_author' => $request->get('feedback_author')[$item->value],
                'feedback_job' => $request->get('feedback_job')[$item->value],
                'project_id' => $createdId->id,
                'language_id' => $item->id,
            ]);
        }
    }


    public function edit(
        EditRequest $request,
        FileService $service
    ){
        $project = Project::where('id', $request->get('id'))->first();

        if($project) {
            $file = $request->hasFile('photo')
                ? $service->setParams($request, 'photo', 'projects')->storeFile()
                : null;

            $project->update([
                'photo_id' => is_null($file) ? $project->photo_id : $file->id,
                'is_active' => $request->get('status'),
                'public_at' => Carbon::parse($request->get('public_at')),
                'youtube' => $request->get('youtube'),
                'slug' => Str::slug($request->get('title')['fr']),
            ]);

            foreach (Language::where('active', 1)->get() as $item) {
                ProjectTranslation::query()
                    ->where('project_id', $project->id)
                    ->where('language_id', $item->id)
                    ->update([
                        'title' => $request->get('title')[$item->value],
                        'text' => $request->get('text')[$item->value],
                        'block_left' => $request->get('block_left')[$item->value],
                        'block_right' => $request->get('block_right')[$item->value],
                        'feedback' => $request->get('feedback')[$item->value],
                        'feedback_author' => $request->get('feedback_author')[$item->value],
                        'feedback_job' => $request->get('feedback_job')[$item->value],
                        'project_id' => $project->id,
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


    public function getBy(
        ItemsRequest $request
    ){
        $project = Project::query()
            ->where('id', $request->get('id'))
            ->first();

        $translations = collect();

        foreach ($project->translations as $translation){
            $translations->add([
                'title' => $translation->title,
                'text' => $translation->text,
                'block_left' => $translation->block_left,
                'block_right' => $translation->block_right,
                'feedback' => $translation->feedback,
                'feedback_author' => $translation->feedback_author,
                'feedback_job' => $translation->feedback_job,
                'language' => $translation->lang,
            ]);
        }

        return response()->json([
            'status' => 1,
            'data' => [
                'slug' => $project->slug,
                'photo' => $project->photo,
                'translations' => $translations,
                'public_at' => $project->public_at,
                'is_active' => $project->is_active,
                'youtube' => $project->youtube,
            ],
        ]);
    }

    public function setStatus(
        ItemsRequest $request
    ){
        Project::where('id', $request->get('id'))->update([
            'is_active' => $request->get('status')
        ]);
    }

    public function remove(
        ItemsRequest $request
    ){
        Project::where('id', $request->get('id'))->delete();
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Settings\SaveRequest;
use App\Models\ConfigSystem;
use App\Models\Language;
use App\Services\ConfigService;

class SettingsController extends Controller
{
    public function getSettings(){
        return response()->json([
            'config' => ConfigSystem::get(),
            'language' => Language::where('active', 1)->get(),
        ]);
    }

    public function setSettings(
        SaveRequest $request,
        ConfigService $service
    ){
        foreach ($request->validated() as $key => $value) {
            $service->setSaveConfig($key, $value);
        }
        return [
            'status' => 1
        ];
    }
}

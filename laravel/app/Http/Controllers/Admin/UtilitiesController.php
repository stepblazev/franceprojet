<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Language;

class UtilitiesController extends Controller
{
    public function getData(){

        return response()->json([
            'status' => 1,
            'result' => [
                'language' => Language::where('active', 1)->get(),
            ]
        ]);
    }
}

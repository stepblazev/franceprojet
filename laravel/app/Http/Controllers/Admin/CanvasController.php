<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class CanvasController extends Controller
{
    public function canvas(string $route = '/'){

        return view('admin', [
            'route' => $route
        ]);
    }

}

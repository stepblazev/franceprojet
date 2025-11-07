<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class LangMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if($request->get('language') !== null && in_array($request->get('language'), ['en', 'ru', 'fr'])) {
            app()->setLocale($request->get('language'));
        }
        return $next($request);
    }
}

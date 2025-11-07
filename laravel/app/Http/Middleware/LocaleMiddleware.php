<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class LocaleMiddleware
{
    public function handle($request, Closure $next)
    {
        app()->setLocale(Cookie::get('language', config('app.locale')));

        return $next($request);
    }
}

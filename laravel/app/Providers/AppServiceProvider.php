<?php

namespace App\Providers;

use App\Models\City;
use App\Models\Language;
use App\Models\Speciality;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot()
    {
        View::composer(['layouts.app'], function ($view){
            $view->with('speciality', Speciality::where('is_active', 1)->get());
            $view->with('city', City::where('active', 1)->orderBy('sort' , 'desc')->get());
            $view->with('languages', Language::where('active', 1)->orderBy('sort')->get());
        });
    }
}

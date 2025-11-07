<?php

use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MainController;
use App\Http\Controllers\Api\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('language')->group(function () {
    Route::get('/getData', [MainController::class, 'getData']);

    Route::name('articles.')->prefix('articles')->group(function () {
        Route::get('/', [ArticleController::class, 'index']);
        Route::get('/{slug}', [ArticleController::class, 'show']);
    });

    Route::name('blogs.')->prefix('blogs')->group(function () {
        Route::get('/', [BlogController::class, 'index']);
        Route::get('/{slug}', [BlogController::class, 'show']);
    });
    Route::name('projects.')->prefix('projects')->group(function () {
        Route::get('/', [ProjectController::class, 'index']);
        Route::get('/{slug}', [ProjectController::class, 'show']);
    });
    Route::name('forms.')->prefix('forms')->group(function () {
        Route::post('/contact', [ContactController::class, 'contact']);
        Route::post('/fullForm', [ContactController::class, 'fullForm']);
        Route::post('/fullFormTwo', [ContactController::class, 'fullFormTwo']);
    });
});

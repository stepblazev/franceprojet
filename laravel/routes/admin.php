<?php

use App\Http\Controllers\Admin\ArticlesController;
use App\Http\Controllers\Admin\BannersController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\CanvasController;
use App\Http\Controllers\Admin\ContactRequestController;
use App\Http\Controllers\Admin\ContactsController;
use App\Http\Controllers\Admin\EmployeesController;
use App\Http\Controllers\Admin\PressRequestController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\SpecialityController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Admin\UtilitiesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\AuthController;

/**
 * Api
 */
Route::name('auth.')->prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::get('/session', [AuthController::class, 'session'])->name('session');
    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
});


Route::middleware('auth:api')->group(function () {
    Route::name('articles.')->prefix('articles')->group(function () {
        Route::get('/get', [ArticlesController::class, 'get'])->name('get');
        Route::get('/getArticle', [ArticlesController::class, 'getArticle'])->name('getArticle');
        Route::post('/created', [ArticlesController::class, 'created'])->name('created');
        Route::post('/edit', [ArticlesController::class, 'edit'])->name('edit');
        Route::post('/setStatus', [ArticlesController::class, 'setStatus'])->name('status');
        Route::post('/remove', [ArticlesController::class, 'remove'])->name('remove');
    });


    Route::name('blogs.')->prefix('blogs')->group(function () {
        Route::get('/get', [BlogController::class, 'get'])->name('get');
        Route::get('/getBy', [BlogController::class, 'getBy'])->name('getBy');
        Route::post('/created', [BlogController::class, 'created'])->name('created');
        Route::post('/edit', [BlogController::class, 'edit'])->name('edit');
        Route::post('/setStatus', [BlogController::class, 'setStatus'])->name('status');
        Route::post('/remove', [BlogController::class, 'remove'])->name('remove');
    });

    Route::name('projects.')->prefix('projects')->group(function () {
        Route::get('/get', [ProjectController::class, 'get'])->name('get');
        Route::get('/getBy', [ProjectController::class, 'getBy'])->name('getBy');
        Route::post('/created', [ProjectController::class, 'created'])->name('created');
        Route::post('/edit', [ProjectController::class, 'edit'])->name('edit');
        Route::post('/setStatus', [ProjectController::class, 'setStatus'])->name('status');
        Route::post('/remove', [ProjectController::class, 'remove'])->name('remove');
    });

    Route::name('utilities.')->prefix('utilities')->group(function () {
        Route::get('/getData', [UtilitiesController::class, 'getData'])->name('getData');
    });

    Route::name('request.')->prefix('request')->group(function () {
        Route::get('/getFullForm', [ContactRequestController::class, 'getFullForm']);
        Route::get('/getFullFormTwo', [ContactRequestController::class, 'getFullFormTwo']);
        Route::get('/getContact', [ContactRequestController::class, 'getContact']);
        Route::post('/setStatus', [ContactRequestController::class, 'setStatus']);
    });

    Route::name('settings.')->prefix('settings')->group(function () {
        Route::get('/getSettings', [SettingsController::class, 'getSettings'])->name('getSettings');
        Route::post('/setSettings', [SettingsController::class, 'setSettings'])->name('setSettings');
    });
});

/**
 *  Front
 */
Route::get('/', [CanvasController::class, 'canvas']);
Route::get('/{route}', [CanvasController::class, 'canvas'])->where('route', '.*');

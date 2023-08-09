<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PhotoController;
use App\Http\Controllers\Api\AlbumController;
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

Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::get('/photo', [PhotoController::class, 'get']);
    Route::post('/upload', [PhotoController::class, 'upload']);
    Route::post('/create_album', [AlbumController::class, 'create_album']);
    Route::post('/add_photo_to_album', [AlbumController::class, 'add_photo_to_album']);
    Route::post('/get_photos_from_album', [AlbumController::class, 'get_photos_from_album']);
    Route::post('/remove_photo_from_album', [AlbumController::class, 'remove_photo_from_album']);

});


Route::post('/signin', [AuthController::class, 'signin']);
Route::post('/signup', [AuthController::class, 'signup']);


//Route::post('/photos', [PhotoController::class, 'all']);


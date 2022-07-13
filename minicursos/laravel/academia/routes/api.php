<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TrainController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('train')->group(function() {
    Route::get('/', [TrainController::class,'getAll']);
    Route::get('/{id}', [TrainController::class,'get']);
    Route::get('/name/{name}', [TrainController::class,'getByName']);
    Route::get('/name_with_userinfs/{name}', [TrainController::class,'getByNameWithUserInfs']);

    Route::post('/', [TrainController::class,'newRecord']);
    Route::put('/{id}', [TrainController::class,'update']);
});

<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Router;
use Illuminate\Http\Request;
use App\Http\Controllers\api\Admin\ScrapCollectionController;
use App\Http\Controllers\api\Admin\PickupAgentController;

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\UserController;


// Admin Routes
Route::middleware('auth:sanctum')->group(function () {

    Route::prefix('pickups')->group(function () {

        Route::controller(ScrapCollectionController::class)->group(function () {
            Route::get('/filter-dropdowns','index');
            Route::get('/{date}', 'showAll');
            Route::put('/change-status','changeStatus');
            Route::put('/update','update');

        });
        
    });


    Route::prefix('pickup-agents')->group(function () {

        Route::controller(PickupAgentController::class)->group(function () {
            Route::get('/', 'showAll');
            Route::post('register', 'store');
            Route::put('/update','update');
        });
       
    });

});


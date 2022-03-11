<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\ImageController;
use App\Http\Controllers\api\MaterialTypesController;
use App\Http\Controllers\api\ScrapCollectionController;
use App\Http\Controllers\api\UserController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('send-otp', [AuthController::class, 'sendSMSOTP']);
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {

    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'show'])->name('user.show');
        Route::put('/', [UserController::class, 'update'])->name('user.update');
    });


    Route::prefix('material-types')->group(function () {
        Route::get('/', [MaterialTypesController::class, 'index'])->name('material-types.show');
    });

    Route::prefix('pickup')->group(function () {

        Route::get('/dropdowns', [ScrapCollectionController::class, 'index'])
            ->name('user-scrap.dropdowns');

        Route::get('/recent', [ScrapCollectionController::class, 'recentPickup'])
            ->name('user-scrap.recentPickup');

        Route::post('/', [ScrapCollectionController::class, 'store'])
            ->name('user-scrap.store');

        Route::get('/', [ScrapCollectionController::class, 'showAll'])
            ->name('user-scrap.showAll');


        Route::put('/change-status', [ScrapCollectionController::class, 'changeStatus'])
            ->name('user-scrap.changeStatus');

        Route::get('/{pickup}', [ScrapCollectionController::class, 'show'])
            ->name('user-scrap.show');
    });

    Route::prefix('image')->group(function () {
        Route::post('/', [ImageController::class, 'store'])->name('image.upload');
    });
});

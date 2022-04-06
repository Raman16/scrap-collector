<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\ImageController;
use App\Http\Controllers\api\MaterialTypesController;
use App\Http\Controllers\api\ScrapCollectionController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\StateController;
use App\Http\Controllers\api\StripeController;

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


    Route::prefix('states')->group(function () {

        Route::controller(StateController::class)->group(function () {
            Route::get('/', 'index')->name('states.show');
            Route::post('/','store')->name('state.store');
            Route::put('/update','update')->name('state.update');
            Route::delete('/delete','delete')->name('state.delete');
        });
        
    });

    Route::prefix('material-types')->group(function () {

        Route::controller(MaterialTypesController::class)->group(function () {
            Route::get('/', 'index')->name('material-types.show');
            Route::post('/','store')->name('material-types.store');
            Route::put('/update','update')->name('material-types.update');
            Route::delete('/delete','delete')->name('material-types.delete');
        });

    });

    Route::prefix('pickup')->group(function () {

        Route::controller(ScrapCollectionController::class)->group(function () {
            Route::get('/dropdowns', 'index')->name('user-scrap.dropdowns');
            Route::get('/recent', 'recentPickup')->name('user-scrap.recentPickup');
            Route::post('/','store')->name('user-scrap.store');
            Route::get('/','showAll')->name('user-scrap.showAll');
            Route::put('/change-status','changeStatus')->name('user-scrap.changeStatus');
            Route::get('/{pickup}','show')->name('user-scrap.show');
        });

    });

    Route::prefix('image')->group(function () {
        Route::post('/', [ImageController::class, 'store'])->name('image.upload');
    });

   


});

Route::prefix('stripe')->group(function () {
    Route::post('/', [StripeController::class, 'stripePost'])->name('stripe.post');  
  });

// Route::group(['namespace' => 'api/Admin', 'prefix' => 'admin','middleware' => ['auth:sanctum']], function()
//    {
//        Route::get('/dashboard', [ScrapCollectionController::class, 'index']);
//    });


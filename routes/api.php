<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\ScrapCollectionController;
use App\Http\Controllers\api\ScrapTypesController;
use App\Http\Controllers\api\UserController;
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
        Route::get('/', [ScrapTypesController::class, 'index'])->name('material-types.show');
    });

    Route::prefix('scrap')->group(function () {
        Route::post('/book-a-scrap', [ScrapCollectionController::class, 'store'])->name('scrap.store');
    });
});

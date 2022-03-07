<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{


    public function show()
    {
        $user = Auth::user();
        return response()->json(['user' => new UserResource($user)]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user =  Auth::user();
        $user->update($request->all());
        
        return response()->json([
            'user' => new UserResource($user),
            'message' => 'User registered succesfully.'
        ], 201);
    }
}


<?php

namespace App\Http\Controllers\api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\AddPickupAgentRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Auth;

class PickupAgentController extends Controller
{
    
    public function store(AddPickupAgentRequest $request)
    {
        $validated = $request->validated();
        $validated['password'] = Hash::make($validated['password']);
        try {
                DB::beginTransaction();
                $user = User::create($validated);
                DB::table('user_roles')->insert([
                    'user_id'       => $user->id,
                    'role_id'       => 3,
                    'created_at'    => date('Y-m-d H:i:s'),
                    'updated_at'    => date('Y-m-d H:i:s')
                ]);
                DB::commit();
                return response()->json([
                    'user'    => new UserResource($user),
                    'message' => 'Agent registered succesfully.'
                ], 200);
        } catch (\Illuminate\Database\QueryException $e)  {
            
            return response()->json(['error' =>$e->errorInfo], 422);
        }
    }

    public function showAll(){

        $user = User::whereHas('roles', function($q) {
            $q->where('role_id', '=',3);
        })->get();
        
        
        return response()->json([
            'users' => UserResource::collection($user),
        ], 201);
    }

    public function update(Request $request){
        try{
            $user = User::where(['id'=>$request->user_id])->first();
            $user->update($request->all());
            $user->save();
            return response()->json([
                'user' => new UserResource($user),
            ], 201);
        }
        catch (\Illuminate\Database\QueryException $e)  {
            
            return response()->json(['error' =>$e->getMessage()], 422);
        }
    }

}

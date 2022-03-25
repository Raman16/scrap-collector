<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;
use App\Models\UserRole;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user_id = Auth::user()->id;
        $role =  UserRole::where(['user_id'=>$user_id])->first();
        if (Auth::user() &&  $role->role_id == 1) {
            return $next($request);
        }
        return response()->json(['message'=>"Not Authorized"],403);

    }
}

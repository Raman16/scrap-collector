<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\SMSRequest;
use App\Http\Resources\UserResource;
use App\Models\PersonalAccessToken;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use phpDocumentor\Reflection\Types\Boolean;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{


    public function sendSMSOTP(SMSRequest $request, SMSController $sms)
    {

        $OTP_TYPES = ['USER_REGISTRATION', 'USER_LOGIN'];

        $validated =  $request->validated();

        if (json_encode(in_array($validated['type'], $OTP_TYPES))) {

            if ($validated['type'] == 'USER_REGISTRATION') {
                $user = User::where('phone_number', $validated['phone_number'])->first();
                if (isset($user) && $user['id']) {
                    return response()->json([
                        'message' => 'User with phone number ' .
                            $validated['phone_number_with_code'] . ' already exist'
                    ], 422);
                }
            }
            
            $smsResponse = $sms->sendOTP($request);
            if ($smsResponse->status() == 201) {
                return response()->json(['message' => "OTP sent successfully"], 201);
            }
        }
    }

    public function register(RegistrationRequest $request, SMSController $sms)
    {
        $validated = $request->validated();
        $validated['password'] = Hash::make($validated['password']);

       // $smsResponse = $sms->verifyOTP($request);

        try {
            //if ($smsResponse->status() == 201) {
            //   if(true){

                DB::beginTransaction();

                $user = User::create($validated);

                $user->tokens()->where('name', $validated['device_name'])->delete();
                
                $tokenObj = $user->createToken($validated['device_name']);
                $token = PersonalAccessToken::where('id', $tokenObj->accessToken->id)->first();
                $token->update($validated);

                DB::table('user_roles')->insert([
                    'user_id'       => $user->id,
                    'role_id'       => 2,
                    'created_at'    => date('Y-m-d H:i:s'),
                    'updated_at'    => date('Y-m-d H:i:s')
                ]);
                DB::commit();

                return response()->json([
                   // 'token'   => new TokenResource($tokenObj),
                    'user'    => new UserResource($user),
                    'message' => 'User registered succesfully.'
                ], 200);
            // }
        } catch (\Illuminate\Database\QueryException $e)  {
            
            return response()->json(['error' =>$e->errorInfo], 422);
        }
    }


    public function login(LoginRequest $loginRequest, SMSController $sms)
    {

        $loginValidated = $loginRequest->validated();

        $user = User::where('phone_number_with_code', $loginValidated['phone_number_with_code'])
                      ->first();

        if (!$user) {
           // return response()->json(['message' =>"User Not Found"],  Response::HTTP_NOT_FOUND);
            throw ValidationException::withMessages([
                'phone number' => ['Incorrect Phone Number'],
            ]);
        }

        if (!Hash::check($loginValidated['password'], $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['Incorrect Password'],
            ]);
        }
     
       // $smsResponse = $sms->verifyOTP($loginRequest);

        try {
            if (201) {

                $user->tokens()->where('name', $loginRequest['device_name'])->delete();

                $tokenObj = $user->createToken($loginValidated['device_name']);
                $token = PersonalAccessToken::where('id', $tokenObj->accessToken->id)->first();
                $token->update($loginValidated);
                
                return response()->json([
                    //'token'   => new TokenResource($tokenObj),
                    'user'    => new UserResource($user),
                    'message' => 'User login succesfully.'
                ], 200,['auth-token'=>$tokenObj->plainTextToken]);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
    }

    public function logout()
    {
        $access_token = auth()->user()->token();

        // logout from only current device
        $tokenRepository = app(TokenRepository::class);
        $tokenRepository->revokeAccessToken($access_token->id);

        // use this method to logout from all devices
        // $refreshTokenRepository = app(RefreshTokenRepository::class);
        // $refreshTokenRepository->revokeRefreshTokensByAccessTokenId($$access_token->id);

        return response()->json([
            'success' => true,
            'message' => 'User logout successfully.'
        ], 200);
    }
}

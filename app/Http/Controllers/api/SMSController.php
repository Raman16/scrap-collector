<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SMSRequest;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Twilio\Exceptions\RestException;
use Twilio\Rest\Client;


class SMSController extends Controller
{

    public  $accountSid;
    public  $authToken;
    public  $verifySid;

    public function __construct()
    {
        $this->accountSid = config('twilio.TWILIO_ACCOUNT_SID');
        $this->authToken  = config('twilio.TWILIO_AUTH_TOKEN');
        $this->verifySid  = config('twilio.TWILIO_VERIFY_SID');
    }
    public function sendOTP(SMSRequest $request)
    {

        //OTP sending part
        try {

            $validated = $request->validated();
            $phone      = preg_replace('/\s+/', '', $validated['country_code'] . $validated['phone_number']);
            $twilio     = new Client($this->accountSid, $this->authToken);

            $twilio
                ->verify
                ->v2
                ->services($this->verifySid)
                ->verifications
                ->create($phone, "sms");
            return response()->json(['message' => "OTP sent successfully"], 201);
        } catch (Exception $ex) {

            throw ValidationException::withMessages([
                'message' => 'Unable to create record. Please check your mobile number. ' . $ex->getMessage()
            ], 422);
        } catch (RestException $ex) {

            throw ValidationException::withMessages([
                'message' => 'Unable to create record. Please check your mobile number. ' . $ex->getMessage()
            ], 422);
        }
    }


    public function verifyOTP(Request $request)
    {
        $request->validate([
            'country_code'              => 'required',
            'phone_number'              => 'required|digits:10',
        ]);
        $request->request->add(['phone_number_with_code' => $request->country_code . $request->phone]);

        $phone      = preg_replace('/\s+/', '', $request->country_code . $request->phone_number);
        $twilio     = new Client($this->accountSid, $this->authToken);

        try {

            $verification_check = $twilio
                ->verify
                ->v2
                ->services($this->verifySid)
                ->verificationChecks
                ->create($request->otp,  ["to" => $phone]);

            if ($verification_check->status === "approved") {
                return response()->json(['message' => "OTP Verified successfully"], 201);
            } else {
                throw ValidationException::withMessages(
                    ['message' => 'The provided OTP is incorrect or timed out.'],
                    422
                );
            }
        } catch (Exception $ex) {

            throw ValidationException::withMessages([
                'message' => 'Unable to create record. Please check your mobile number. ' . $ex->getMessage()
            ], 422);
        } catch (RestException $ex) {

            throw ValidationException::withMessages([
                'message' => 'Unable to create record. Please check your mobile number. ' . $ex->getMessage()
            ], 422);
        }
    }
}

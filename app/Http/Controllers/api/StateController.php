<?php
namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\State;
use App\Models\Country;
use App\Http\Resources\CountryStateResource;
use App\Http\Resources\StateResource;

class StateController extends Controller
{
    public function index()
    {
        $countries = Country::with(['state'])->get();
        return response()->json(
            [
                'country_states' => CountryStateResource::collection($countries)
            ]
        );
    }

    
    public function store(Request $request)
    {
        try{
            $state = State::create($request->all());
            return response()->json(
                [
                    'state' => new StateResource($state),
                    'message'       => 'Created Successfully'
                ],201
            );
        }
        catch(Exception $e){
            return response()->json(
                [
                    'message'       => $e->getMessage()
                ],500
            );
        }
        
    }

    public function update(Request $request)
    {
        try{
            $state = State::where(['id'=>$request->id])->first();
            $state->update($request->all());
            return response()->json(
                [
                    'state' => new StateResource($state),
                    'message'       => 'Update Successfully'
                ],201
            );
        }
        catch(Exception $e){
            return response()->json(
                [
                    'message'       => $e->getMessage()
                ],500
            );
        }
        
    }

    public function delete(Request $request)
    {
        try{
            $state = State::where(['id'=>$request->id])->first();
            $state->delete();
            return response()->json(
                [
                    'state' => new StateResource($state),
                    'message'       => 'Deleted Successfully'
                ],201
            );
        }
        catch(Exception $e){
            return response()->json(
                [
                    'message'       => $e->getMessage()
                ],500
            );
        }
        
    }
}

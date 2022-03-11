<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\ScrapCollection;
use App\Models\User;
use App\Rules\ImageBase64String;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'imageable_type' => 'required',
            'imageable_id'   => 'required',
            'image'          => ['required', new ImageBase64String]
        ]);


        $model_id   = $request->input('imageable_id');
        $image      = $request->input('image');
        $image_path ='';
        try {

            DB::beginTransaction();
            if ($request->input('imageable_type') == 'user') {
                $user = User::findorFail($model_id);

                $imageName = 'USER' . $model_id . '_' . time() . '.' . get_base64_extension_string($image);
                $image_path = 'avatar/' . $imageName;

                $user->image()->save(
                    Image::make(['name' => $imageName])
                );
                Storage::disk('public')->put(
                    $image_path,
                    convert_base64_to_image($image)
                );
            } else {


                $scrap = ScrapCollection::findorFail($model_id);

                $imageName = 'SCRAP' . $model_id . '_' . time() . '.' . get_base64_extension_string($image);
                $image_path = 'avatar/' . $imageName;

                $scrap->image()->save(
                    Image::make(['name' => $imageName])
                );
                Storage::disk('public')->put(
                    $image_path,
                    convert_base64_to_image($image)
                );
            }

            return response()->json(
                [
                    'message'   => 'Image Uploaded Successfully',
                    'image_url' => Storage::url($image_path)
                ],
                201
            );

            DB::commit();
        } catch (Exception $e) {
            Db::rollBack();
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}

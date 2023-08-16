<?php

namespace App\Http\Controllers\Api;

use Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Photo;
use App\Models\Album;
use Illuminate\Support\Str;
use Illuminate\Http\Response;

class PhotoController extends Controller
{
    public function all(request $request){
        return Photo::all();
    }

    public function upload(Request $request){
        $request->validate([
            'title' => 'required|string',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:102400',
        ]);
        $user = $request->user();

        if ($request->hasFile('photo') && $user) {
            $file = $request->file('photo');
            $id = Str::uuid()->toString();
            
            $photo = Photo::create([
                'id'=>$id,
                'title'=> $request->input('title'),
                'user_id' => $user->id,
                'ext' => $file->getClientOriginalExtension()
            ]);

            
            $fileName = $id . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs('', $fileName, 'photos');
            $url = Storage::url($filePath);


            return response()->json(['status' =>  true], 200);
        }
        return response()->json(['status' =>  false], 200);
    }

    public function get(Request $request){
        try{
            $id = $request->input('id');
            $user = $request->user();
            $photo = Photo::where('id', $id)->where('user_id', $user->id)->first();

            if ($photo == null) {
                return response()->json(['error' => 'Photo not found'], 404);
            }

            $image_path = 'photos/' . $id . '.' . $photo->ext;

            $file = Storage::get($image_path);
            $type = Storage::mimeType($image_path);

            $response = new Response($file, 200);
            $response->header('Content-Type', $type);
            return $response;

        }catch(Exception $ex){
            return response()->json(['error' => 'Internal Server Error'], 500);
        }

    }

    public function delete(Request $request){
        try{
            $photo_id = $request->input("photo_id");
            $user = $request->user();

            $photo = Photo::find($photo_id)->first();
            $filename = $photo->id . '.' . $photo->ext;
            Storage::delete('photos/'.$filename);
            $photo->delete();

            return response()->json(['status' =>  true], 200);
        }catch(Exception $ex){
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function photos(Request $request){
        try{
            $user = $request->user();

            $photos = Photo::where('user_id', $user->id)->get();

            return response()->json($photos, 200);

        }catch(Exception $ex){
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}

<?php

namespace App\Http\Controllers\Api;

use Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Album;
use Illuminate\Support\Str;
use Illuminate\Http\Response;

class AlbumController extends Controller
{
    public function create_album(Request $request){
        $name = $request->input('album_name');
        $user = $request->user();

        $album = Album::create([
            'name' => $name,
            'user_id' => $user->id
        ]);

        return response()->json(['status' => true], 200);
    }

    public function add_photo_to_album(Request $request){
        try{
            $data = $request->json()->all(); 
            $album_id = $data['album_id'];
            $photo_id_list = $data['photo_id_list'];
            
            $album = Album::where('id',$album_id)->first();

            foreach($photo_id_list as $photo_id){
                $album->photos()->attach($photo_id);
            }

            
            return response()->json(['status' => true], 200);
        }catch(Exception $ex){
            return response()->json(['status' => false], 200);
        }
    }

    public function get_photos_from_album(Request $request){
        $album_id = $request->input('album_id');
        $user = $request->user();
        $album = Album::where('id',$album_id)->where('user_id',$user->id)->first();

        $photos = [];
        foreach($album->photos()->get() as $photo){
            $photos[] = $photo;
        }

        return response()->json($photos, 200);
    }

    public function remove_photo_from_album(Request $request){
        $user = $request->user();
        $album_id = $request->input('album_id');
        $photo_id_list = $request->input('photo_id_list');

        $album = Album::where('id',$album_id)->where('user_id',$user->id)->first();

        foreach($photo_id_list as $photo_id){
            $album->photos()->detach($photo_id);
        }

        return response()->json(['status' => true], 200);
    }

    public function list_albums(Request $request){
        $user = $request->user();

        $albums = Album::where('user_id',$user->id)->get();

        return response()->json($albums, 200);
    }
}

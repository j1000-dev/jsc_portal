<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SignUpController extends Controller
{
    public function showSignUpForm()
    {
        return Inertia::render('SignUp');
    }

    public function submitSignUpForm(Request $request)
    {
        // These need extra validation
        $validator = Validator::make($request->all(), [
            'image_path' => 'required|mimes:jpg,jpeg,png',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'street_number' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            // Upload image to S3
            $imagePath = $this->uploadImageToS3($request->file('image_path'), $request->user()->email);
            $data = $request->all();

            // Extra Formatting
            $data['user_id'] = $request->user()->id;
            $data['dob'] = Carbon::parse($request->input('dob'));
            $data['image_path'] = env('AWS_PUBLIC_URL') . $imagePath;
            $data['sport_options'] = json_encode($request->input('sport_options'));

            UserInfo::create($data);
            User::where('id', $request->user()->id)->update(['registered' => 1]);

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['errors' => $e], 500);
        }
    }

    private function uploadImageToS3($image, $email)
    {
        $fileName = $email . '.' . $image->getClientOriginalExtension();
        return Storage::disk('s3')->putFileAs('images', $image, $fileName);
    }
}

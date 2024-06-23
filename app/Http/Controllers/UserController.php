<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{

    public function index() {
        $coaches = User::where('is_validated', true)->with('userInfo')->get()->map(function ($coach) {
            $firstLast = explode(" ", $coach['name']);
            $formattedName = $firstLast[1] . ", " . $firstLast[0];
            //Add formatted name
            $coachRes = $coach->toArray();
            $coachRes['formattedName'] = $formattedName;
            return $coachRes;
        })->sortBy('formattedName')->values();
     
        return response()->json(['coaches' => $coaches]);
    }

    public function show($id) {
        $user = User::with('userInfo')->findOrFail($id);
        $coachInfo = $user->userInfo->toArray();
        $coachInfo['name'] = $user->name;
        return Inertia::render('Website/CoachesDetail', ['coach' => $coachInfo]);
    }
}

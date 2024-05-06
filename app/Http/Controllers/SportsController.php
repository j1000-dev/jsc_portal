<?php

namespace App\Http\Controllers;

use App\Models\Sports;
use Illuminate\Http\Request;

class SportsController extends Controller
{
    public function index()
    {
        // Retrieve all records from the Sports model
        $sports = Sports::all();
        return response()->json($sports);
    }
}

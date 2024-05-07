<?php

namespace App\Http\Controllers;

use App\Models\Sport;
use Illuminate\Http\Request;

class SportsController extends Controller
{
    public function index()
    {
        // Retrieve all records from the Sports model
        $sports = Sport::all();
        return response()->json($sports);
    }
}

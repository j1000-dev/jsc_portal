<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    public function getConfigFile(Request $request) {
        $configFile = $request->input('configFile');
        return response()->json(['config' => config("jos.$configFile")]);
    }
}

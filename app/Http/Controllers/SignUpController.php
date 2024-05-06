<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SignUpController extends Controller
{
    public function showSignUpForm()
    {
        return Inertia::render('SignUp');
    }

    public function submitSignUpForm(Request $request)
    {
        $validated = $request->validate([]);
        return redirect('/portal/dashboard');
    }
}

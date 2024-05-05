<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\EnsureCoachRegistrationStatus;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/home');
});

/**
 * 
 * JEROME SPORTS CANADA ROUTES
 *  
 **/
$websitePages = \Illuminate\Support\Facades\File::allFiles(resource_path('js/Pages/Website'));
foreach ($websitePages as $page) {
    $component = explode(".", $page->getRelativePathname())[0];
    $name = \Illuminate\Support\Str::kebab($component);
    Route::get($name, function () use ($component) {
        return Inertia::render("Website/$component");
    })->name("website.$name");
}

/**
 * 
 * COACHING PORTAL ROUTES
 *
 **/

/**
 * REROUTING
 * 1. Admin get rerouted to admin pages
 * 2. Registered coaches get routed to coach pages
 * 3. Coaches who have not filled out registration form get sent to sign up
 **/
Route::get('/dashboard', function (Request $request) {
    if ($request->user()->hasRole('admin')) {
        return redirect('/admin/dashboard');
    } else if ($request->user()->hasRole('coach') && $request->user()->registered) {
        return redirect('/portal/dashboard');
    } else {
        return redirect('/sign-up');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

// 1. Admin
Route::middleware(['auth', 'verified', 'web', 'role:admin'])->group(function () {
    $portalPages = \Illuminate\Support\Facades\File::allFiles(resource_path('js/Pages/Admin'));
    foreach ($portalPages as $page) {
        $component = explode(".", $page->getRelativePathname())[0];
        $name = \Illuminate\Support\Str::kebab($component);
        Route::get("/admin/$name", function () use ($component) {
            return Inertia::render("Admin/$component");
        })->name("admin.$name");
    }
});

// 2. Coaches
Route::middleware(['auth', 'verified', 'web', 'role:coach', EnsureCoachRegistrationStatus::class . ':registered'])->group(function () {
    $portalPages = \Illuminate\Support\Facades\File::allFiles(resource_path('js/Pages/Portal'));
    foreach ($portalPages as $page) {
        $component = explode(".", $page->getRelativePathname())[0];
        $name = \Illuminate\Support\Str::kebab($component);
        Route::get("/portal/$name", function () use ($component) {
            return Inertia::render("Portal/$component");
        })->name("portal.$name");
    }
});

// 3. Sign Up
Route::get('/sign-up', function () {
    return Inertia::render('SignUp');
})->middleware(['auth', 'role:coach', EnsureCoachRegistrationStatus::class . ':not_registered']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

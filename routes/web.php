<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/home');
});

$websitePages = \Illuminate\Support\Facades\File::allFiles(resource_path('js/Pages/Website'));
foreach ($websitePages as $page) {
    $component = explode(".", $page->getRelativePathname())[0];
    $name = \Illuminate\Support\Str::kebab($component);
    Route::get($name, function() use ($component) {
        return Inertia::render("Website/$component");
    });
}

//Coaches
Route::middleware(['auth', 'verified', 'web', 'role:coach'])->group(function () {
    $portalPages = \Illuminate\Support\Facades\File::allFiles(resource_path('js/Pages/Portal'));
    foreach ($portalPages as $page) {
        $component = explode(".", $page->getRelativePathname())[0];
        $name = \Illuminate\Support\Str::kebab($component);
        Route::get("/portal/$name", function() use ($component) {
            return Inertia::render("Portal/$component");
        })->name('portal/'.$name);
    }
});

//Admin
Route::middleware(['auth', 'verified', 'web', 'role:admin'])->group(function () {
    $portalPages = \Illuminate\Support\Facades\File::allFiles(resource_path('js/Pages/Admin'));
    foreach ($portalPages as $page) {
        $component = explode(".", $page->getRelativePathname())[0];
        $name = \Illuminate\Support\Str::kebab($component);
        Route::get("/admin/$name", function() use ($component) {
            return Inertia::render("Admin/$component");
        })->name('admin/'.$name);
    }
});

/**
 * REROUTING
 * 1. Admin get rerouted to admin pages
 * 2. Coaches get rerouted to coach pages
 * 3. Coaches who have not filled out form get sent to sign up
 **/
Route::get('/dashboard', function (Request $request) {
    if ($request->user()->hasRole('admin')) {
        return redirect('/admin/dashboard');
    } else if ($request->user()->hasRole('coach') && $request->user()->registered) {
        return redirect('/portal/dashboard');
    } else {
        return redirect ('/portal/sign-up');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

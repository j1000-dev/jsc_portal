<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
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

//Portal side must be authenticated
Route::middleware(['auth', 'verified', 'web'])->group(function () {
    $portalPages = \Illuminate\Support\Facades\File::allFiles(resource_path('js/Pages/Portal'));
    foreach ($portalPages as $page) {
        $component = explode(".", $page->getRelativePathname())[0];
        $name = \Illuminate\Support\Str::kebab($component);
        Route::get("/portal/$name", function() use ($component) {
            return Inertia::render("Portal/$component");
        });
    }
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

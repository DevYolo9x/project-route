<?php

use Illuminate\Support\Facades\Route;

// FRONTEND routes
Route::get('/{any}', function () {
    return view('frontend');
})->where('any', '^(?!admin).*$'); // Không bắt các route bắt đầu bằng "admin"

// BACKEND routes
Route::get('/admin/{any?}', function () {
    return view('backend');
})->where('any', '.*');
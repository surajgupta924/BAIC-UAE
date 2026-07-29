<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/capital-beauty', [PageController::class, 'capitalBeauty'])->name('capital-beauty');
Route::get('/concept-car', [PageController::class, 'conceptCar'])->name('concept-car');
Route::get('/off-road', [PageController::class, 'offRoad'])->name('off-road');
Route::get('/research-development', [PageController::class, 'researchDevelopment'])->name('research-development');
Route::get('/overview', [PageController::class, 'overview'])->name('overview');
Route::get('/about-baic', [PageController::class, 'aboutBaic'])->name('about-baic');
Route::get('/about-omni-net', [PageController::class, 'aboutOmniNet'])->name('about-omni-net');
Route::get('/about-arcfox', [PageController::class, 'aboutArcfox'])->name('about-arcfox');
Route::get('/vision', [PageController::class, 'vision'])->name('vision');
Route::get('/history', [PageController::class, 'history'])->name('history');
Route::get('/after-sales-service', [PageController::class, 'afterSalesService'])->name('after-sales-service');
Route::get('/news-release', [PageController::class, 'newsRelease'])->name('news-release');
Route::get('/subcribe', [PageController::class, 'subscribe'])->name('subscribe');
Route::get('/media-contact', [PageController::class, 'mediaContact'])->name('media-contact');
Route::get('/contact-us', [PageController::class, 'contactUs'])->name('contact-us');
Route::get('/our-service', [PageController::class, 'ourService'])->name('our-service');
Route::get('/test-drive', [PageController::class, 'testDrive'])->name('test-drive');
Route::get('/model/{name}', [PageController::class, 'model'])->name('model');
Route::get('/terms-and-conditions', [PageController::class, 'terms'])->name('terms');
Route::get('/cookie-policy', [PageController::class, 'cookies'])->name('cookies');
Route::get('/data-protection', [PageController::class, 'dataProtection'])->name('data-protection');

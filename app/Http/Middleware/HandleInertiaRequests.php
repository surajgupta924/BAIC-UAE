<?php

namespace App\Http\Middleware;

use App\Services\ContentService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        $content = app(ContentService::class);

        return [
            ...parent::share($request),
            'homepage' => fn () => $content->homepage(),
            'models' => fn () => $content->models(),
            'categories' => fn () => $content->categories(),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
            ],
        ];
    }
}

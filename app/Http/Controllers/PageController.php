<?php

namespace App\Http\Controllers;

use App\Services\ContentService;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageController extends Controller
{
    public function __construct(private ContentService $content)
    {
    }

    public function home(): Response
    {
        return Inertia::render('Home', [
            'capitalBeauty' => $this->content->capitalBeauty(),
        ]);
    }

    public function capitalBeauty(): Response
    {
        return Inertia::render('CapitalBeauty', [
            'data' => $this->content->capitalBeauty(),
        ]);
    }

    public function conceptCar(): Response
    {
        return Inertia::render('ConceptCar', [
            'data' => $this->content->conceptCar(),
        ]);
    }

    public function offRoad(): Response
    {
        return Inertia::render('OffRoad', [
            'data' => $this->content->offRoad(),
        ]);
    }

    public function researchDevelopment(): Response
    {
        return Inertia::render('ResearchDevelopment', [
            'data' => $this->content->researchDevelopment(),
        ]);
    }

    public function overview(): Response
    {
        return Inertia::render('Overview', [
            'data' => $this->content->overview(),
        ]);
    }

    public function aboutBaic(): Response
    {
        return Inertia::render('AboutBaic', [
            'data' => $this->content->overview(),
        ]);
    }

    public function aboutOmniAuto(): Response
    {
        return Inertia::render('AboutOmniAuto');
    }

    public function aboutArcfox(): Response
    {
        return Inertia::render('AboutArcfox');
    }

    public function vision(): Response
    {
        return Inertia::render('Vision', [
            'items' => $this->content->vision(),
        ]);
    }

    public function history(): Response
    {
        return Inertia::render('History', [
            'items' => $this->content->history(),
        ]);
    }

    public function afterSalesService(): Response
    {
        return Inertia::render('AfterSalesService', [
            'data' => $this->content->afterSalesService(),
        ]);
    }

    public function newsRelease(): Response
    {
        return Inertia::render('NewsRelease', [
            'items' => $this->content->news(),
        ]);
    }

    public function subscribe(): Response
    {
        return Inertia::render('Subscribe');
    }

    public function mediaContact(): Response
    {
        return Inertia::render('MediaContact');
    }

    public function contactUs(): Response
    {
        return Inertia::render('ContactUs', [
            'nationalities' => $this->content->nationalities(),
        ]);
    }

    public function ourService(): Response
    {
        return Inertia::render('OurService');
    }

    public function testDrive(): Response
    {
        return Inertia::render('TestDrive');
    }

    public function model(string $name): Response
    {
        $model = $this->content->findModelByName($name);
        if (! $model) {
            throw new NotFoundHttpException('Model not found');
        }

        return Inertia::render('Model', [
            'model' => $model,
            'colors' => $this->content->modelColors(),
        ]);
    }

    public function terms(): Response
    {
        return Inertia::render('Legal', [
            'title' => 'Terms & Conditions',
            'slug' => 'terms',
        ]);
    }

    public function cookies(): Response
    {
        return Inertia::render('Legal', [
            'title' => 'Cookie Policy',
            'slug' => 'cookies',
        ]);
    }

    public function dataProtection(): Response
    {
        return Inertia::render('Legal', [
            'title' => 'Data Protection',
            'slug' => 'data-protection',
        ]);
    }
}

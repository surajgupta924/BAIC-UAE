<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ContentService
{
    private string $dataPath;

    public function __construct()
    {
        $this->dataPath = storage_path('app/data');
    }

    private function local(string $file): array
    {
        $path = $this->dataPath.'/'.$file;
        if (! is_file($path)) {
            return [];
        }

        $json = json_decode((string) file_get_contents($path), true);

        return is_array($json) ? $json : [];
    }

    private function localData(string $file): mixed
    {
        $json = $this->local($file);

        return $json['data'] ?? $json;
    }

    private function fetchWithFallback(string $path, mixed $fallback): mixed
    {
        try {
            $base = rtrim((string) config('baic.api_base'), '/');
            $response = Http::timeout(3)->get($base.'/'.$path);
            if ($response->successful()) {
                $json = $response->json();
                if (isset($json['data'])) {
                    return $json['data'];
                }
            }
        } catch (\Throwable) {
            // use local fallback
        }

        return $fallback;
    }

    public function homepage(): array
    {
        return $this->localData('homepage.json');
    }

    /** Models offered for Omni Auto Nigeria (exclude UAE-only / out-of-scope). */
    private const ACTIVE_MODEL_NAMES = [
        'X55',
        'X7',
        'BJ30',
        'BJ30e Smart Hybrid',
        'BJ40 PRO',
        'BJ60',
        'Arcfox T1',
        'Arcfox T5',
    ];

    public function models(): array
    {
        $models = $this->localData('models.json') ?: [];
        if (! is_array($models)) {
            return [];
        }

        $allowed = array_fill_keys(self::ACTIVE_MODEL_NAMES, true);

        return array_values(array_filter(
            $models,
            static fn ($model) => is_array($model)
                && isset($model['name'])
                && isset($allowed[$model['name']])
        ));
    }

    public function categories(): array
    {
        return $this->localData('categories.json') ?: [];
    }

    public function capitalBeauty(): array
    {
        return $this->fetchWithFallback('capital-beauty/1', $this->localData('capital.json'));
    }

    public function conceptCar(): array
    {
        return $this->fetchWithFallback('concept-car/1', $this->localData('concept-car.json'));
    }

    public function offRoad(): array
    {
        return $this->fetchWithFallback('off-road/1', $this->localData('off-road.json'));
    }

    public function overview(): array
    {
        return $this->fetchWithFallback('overview/1', $this->localData('overview.json'));
    }

    public function researchDevelopment(): array
    {
        return $this->fetchWithFallback(
            'research-and-development/1',
            $this->localData('research-development.json')
        );
    }

    public function afterSalesService(): array
    {
        return $this->fetchWithFallback(
            'after-sales-service/1',
            $this->localData('after-sales-service.json')
        );
    }

    public function featureServices(): array
    {
        return $this->fetchWithFallback(
            'feature-service',
            $this->localData('feature-service.json')
        ) ?: [];
    }

    public function vision(): array
    {
        return $this->fetchWithFallback('vision', $this->localData('vision.json')) ?: [];
    }

    public function history(): array
    {
        return $this->fetchWithFallback('history', $this->localData('history.json')) ?: [];
    }

    public function news(): array
    {
        return $this->fetchWithFallback('news-release', $this->localData('news.json')) ?: [];
    }

    public function modelColors(): array
    {
        try {
            $base = rtrim((string) config('baic.api_base'), '/');
            $response = Http::timeout(8)->get($base.'/model-with-colors');
            if ($response->successful()) {
                return $response->json('data') ?? [];
            }
        } catch (\Throwable) {
            // ignore
        }

        return $this->localData('model-colors.json') ?: [];
    }

    public function findModelByName(string $name): ?array
    {
        $decoded = urldecode($name);
        foreach ($this->models() as $model) {
            $modelName = (string) ($model['name'] ?? '');
            if (
                strcasecmp($modelName, $decoded) === 0 ||
                strcasecmp($modelName, $name) === 0
            ) {
                return $model;
            }
        }

        return null;
    }

    public function nationalities(): array
    {
        $data = $this->local('nationalities.json');
        if (isset($data['data']) && is_array($data['data'])) {
            $data = $data['data'];
        }

        return array_values(is_array($data) ? $data : []);
    }
}

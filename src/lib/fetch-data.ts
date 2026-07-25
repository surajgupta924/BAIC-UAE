import type {
  CapitalBeautyData,
  HomepageData,
  ModelCategory,
  ModelColor,
  NewsItem,
  VehicleModel,
} from "./api";
import { API_BASE } from "./constants";

import homepageFile from "@/data/homepage.json";
import modelsFile from "@/data/models.json";
import categoriesFile from "@/data/categories.json";
import capitalFile from "@/data/capital.json";
import newsFile from "@/data/news.json";

async function fetchWithFallback<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}/${path}`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    return json.data as T;
  } catch {
    return fallback;
  }
}

export async function getHomepage(): Promise<HomepageData> {
  // Nigeria site uses local homepage banners (BJ60 / X7 / Arcfox T1).
  return (homepageFile as { data: HomepageData }).data;
}

/** Nigeria BAIC + Arcfox lineup — always local, never UAE API. */
export async function getModels(): Promise<VehicleModel[]> {
  return (modelsFile as { data: VehicleModel[] }).data;
}

export async function getCategories(): Promise<ModelCategory[]> {
  return (categoriesFile as { data: ModelCategory[] }).data;
}

export async function getCapitalBeauty(): Promise<CapitalBeautyData> {
  return fetchWithFallback<CapitalBeautyData>(
    "capital-beauty/1",
    (capitalFile as { data: CapitalBeautyData }).data,
  );
}

export async function getNews(): Promise<NewsItem[]> {
  return fetchWithFallback<NewsItem[]>(
    "news-release",
    (newsFile as { data: NewsItem[] }).data,
  );
}

export async function getModelColors(): Promise<ModelColor[]> {
  try {
    const res = await fetch(`${API_BASE}/model-with-colors`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data as ModelColor[];
  } catch {
    return [];
  }
}

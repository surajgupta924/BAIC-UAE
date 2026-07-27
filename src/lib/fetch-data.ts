import type {
  CapitalBeautyData,
  ConceptCarData,
  HomepageData,
  ModelCategory,
  ModelColor,
  NewsItem,
  OffRoadData,
  OverviewData,
  ResearchDevelopmentData,
  VehicleModel,
} from "./api";
import { API_BASE } from "./constants";

import homepageFile from "@/data/homepage.json";
import modelsFile from "@/data/models.json";
import categoriesFile from "@/data/categories.json";
import capitalFile from "@/data/capital.json";
import conceptCarFile from "@/data/concept-car.json";
import offRoadFile from "@/data/off-road.json";
import overviewFile from "@/data/overview.json";
import researchFile from "@/data/research-development.json";
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

export async function getConceptCar(): Promise<ConceptCarData> {
  return fetchWithFallback<ConceptCarData>(
    "concept-car/1",
    (conceptCarFile as { data: ConceptCarData }).data,
  );
}

export async function getOffRoad(): Promise<OffRoadData> {
  return fetchWithFallback<OffRoadData>(
    "off-road/1",
    (offRoadFile as { data: OffRoadData }).data,
  );
}

export async function getOverview(): Promise<OverviewData> {
  return fetchWithFallback<OverviewData>(
    "overview/1",
    (overviewFile as { data: OverviewData }).data,
  );
}

export async function getResearchDevelopment(): Promise<ResearchDevelopmentData> {
  return fetchWithFallback<ResearchDevelopmentData>(
    "research-and-development/1",
    (researchFile as { data: ResearchDevelopmentData }).data,
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

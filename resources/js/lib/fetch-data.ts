import type {
  AfterSalesServiceData,
  CapitalBeautyData,
  ConceptCarData,
  FeatureServiceItem,
  HistoryItem,
  HomepageData,
  ModelCategory,
  ModelColor,
  NewsItem,
  OffRoadData,
  OverviewData,
  ResearchDevelopmentData,
  VehicleModel,
  VisionItem,
} from "./api";
import { API_BASE } from "./constants";

import homepageFile from "@/data/homepage.json";
import modelsFile from "@/data/models.json";
import categoriesFile from "@/data/categories.json";
import afterSalesFile from "@/data/after-sales-service.json";
import capitalFile from "@/data/capital.json";
import conceptCarFile from "@/data/concept-car.json";
import featureServiceFile from "@/data/feature-service.json";
import historyFile from "@/data/history.json";
import offRoadFile from "@/data/off-road.json";
import overviewFile from "@/data/overview.json";
import researchFile from "@/data/research-development.json";
import visionFile from "@/data/vision.json";
import newsFile from "@/data/news.json";

async function fetchWithFallback<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}/${path}`, {
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

export async function getVision(): Promise<VisionItem[]> {
  return fetchWithFallback<VisionItem[]>(
    "vision",
    (visionFile as { data: VisionItem[] }).data,
  );
}

export async function getHistory(): Promise<HistoryItem[]> {
  return fetchWithFallback<HistoryItem[]>(
    "history",
    (historyFile as { data: HistoryItem[] }).data,
  );
}

export async function getAfterSalesService(): Promise<AfterSalesServiceData> {
  return fetchWithFallback<AfterSalesServiceData>(
    "after-sales-service/1",
    (afterSalesFile as { data: AfterSalesServiceData }).data,
  );
}

export async function getFeatureServices(): Promise<FeatureServiceItem[]> {
  return fetchWithFallback<FeatureServiceItem[]>(
    "feature-service",
    (featureServiceFile as { data: FeatureServiceItem[] }).data,
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
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data as ModelColor[];
  } catch {
    return [];
  }
}

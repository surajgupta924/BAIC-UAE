"use client";

import { useMemo, useState } from "react";
import Car360Viewer from "@/components/Car360Viewer";
import catalog from "@/data/car360-catalog.json";
import { getAvailableColorIndexes, getCar360Frames } from "@/lib/car360";
import "@/styles/car360-section.css";

interface CatalogColor {
  rgb: string;
  frameIndex: number;
  previewUrl: string;
}

interface CatalogModel {
  title: string;
  displayName: string;
  stripLabel?: string;
  thumbUrl: string;
  vehicleUrl: string;
  colors: CatalogColor[];
}

interface CatalogCategory {
  name: string;
  models: CatalogModel[];
}

const categories = catalog as CatalogCategory[];

function parseRgb(rgb: string): string {
  return rgb.split("/")[0].trim();
}

function framesForModel(
  model: CatalogModel,
  color: CatalogColor | null,
  swatchIndex: number,
): string[] {
  const frameIndex = color?.frameIndex ?? 0;

  const byFrameIndex = getCar360Frames(model.displayName, frameIndex);
  if (byFrameIndex && byFrameIndex.length >= 1) return byFrameIndex;

  const bySwatchOrder = getCar360Frames(model.displayName, swatchIndex);
  if (bySwatchOrder && bySwatchOrder.length >= 1) return bySwatchOrder;

  const byTitle = getCar360Frames(model.title, frameIndex);
  if (byTitle && byTitle.length >= 1) return byTitle;

  const fallback = getCar360Frames(model.displayName, 0);
  if (fallback && fallback.length >= 1) return fallback;

  const still = color?.previewUrl || model.vehicleUrl || model.thumbUrl;
  return still ? [still] : [];
}

function colorsForModel(model: CatalogModel): CatalogColor[] {
  const available = new Set([
    ...getAvailableColorIndexes(model.displayName),
    ...getAvailableColorIndexes(model.title),
  ]);

  if (available.size <= 1) {
    return model.colors.length
      ? [model.colors[0]]
      : [{ rgb: "#888", frameIndex: 0, previewUrl: model.vehicleUrl }];
  }

  const matched = model.colors.filter((c) => available.has(c.frameIndex));
  return matched.length > 0 ? matched : model.colors;
}

export default function Car360Section() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  // Live site defaults Off-road to BJ60 (second model)
  const [activeModelIndex, setActiveModelIndex] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);

  const activeCategory = categories[activeCategoryIndex];
  const models = activeCategory.models;
  const safeModelIndex = Math.min(activeModelIndex, Math.max(models.length - 1, 0));
  const activeModel = models[safeModelIndex];
  const visibleColors = useMemo(
    () => colorsForModel(activeModel),
    [activeModel],
  );
  const safeColorIndex = Math.min(
    colorIndex,
    Math.max(visibleColors.length - 1, 0),
  );
  const activeColor = visibleColors[safeColorIndex] ?? visibleColors[0] ?? null;
  const isSingleModel = models.length === 1;

  const frames = useMemo(
    () => framesForModel(activeModel, activeColor, safeColorIndex),
    [activeModel, activeColor, safeColorIndex],
  );

  const selectCategory = (index: number) => {
    setActiveCategoryIndex(index);
    // Prefer BJ60 when switching back to Off-road
    const nextModels = categories[index].models;
    const bj60 = nextModels.findIndex((m) => m.displayName === "BJ60");
    setActiveModelIndex(bj60 >= 0 ? bj60 : 0);
    setColorIndex(0);
  };

  const selectModel = (index: number) => {
    setActiveModelIndex(index);
    setColorIndex(0);
  };

  return (
    <section className="index-model-section">
      <div className="models-wrap">
        <div className="models-main">
          <ul className="car-tabs">
            {categories.map((category, index) => (
              <li
                key={category.name}
                className={`car-tab-item${index === activeCategoryIndex ? " active" : ""}`}
              >
                <button type="button" onClick={() => selectCategory(index)}>
                  {category.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="car-content">
            <ul
              className={`model-list${isSingleModel ? " model-list-single" : ""}`}
            >
              {models.map((model, index) => (
                <li
                  key={`${model.displayName}-${index}`}
                  className={`model-item${index === safeModelIndex ? " active-car" : ""}`}
                >
                  <button
                    type="button"
                    className="model-item-btn"
                    onClick={() => selectModel(index)}
                  >
                    <div className="model-name-wrap">
                      <span className="model-name-text">
                        {model.stripLabel ?? model.displayName}
                      </span>
                    </div>
                    {!isSingleModel && (
                      <div className="model-thumb-image-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={model.thumbUrl}
                          alt=""
                          className="img-fluid"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="model-viewer-wrap">
              {frames.length > 0 ? (
                <Car360Viewer
                  key={`${activeModel.displayName}-${activeColor?.frameIndex ?? 0}-${safeColorIndex}-${frames[0]}`}
                  frames={frames}
                  alt={activeModel.displayName}
                  className="car-360-stage"
                />
              ) : (
                <div className="model-static-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      activeColor?.previewUrl ??
                      activeModel.vehicleUrl ??
                      activeModel.thumbUrl
                    }
                    alt={activeModel.displayName}
                    referrerPolicy="no-referrer"
                    className="img-fluid"
                  />
                </div>
              )}
            </div>

            {visibleColors.length > 0 && (
              <div className="model-color-wrap">
                <ul className="color-list">
                  {visibleColors.map((color, index) => (
                    <li
                      key={`${color.rgb}-${color.frameIndex}`}
                      className="color-item"
                    >
                      <button
                        type="button"
                        className={`color-icon${index === safeColorIndex ? " active" : ""}`}
                        onClick={() => setColorIndex(index)}
                        aria-label={`Color option ${index + 1}`}
                      >
                        <span
                          className="pie-color1"
                          style={{
                            backgroundColor: parseRgb(color.rgb),
                          }}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

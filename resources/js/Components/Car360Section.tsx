"use client";

import { useEffect, useMemo, useState } from "react";
import Car360Viewer from "@/components/Car360Viewer";
import catalog from "@/data/car360-catalog.json";
import { getAvailableColorIndexes, getCar360Frames } from "@/lib/car360";
import {
  ACTIVE_MODEL_NAMES,
  CAR360_MODEL_ALIASES,
} from "@/lib/site";
import "@/styles/car360-section.css";

const ENTER_MS = 380;

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

const ACTIVE_SET = new Set<string>(ACTIVE_MODEL_NAMES);

function resolveActiveName(displayName: string): string | null {
  const aliased = CAR360_MODEL_ALIASES[displayName] ?? displayName;
  return ACTIVE_SET.has(aliased) ? aliased : null;
}

/** Nigeria lineup only — do not show other UAE catalog model pics. */
const nigeriaCategories: CatalogCategory[] = categories
  .map((category) => ({
    ...category,
    models: category.models
      .map((model) => {
        const activeName = resolveActiveName(model.displayName);
        if (!activeName) return null;
        return {
          ...model,
          displayName: activeName,
          stripLabel: model.stripLabel ?? activeName,
        };
      })
      .filter((model): model is CatalogModel => model !== null),
  }))
  .filter((category) => category.models.length > 0);

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
  const [activeModelIndex, setActiveModelIndex] = useState(() => {
    const offroad = nigeriaCategories[0]?.models ?? [];
    const bj60 = offroad.findIndex((m) => m.displayName === "BJ60");
    return bj60 >= 0 ? bj60 : 0;
  });
  const [colorIndex, setColorIndex] = useState(0);
  const [viewerEpoch, setViewerEpoch] = useState(0);
  const [isEntering, setIsEntering] = useState(true);

  const activeCategory = nigeriaCategories[activeCategoryIndex];
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

  useEffect(() => {
    if (!isEntering) return;
    const timer = window.setTimeout(() => setIsEntering(false), ENTER_MS);
    return () => window.clearTimeout(timer);
  }, [isEntering, viewerEpoch]);

  const triggerEnter = () => {
    setIsEntering(true);
    setViewerEpoch((value) => value + 1);
  };

  const selectCategory = (index: number) => {
    setActiveCategoryIndex(index);
    const nextModels = nigeriaCategories[index].models;
    const bj60 = nextModels.findIndex((m) => m.displayName === "BJ60");
    setActiveModelIndex(bj60 >= 0 ? bj60 : 0);
    setColorIndex(0);
    triggerEnter();
  };

  const selectModel = (index: number) => {
    if (index === safeModelIndex) return;
    setActiveModelIndex(index);
    setColorIndex(0);
    triggerEnter();
  };

  const selectColor = (index: number) => {
    if (index === safeColorIndex) return;
    setColorIndex(index);
    triggerEnter();
  };

  return (
    <section className="index-model-section">
      <div className="models-wrap">
        <div className="models-main">
          <ul className="car-tabs">
            {nigeriaCategories.map((category, index) => (
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
              className={`model-list model-list-names-only${isSingleModel ? " model-list-single" : ""}`}
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
                    <span className="model-name-text">
                      {model.stripLabel ?? model.displayName}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div
              key={viewerEpoch}
              className={`model-viewer-wrap${isEntering ? " is-entering" : " is-ready"}`}
              onAnimationEnd={(event) => {
                if (event.target !== event.currentTarget) return;
                setIsEntering(false);
              }}
            >
              {frames.length > 0 ? (
                <Car360Viewer
                  key={`${activeModel.displayName}-${activeColor?.frameIndex ?? 0}-${safeColorIndex}-${frames[0]}`}
                  frames={frames}
                  alt={activeModel.displayName}
                  className="car-360-stage"
                  interactive={!isEntering}
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
                  {visibleColors.map((color, index) => {
                    const swatch = parseRgb(color.rgb);
                    const isActive = index === safeColorIndex;
                    return (
                      <li
                        key={`${color.rgb}-${color.frameIndex}`}
                        className={`color-item${isActive ? " active" : ""}`}
                      >
                        <button
                          type="button"
                          className="color-icon"
                          onClick={() => selectColor(index)}
                          aria-label={`Color option ${index + 1}`}
                          aria-pressed={isActive}
                        >
                          <span
                            className="pie-color1"
                            style={{ backgroundColor: swatch }}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

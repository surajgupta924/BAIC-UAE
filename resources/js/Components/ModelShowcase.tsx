"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Car360Viewer from "@/components/Car360Viewer";
import type { ModelCategory, ModelColor, VehicleModel } from "@/lib/api";
import { imageUrl } from "@/lib/constants";
import { getCar360Frames } from "@/lib/car360";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ModelShowcaseProps {
  models: VehicleModel[];
  categories: ModelCategory[];
  modelColors: ModelColor[];
}

interface ShowcaseModel {
  modelId: number;
  modelName: string;
  categoryId: number;
  image1: string;
  description: string;
  power: string;
  torque: string;
  wheelbase: string;
  colorArr: ModelColor[];
}

export default function ModelShowcase({
  models,
  categories,
  modelColors,
}: ModelShowcaseProps) {
  const modelsWithCategories = useMemo(() => {
    return categories
      .map((category) => {
        const modelsArr: ShowcaseModel[] = models
          .filter((model) => model.categoryId === category.id)
          .map((model) => ({
            modelId: model.id,
            modelName: model.name,
            categoryId: category.id,
            image1: model.image1,
            description: model.description,
            power: model.power,
            torque: model.torque,
            wheelbase: model.wheelbase,
            colorArr: modelColors.filter((color) => color.modelId === model.id),
          }));

        return { categoryName: category.name, modelsArr };
      })
      .filter((group) => group.modelsArr.length > 0);
  }, [categories, models, modelColors]);

  const [activeTab, setActiveTab] = useState(
    modelsWithCategories[0]?.categoryName ?? "Off-Road",
  );
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeColorByModel, setActiveColorByModel] = useState<
    Record<number, { color: string; index: number } | null>
  >({});

  const activeGroup =
    modelsWithCategories.find((group) => group.categoryName === activeTab) ??
    modelsWithCategories[0];

  if (!activeGroup || activeGroup.modelsArr.length === 0) return null;

  const getColorState = (model: ShowcaseModel) =>
    activeColorByModel[model.modelId] ?? null;

  const selectColor = (modelId: number, color: string, index: number) => {
    setActiveColorByModel((prev) => ({
      ...prev,
      [modelId]: { color, index },
    }));
  };

  const resetColor = (modelId: number) => {
    setActiveColorByModel((prev) => ({
      ...prev,
      [modelId]: null,
    }));
  };

  return (
    <section className="section-carmodels">
      <div className="container">
        <div className="radio-buttons radio-buttons-horizontal justify-content-center mb-4">
          <ul className="d-flex list-unstyled gap-4 mb-0">
            {modelsWithCategories.map((group) => (
              <li key={group.categoryName}>
                <button
                  type="button"
                  className={`category-tab-btn${activeTab === group.categoryName ? " active" : ""}`}
                  onClick={() => {
                    setActiveTab(group.categoryName);
                    setThumbsSwiper(null);
                  }}
                >
                  {group.categoryName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="sliderModels">
          <Swiper
            className="bigImage"
            modules={[Navigation, Thumbs]}
            loop
            speed={1000}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            onSlideChange={(swiper) => {
              const model = activeGroup.modelsArr[swiper.realIndex];
              if (model) resetColor(model.modelId);
            }}
          >
            {activeGroup.modelsArr.map((model) => {
              const colorState = getColorState(model);
              const colorIndex = colorState?.index ?? 0;
              const frames = getCar360Frames(model.modelName, colorIndex);
              const activeColorEntry =
                colorState != null
                  ? model.colorArr[colorState.index]
                  : undefined;

              return (
                <SwiperSlide key={model.modelId}>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="gallery-content">
                        <h3 className="fw-bold">{model.modelName}</h3>
                        <p>{model.description}</p>
                        <div className="vehicle-features">
                          <div className="row text-center">
                            <div className="col col-4">
                              <div className="vehicle-feature-box">
                                <h4>{model.power}</h4>
                                <p className="caractertext">Power</p>
                              </div>
                            </div>
                            <div className="col col-4">
                              <div className="vehicle-feature-box">
                                <h4>{model.torque}</h4>
                                <p className="caractertext">Torque</p>
                              </div>
                            </div>
                            <div className="col col-4">
                              <div className="vehicle-feature-box">
                                <h4>{model.wheelbase}</h4>
                                <p className="caractertext">Wheelbase</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {model.colorArr.length > 0 && (
                          <div className="vehicle-color-variations">
                            <ul className="color-list list-unstyled d-flex gap-2">
                              {model.colorArr.map((colorItem, index) => (
                                <li
                                  key={colorItem.id}
                                  className={`color-item${colorState?.color === colorItem.color ? " active" : ""}`}
                                >
                                  <button
                                    type="button"
                                    className="color-icon border-0 p-0"
                                    style={{ backgroundColor: colorItem.color }}
                                    onClick={() =>
                                      selectColor(
                                        model.modelId,
                                        colorItem.color,
                                        index,
                                      )
                                    }
                                    aria-label={`Select color ${index + 1}`}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="vehicle-action-buttons">
                          <Link
                            href="/test-drive"
                            className="btn btn-outline-dark mx-1"
                          >
                            Test Drive
                          </Link>
                          <Link
                            href={`/model/${model.modelName}`}
                            className="btn btn-outline-dark mx-1"
                          >
                            Explore More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="gallery-image mcar-image-viewbox">
                        {frames ? (
                          <Car360Viewer
                            frames={frames}
                            alt={model.modelName}
                          />
                        ) : (
                          <Image
                            src={imageUrl(
                              activeColorEntry?.image ?? model.image1,
                            )}
                            alt={model.modelName}
                            width={700}
                            height={450}
                            className="img-fluid"
                            unoptimized
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            className="mySwiper thumbImage mt-4"
            modules={[Navigation, Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={Math.min(activeGroup.modelsArr.length, 5)}
            spaceBetween={30}
            navigation
            watchSlidesProgress
          >
            {activeGroup.modelsArr.map((model) => (
              <SwiperSlide key={model.modelId}>
                <button
                  type="button"
                  className="thumb-model-btn border-0 bg-transparent p-0 w-100"
                  onClick={() => resetColor(model.modelId)}
                >
                  <Image
                    src={imageUrl(model.image1)}
                    alt={model.modelName}
                    width={120}
                    height={60}
                    className="carsize img-fluid"
                    unoptimized
                  />
                  <p className="carname1 mb-0">{model.modelName}</p>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

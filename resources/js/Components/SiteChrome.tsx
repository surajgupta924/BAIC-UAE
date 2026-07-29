import React from "react";
import { usePage } from "@inertiajs/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickLinks from "@/components/QuickLinks";
import type { HomepageData, ModelCategory, VehicleModel } from "@/lib/api";

type SharedProps = {
  homepage: HomepageData;
  models: VehicleModel[];
  categories: ModelCategory[];
};

export default function SiteChrome({
  children,
  title,
  home = false,
}: {
  children: React.ReactNode;
  title?: string;
  home?: boolean;
}) {
  const { homepage, models, categories } = usePage().props as SharedProps;

  return (
    <>
      <QuickLinks />
      <Header homepage={homepage} models={models} categories={categories} />
      <main className={home ? "habetlouta" : "habetlouta inner-page"}>
        {title ? (
          <div className="page-hero-title">
            <div className="container py-5">
              <h1 className="text-uppercase mb-0">{title}</h1>
            </div>
          </div>
        ) : null}
        {children}
      </main>
      <Footer homepage={homepage} models={models} />
    </>
  );
}

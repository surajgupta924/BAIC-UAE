import Header from "@/components/Header";
import QuickLinks from "@/components/QuickLinks";
import HeroBanner from "@/components/HeroBanner";
import Car360Embed from "@/components/Car360Embed";
import CapitalBeauty from "@/components/CapitalBeauty";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import NewsFeed from "@/components/NewsFeed";
import Footer from "@/components/Footer";
import {
  getHomepage,
  getModels,
  getCategories,
  getCapitalBeauty,
} from "@/lib/fetch-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [homepage, models, categories, capitalBeauty] = await Promise.all([
    getHomepage(),
    getModels(),
    getCategories(),
    getCapitalBeauty(),
  ]);

  return (
    <>
      <QuickLinks />
      <Header homepage={homepage} models={models} categories={categories} />
      <main className="habetlouta">
        <HeroBanner homepage={homepage} />
        <Car360Embed />
        <CapitalBeauty data={capitalBeauty} />
        <ServicesSection />
        <LocationsSection />
        <NewsFeed />
      </main>
      <Footer homepage={homepage} models={models} />
    </>
  );
}

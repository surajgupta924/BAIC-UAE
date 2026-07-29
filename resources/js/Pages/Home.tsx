import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import HeroBanner from "@/components/HeroBanner";
import Car360Embed from "@/components/Car360Embed";
import CapitalBeauty from "@/components/CapitalBeauty";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import NewsFeed from "@/components/NewsFeed";
import type { CapitalBeautyData, HomepageData } from "@/lib/api";
import { usePage } from "@inertiajs/react";

type Props = {
  capitalBeauty: CapitalBeautyData;
};

export default function Home({ capitalBeauty }: Props) {
  const { homepage } = usePage().props as { homepage: HomepageData };

  return (
    <SiteChrome home>
      <Head title="BAIC SUV Off-road and On-road Experience" />
      <HeroBanner homepage={homepage} />
      <Car360Embed />
      <CapitalBeauty data={capitalBeauty} />
      <ServicesSection />
      <LocationsSection />
      <NewsFeed />
    </SiteChrome>
  );
}

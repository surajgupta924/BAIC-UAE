import SiteChrome from "@/components/SiteChrome";
import OverviewPageView from "@/components/OverviewPage";
import { getOverview } from "@/lib/fetch-data";

export const metadata = {
  title: "Overview | BAIC UAE",
  description:
    "Explore top Chinese cars in UAE with BAIC. Discover Al Shaali Moto, exclusive distributor, and our network across the GCC.",
};

export default async function OverviewPage() {
  const data = await getOverview();

  return (
    <SiteChrome>
      <OverviewPageView data={data} />
    </SiteChrome>
  );
}

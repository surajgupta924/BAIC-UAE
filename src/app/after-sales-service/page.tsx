import SiteChrome from "@/components/SiteChrome";
import AfterSalesServicePageView from "@/components/AfterSalesServicePage";
import {
  getAfterSalesService,
  getFeatureServices,
} from "@/lib/fetch-data";

export const metadata = {
  title: "After-Sales Service | BAIC UAE",
  description:
    "Find car offers in the UAE at BAIC – dedicated after-sales care, genuine parts, and professional support.",
};

export default async function AfterSalesServicePage() {
  const [data, features] = await Promise.all([
    getAfterSalesService(),
    getFeatureServices(),
  ]);

  return (
    <SiteChrome>
      <AfterSalesServicePageView data={data} features={features} />
    </SiteChrome>
  );
}

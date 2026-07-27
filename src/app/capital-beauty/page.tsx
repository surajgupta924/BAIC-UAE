import SiteChrome from "@/components/SiteChrome";
import CapitalBeautyPageView from "@/components/CapitalBeautyPage";
import { getCapitalBeauty } from "@/lib/fetch-data";

export const metadata = {
  title: "Capital Beauty | BAIC UAE",
  description:
    "Experience the beauty and elegance of BAIC vehicles. Discover our premium car designs and features.",
};

export default async function CapitalBeautyPage() {
  const data = await getCapitalBeauty();

  return (
    <SiteChrome>
      <CapitalBeautyPageView data={data} />
    </SiteChrome>
  );
}

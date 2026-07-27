import SiteChrome from "@/components/SiteChrome";
import VisionPageView from "@/components/VisionPage";
import { getVision } from "@/lib/fetch-data";

export const metadata = {
  title: "Vision | BAIC UAE",
  description:
    "Discover BAIC’s future vision – innovation, sustainability, and excellence driving next-gen automotive solutions.",
};

export default async function VisionPage() {
  const items = await getVision();

  return (
    <SiteChrome>
      <VisionPageView items={items} />
    </SiteChrome>
  );
}

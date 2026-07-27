import SiteChrome from "@/components/SiteChrome";
import ResearchDevelopmentPageView from "@/components/ResearchDevelopmentPage";
import { getResearchDevelopment } from "@/lib/fetch-data";

export const metadata = {
  title: "Research & Development | BAIC UAE",
  description:
    "Discover BAIC's cutting-edge research and development in automotive technology and innovation.",
};

export default async function ResearchDevelopmentPage() {
  const data = await getResearchDevelopment();

  return (
    <SiteChrome>
      <ResearchDevelopmentPageView data={data} />
    </SiteChrome>
  );
}

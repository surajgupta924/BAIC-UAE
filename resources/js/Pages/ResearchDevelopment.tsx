import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import ResearchDevelopmentPageView from "@/components/ResearchDevelopmentPage";
import type { ResearchDevelopmentData } from "@/lib/api";

export default function ResearchDevelopment({ data }: { data: ResearchDevelopmentData }) {
  return (
    <SiteChrome>
      <Head title="POWER" />
      <ResearchDevelopmentPageView data={data} />
    </SiteChrome>
  );
}

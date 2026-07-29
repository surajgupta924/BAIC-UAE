import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import OverviewPageView from "@/components/OverviewPage";
import type { OverviewData } from "@/lib/api";

export default function AboutBaic({ data }: { data: OverviewData }) {
  return (
    <SiteChrome>
      <Head title="About BAIC" />
      <OverviewPageView data={data} />
    </SiteChrome>
  );
}

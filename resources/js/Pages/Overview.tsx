import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import OverviewPageView from "@/components/OverviewPage";
import type { OverviewData } from "@/lib/api";

export default function Overview({ data }: { data: OverviewData }) {
  return (
    <SiteChrome>
      <Head title="Overview" />
      <OverviewPageView data={data} />
    </SiteChrome>
  );
}

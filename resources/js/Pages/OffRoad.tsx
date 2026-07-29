import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import OffRoadPageView from "@/components/OffRoadPage";
import type { OffRoadData } from "@/lib/api";

export default function OffRoad({ data }: { data: OffRoadData }) {
  return (
    <SiteChrome>
      <Head title="Off-Road" />
      <OffRoadPageView data={data} />
    </SiteChrome>
  );
}

import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import CapitalBeautyPageView from "@/components/CapitalBeautyPage";
import type { CapitalBeautyData } from "@/lib/api";

export default function CapitalBeauty({ data }: { data: CapitalBeautyData }) {
  return (
    <SiteChrome>
      <Head title="Capital Beauty" />
      <CapitalBeautyPageView data={data} />
    </SiteChrome>
  );
}

import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import AfterSalesServicePageView from "@/components/AfterSalesServicePage";
import type { AfterSalesServiceData } from "@/lib/api";

export default function AfterSalesService({ data }: { data: AfterSalesServiceData }) {
  return (
    <SiteChrome>
      <Head title="After-Sales Service" />
      <AfterSalesServicePageView data={data} />
    </SiteChrome>
  );
}

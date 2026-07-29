import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import VisionPageView from "@/components/VisionPage";
import type { VisionItem } from "@/lib/api";

export default function Vision({ items }: { items: VisionItem[] }) {
  return (
    <SiteChrome>
      <Head title="Vision" />
      <VisionPageView items={items} />
    </SiteChrome>
  );
}

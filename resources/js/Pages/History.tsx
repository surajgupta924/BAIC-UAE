import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import HistoryPageView from "@/components/HistoryPage";
import type { HistoryItem } from "@/lib/api";

export default function History({ items }: { items: HistoryItem[] }) {
  return (
    <SiteChrome>
      <Head title="History" />
      <HistoryPageView items={items} />
    </SiteChrome>
  );
}

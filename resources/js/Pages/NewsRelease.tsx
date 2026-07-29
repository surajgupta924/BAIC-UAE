import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import NewsReleasePageView from "@/components/NewsReleasePage";
import type { NewsItem } from "@/lib/api";

export default function NewsRelease({ items }: { items: NewsItem[] }) {
  return (
    <SiteChrome>
      <Head title="News Release" />
      <NewsReleasePageView items={items} />
    </SiteChrome>
  );
}

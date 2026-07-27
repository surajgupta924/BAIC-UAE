import SiteChrome from "@/components/SiteChrome";
import NewsReleasePageView from "@/components/NewsReleasePage";
import { getNews } from "@/lib/fetch-data";

export const metadata = {
  title: "News Release",
  description:
    "Discover new car offers in the UAE at BAIC – unbeatable deals on top-quality vehicles. Don’t miss special discounts!",
};

export default async function NewsReleasePage() {
  const items = await getNews();

  return (
    <SiteChrome>
      <NewsReleasePageView items={items} />
    </SiteChrome>
  );
}

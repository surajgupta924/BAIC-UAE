import SiteChrome from "@/components/SiteChrome";
import HistoryPageView from "@/components/HistoryPage";
import { getHistory } from "@/lib/fetch-data";

export const metadata = {
  title: "History | BAIC UAE",
  description:
    "Find the best Chinese car brands at BAIC. Quality, innovation, and reliability in every vehicle.",
};

export default async function HistoryPage() {
  const items = await getHistory();

  return (
    <SiteChrome>
      <HistoryPageView items={items} />
    </SiteChrome>
  );
}

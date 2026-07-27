import SiteChrome from "@/components/SiteChrome";
import OffRoadPageView from "@/components/OffRoadPage";
import { getOffRoad } from "@/lib/fetch-data";

export const metadata = {
  title: "Off-Road Vehicles | BAIC UAE",
  description:
    "Discover our rugged off-road vehicles built for adventure and performance.",
};

export default async function OffRoadPage() {
  const data = await getOffRoad();

  return (
    <SiteChrome>
      <OffRoadPageView data={data} />
    </SiteChrome>
  );
}

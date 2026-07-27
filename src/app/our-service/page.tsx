import SiteChrome from "@/components/SiteChrome";
import OurServicePageView from "@/components/OurServicePage";

export const metadata = {
  title: "Our Service",
};

export default function OurServicePage() {
  return (
    <SiteChrome>
      <OurServicePageView />
    </SiteChrome>
  );
}

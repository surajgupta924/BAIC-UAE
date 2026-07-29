import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import OurServicePageView from "@/components/OurServicePage";

export default function OurService() {
  return (
    <SiteChrome>
      <Head title="Our Service" />
      <OurServicePageView />
    </SiteChrome>
  );
}

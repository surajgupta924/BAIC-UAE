import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import SubscribePageView from "@/components/SubscribePage";

export default function Subscribe() {
  return (
    <SiteChrome>
      <Head title="Subscribe" />
      <SubscribePageView />
    </SiteChrome>
  );
}

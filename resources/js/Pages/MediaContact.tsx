import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import MediaContactPageView from "@/components/MediaContactPage";

export default function MediaContact() {
  return (
    <SiteChrome>
      <Head title="Media Contact" />
      <MediaContactPageView />
    </SiteChrome>
  );
}

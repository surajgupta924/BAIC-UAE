import SiteChrome from "@/components/SiteChrome";
import MediaContactPageView from "@/components/MediaContactPage";

export const metadata = {
  title: "Media Contact Page",
};

export default function MediaContactPage() {
  return (
    <SiteChrome>
      <MediaContactPageView />
    </SiteChrome>
  );
}

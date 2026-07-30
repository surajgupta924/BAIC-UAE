import { Head } from "@inertiajs/react";
import { ContentPage } from "@/components/ContentPage";
import { SITE_NAME } from "@/lib/site";

export default function AboutOmniAuto() {
  return (
    <>
      <Head title="About Omni Auto" />
      <ContentPage title="About Omni Auto">
        <h2 className="mb-3">About Omni Auto</h2>
        <p>
          Omni Auto is the digital and customer network behind {SITE_NAME} —
          connecting Nigerian drivers to BAIC and Arcfox vehicles, after-sales
          care, and test-drive booking in one place.
        </p>
        <p>
          Through Omni Auto we bring model information, service requests, and
          dealership support closer to customers across Lagos and beyond —
          modern mobility, local service.
        </p>
      </ContentPage>
    </>
  );
}

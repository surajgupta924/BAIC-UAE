import { Head } from "@inertiajs/react";
import { ContentPage } from "@/components/ContentPage";

export default function AboutArcfox() {
  return (
    <>
      <Head title="About Arcfox" />
      <ContentPage title="About Arcfox">
        <h2 className="mb-3">About Arcfox</h2>
        <p>
          Arcfox is BAIC&apos;s new-energy brand — focused on intelligent electric
          mobility with distinctive design and advanced battery technology.
        </p>
        <p>
          At Omni Auto Nigeria, explore the Arcfox lineup including the Arcfox T1
          and Arcfox T5, with local sales advice and after-sales support tailored
          for Nigerian roads.
        </p>
      </ContentPage>
    </>
  );
}

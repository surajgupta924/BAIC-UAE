import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import ConceptCarPageView from "@/components/ConceptCarPage";
import type { ConceptCarData } from "@/lib/api";

export default function ConceptCar({ data }: { data: ConceptCarData }) {
  return (
    <SiteChrome>
      <Head title="Concept Car" />
      <ConceptCarPageView data={data} />
    </SiteChrome>
  );
}

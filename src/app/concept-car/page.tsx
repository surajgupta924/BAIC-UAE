import SiteChrome from "@/components/SiteChrome";
import ConceptCarPage from "@/components/ConceptCarPage";
import { getConceptCar } from "@/lib/fetch-data";

export const metadata = {
  title: "Concept Car | BAIC UAE",
  description:
    "Explore BAIC JOY concept vehicles that preview the future of design, electrification, and connected driving.",
};

export default async function Page() {
  const data = await getConceptCar();

  return (
    <SiteChrome>
      <ConceptCarPage data={data} />
    </SiteChrome>
  );
}

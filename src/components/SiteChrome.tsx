import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickLinks from "@/components/QuickLinks";
import {
  getHomepage,
  getModels,
  getCategories,
} from "@/lib/fetch-data";

export default async function SiteChrome({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [homepage, models, categories] = await Promise.all([
    getHomepage(),
    getModels(),
    getCategories(),
  ]);

  return (
    <>
      <QuickLinks />
      <Header homepage={homepage} models={models} categories={categories} />
      <main className="habetlouta inner-page">
        {title ? (
          <div className="page-hero-title">
            <div className="container py-5">
              <h1 className="text-uppercase mb-0">{title}</h1>
            </div>
          </div>
        ) : null}
        {children}
      </main>
      <Footer homepage={homepage} models={models} />
    </>
  );
}

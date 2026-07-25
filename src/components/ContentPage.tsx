import SiteChrome from "@/components/SiteChrome";

export function ContentPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SiteChrome title={title}>
      <div className="container py-5">
        <div className="overviewp">{children}</div>
      </div>
    </SiteChrome>
  );
}

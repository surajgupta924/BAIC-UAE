import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import { COMPANY_NAME } from "@/lib/site";

export default function Legal({ title }: { title: string; slug: string }) {
  return (
    <SiteChrome title={title}>
      <Head title={title} />
      <div className="container py-5">
        <p className="text-muted">
          Please refer to {COMPANY_NAME} legal documentation for the full{" "}
          {title.toLowerCase()}.
        </p>
      </div>
    </SiteChrome>
  );
}

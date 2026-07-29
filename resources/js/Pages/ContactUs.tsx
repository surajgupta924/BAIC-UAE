import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import ContactUsPageView from "@/components/ContactUsPage";

export default function ContactUs({ nationalities }: { nationalities?: string[] }) {
  return (
    <SiteChrome>
      <Head title="Contact Us" />
      <ContactUsPageView />
    </SiteChrome>
  );
}

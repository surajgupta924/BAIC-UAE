import SiteChrome from "@/components/SiteChrome";
import ContactUsPageView from "@/components/ContactUsPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Need help? Contact BAIC UAE for inquiries. Reach us via phone, email or visit our locations today!",
};

export default function ContactUsPage() {
  return (
    <SiteChrome>
      <ContactUsPageView />
    </SiteChrome>
  );
}

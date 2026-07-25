import SiteChrome from "@/components/SiteChrome";
import TestDriveForm from "@/components/TestDriveForm";

export const metadata = {
  title: "Test Drive | BAIC UAE",
};

export default function TestDrivePage() {
  return (
    <SiteChrome title="Test Drive">
      <div className="container py-5">
        <p className="mb-4">
          Book a BAIC test drive and experience off-road and on-road
          performance with Al Shaali Moto across the UAE.
        </p>
        <TestDriveForm />
      </div>
    </SiteChrome>
  );
}

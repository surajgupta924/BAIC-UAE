import { Head } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import TestDriveForm from "@/components/TestDriveForm";

export default function TestDrive() {
  return (
    <SiteChrome title="Test Drive">
      <Head title="Test Drive" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <TestDriveForm />
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}

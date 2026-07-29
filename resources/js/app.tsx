import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";

const appName = import.meta.env.VITE_APP_NAME || "BAIC Nigeria";

createInertiaApp({
  title: (title) => (title ? `${title} | ${appName}` : appName),
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
    const page = pages[`./Pages/${name}.tsx`];
    if (!page) {
      throw new Error(`Inertia page not found: ${name}`);
    }
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: "#e31837",
  },
});

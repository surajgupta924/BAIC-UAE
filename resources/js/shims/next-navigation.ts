import { usePage } from "@inertiajs/react";

export function usePathname(): string {
  const page = usePage();
  const url = page.url || "/";
  return url.split("?")[0] || "/";
}

export function useRouter() {
  return {
    push: (href: string) => {
      window.location.href = href;
    },
    replace: (href: string) => {
      window.location.replace(href);
    },
  };
}

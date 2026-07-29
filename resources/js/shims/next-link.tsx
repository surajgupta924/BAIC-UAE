import { Link } from "@inertiajs/react";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  href: string;
  children?: ReactNode;
  className?: string;
  onClick?: ComponentProps<"a">["onClick"];
  id?: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
};

export default function NextLink({ href, children, ...rest }: Props) {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

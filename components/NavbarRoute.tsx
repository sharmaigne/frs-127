"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Component for a single route in the Navbar
 * @param text - The text to display for the route
 * @param href - The href to navigate to when the route is clicked
 */
const NavbarRoute = ({ text, href }: { text: string; href: { pathname: string; query?: Object };}) => {
  const firstRoute = "/" + usePathname().split("/")[1];
  const isCurrentRoute = firstRoute === href.pathname;
  return (
    <Link
      href={href.pathname}
      className={`flex items-center text-white hover:text-accent ml-6 px-3
                  ${isCurrentRoute && "text-accent border-b-2 border-accent font-bold"}`}
    >
      {text}
    </Link>
  );
};

export default NavbarRoute;

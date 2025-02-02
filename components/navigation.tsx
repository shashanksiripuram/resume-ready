"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/mock-users",
    label: "Users",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about-us",
    label: "About",
  },
  {
    href: "/contact-us",
    label: "Contact",
  },
  {
    href: "/docs",
    label: "Docs",
  },
];

interface NavigationProps {
  setIsOpen?: (open: boolean) => void;
}

export function Navigation({ setIsOpen }: NavigationProps) {
  const pathname = usePathname();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={cn(
      "flex",
      isMobile ? "flex-col space-y-4" : "items-center space-x-6"
    )}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          onClick={handleClick}
          className={cn(
            "text-sm transition-colors hover:text-primary",
            pathname === route.href
              ? "font-bold mr-4 text-gray-900 bg-yellow-300 py-2 px-4 rounded-lg shadow-md"
              : "text-blue-500 mr-4 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-700",
            isMobile && "text-base py-2"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

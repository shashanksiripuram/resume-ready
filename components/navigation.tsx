"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        href="/"
        className={pathname === "/" 
          ? "font-bold mr-4 text-gray-900 bg-yellow-300 py-2 px-4 rounded-lg shadow-md"
          : "text-blue-500 mr-4 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-700"}
      >
        Home
      </Link>
      <Link
        href="/mock-users"
        className={
          pathname.startsWith("/mock-users")
      ? "font-bold mr-4 text-gray-900 bg-yellow-300 py-2 px-4 rounded-lg shadow-md"
      : "text-blue-500 mr-4 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-700"
        }
      >
        Users Data
      </Link>
      <Link
        href="/blog"
        className={
          pathname.startsWith("/blog")
      ? "font-bold mr-4 text-gray-900 bg-yellow-300 py-2 px-4 rounded-lg shadow-md"
      : "text-blue-500 mr-4 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-700"
        }
      >
        Blog
      </Link>
      <Link
  href="/about-us"
  className={
    pathname === "/about-us"
      ? "font-bold mr-4 text-gray-900 bg-yellow-300 py-2 px-4 rounded-lg shadow-md"
      : "text-blue-500 mr-4 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-700"
  }
>
  About Us
</Link>

      <Link
        href="/contact-us"
        className={
          pathname === "/contact-us"
          ? "font-bold mr-4 text-gray-900 bg-yellow-300 py-2 px-4 rounded-lg shadow-md"
          : "text-blue-500 mr-4 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-700"
        }
      >
        Contact Us
      </Link>
      <Link
        href="/docs"
        className={
          pathname === "/docs"
      ? "font-bold mr-4 text-gray-900 bg-yellow-300 py-2 px-4 rounded-lg shadow-md"
      : "text-blue-500 mr-4 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-700"
        }
      >
        Docs
      </Link>
    </nav>
  );
};
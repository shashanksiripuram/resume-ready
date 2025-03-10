import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Palette } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to blog homepage
          </Link>
        </div>
      </div>
  );
}

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogHome() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Home</h1>
      
      {/* Blog Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <Card className="p-4 shadow-md hover:shadow-lg transition">
            <CardHeader>
              <h2 className="text-xl font-semibold">Blog Post First Post</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
              <Button className="mt-4">
                <Link href={`/blog/first-post`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="p-4 shadow-md hover:shadow-lg transition">
            <CardHeader>
              <h2 className="text-xl font-semibold">Blog Post Second Post</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                L, consectetur Inorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neadipiscing elit. Inorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
              <Button className="mt-4">
                <Link href={`/blog/second-post`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        
      </div>
      
      {/* Navigation Links */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <Link href="/about-us" className="text-lg text-blue-600 hover:underline">
          About Us
        </Link>
        <Link href="/contact-us" className="text-lg text-blue-600 hover:underline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

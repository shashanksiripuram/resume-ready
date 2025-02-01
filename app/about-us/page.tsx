import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div className="container mx-auto p-6">
            <Card className="p-6 shadow-md max-w-3xl mx-auto text-center">
                <CardHeader>
                    <h1 className="text-3xl font-bold">About Us</h1>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to <span className="font-semibold">Resume Ready</span>, where we empower job seekers with powerful resume-building tools. Our mission is to simplify the job application process and help professionals craft the perfect resume with ease.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Our platform provides AI-driven features, customizable templates, and career guidance to ensure your resume stands out from the competition. Join us on this journey to professional success!
                    </p>
                </CardContent>
            </Card>
            <div className="mt-6 flex justify-center">
                <Button>
                    <Link href="/blog">Back to Blog</Link>
                </Button>
            </div>
        </div>
    );
}

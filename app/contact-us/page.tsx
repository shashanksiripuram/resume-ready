import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
    return (
        <div className="container mx-auto p-6">
            <Card className="p-6 shadow-md max-w-3xl mx-auto text-center">
                <CardHeader>
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                        If you have any questions or feedback, please don't hesitate to reach out to us.
                    </p>
                    <form className="mt-6 space-y-4">
                        <Input type="text" placeholder="Your Name" className="w-full" />
                        <Input type="email" placeholder="Your Email" className="w-full" />
                        <Textarea placeholder="Your Message" className="w-full" />
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                    <p className="mt-4 text-gray-700">Or email us directly at <span className="font-semibold">abcd@gmail.com</span></p>
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

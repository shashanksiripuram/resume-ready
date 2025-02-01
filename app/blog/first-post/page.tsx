import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FirstPost() {
    return (
        <div className="container mx-auto p-6">
            <Card className="p-6 shadow-md max-w-3xl mx-auto">
                <CardHeader>
                    <h1 className="text-3xl font-bold">First Post</h1>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, saepe. Beatae amet, iusto blanditiis modi doloribus cupiditate, nemo quos non, optio aliquam quasi est porro! Quas exercitationem veniam debitis dolore. <br/><br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, reprehenderit? Soluta minus doloremque pariatur rerum error ut eveniet provident incidunt fugiat, asperiores accusamus est? Autem vero quam earum reprehenderit dignissimos?
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

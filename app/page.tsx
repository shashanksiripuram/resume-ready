
import { Navbar } from "@/components/navbar";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center">
    //   <Button>Button from Shadcn</Button>
    // </div>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* <ResumeBuilder /> */}
        <Button>Button from Shadcn</Button>
      </main>
    </div>
  );
}

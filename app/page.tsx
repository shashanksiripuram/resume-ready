
import { Navbar } from "@/components/navbar";
import {Button} from "@/components/ui/button";
import Hero from "@/components/hero";

export default function Home() {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center">
    //   <Button>Button from Shadcn</Button>
    // </div>
      <div className="container mx-auto px-4 py-8">
        {/* <ResumeBuilder /> */}
        <Hero />
      </div>
  );
}

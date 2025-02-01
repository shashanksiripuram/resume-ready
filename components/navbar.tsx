import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-5">
        <div className="flex items-center gap-2">
          {/* <FileText className="h-6 w-6" /> */}
          <span className="text-xl font-bold">Resume Builder</span>
        </div>
        
        <div>
            <Button variant="outline">
              Sign In
            </Button>
        </div>
      </div>
      {/* <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} /> */}
    </header>
    );
}
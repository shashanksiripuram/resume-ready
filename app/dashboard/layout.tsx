import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Input } from "@/components/ui/input";
import { Bell, LucideBell } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-w-0 flex-1">
        <SidebarTrigger />

        <div className="flex items-center justify-between p-4 rounded-md">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search..."
              className=" placeholder-neutral-500 pr-10 border-purple-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
              🔍
            </span>
          </div>

          {/* Notification Icon */}
          <div className="ml-4">
            <button className="relative p-2 rounded-full hover:bg-purple-200">
              <LucideBell className="w-6 h-6" />
              {/* <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border border-neutral-900"></span> */}
            </button>
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}

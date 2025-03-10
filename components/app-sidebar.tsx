"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuBadge,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { items } from "./dashboard-menu-items";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LucideFileText } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="flex justify-between">
      <SidebarHeader className="">
        {/* <LucideFileText className="h-10 w-10" /> */}
        <Link href="/" className="flex flex-row justify-center items-center pt-5 text-lg md:text-2xl font-bold text-purple-600">
          <img src="/logo.png" alt="" className="h-10 w-10" />
          <div className="flex flex-col">
            <span>Resume Ready</span>
            <span className="text-xs">AI AGENT</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="pt-5">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = item.href ? pathname === item.href : false;

                return (
                  <SidebarMenuItem key={item.title}>
                    {item.items ? (
                      <Collapsible className="w-full group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={cn(
                              "relative py-5 hover:bg-purple-600 hover:text-accent-foreground hover:text-white rounded-md transition-colors",
                              isActive &&
                                "bg-purple-600 text-accent-foreground text-white"
                            )}
                          >
                            <div className="flex items-center gap-2 text-base">
                              {item.icon && <item.icon className="h-5 w-5" />}
                              <span>{item.title}</span>
                            </div>
                            <ChevronRight
                              className={cn(
                                "ml-auto h-4 w-4 shrink-0 transition-transform duration-200",
                                "group-data-[state=open]/collapsible:rotate-90"
                              )}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {item.items.map((subItem) => (
                            <SidebarMenuSub key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "flex flex-col gap-1 px-4 py-2 hover:bg-purple-600 hover:text-accent-foreground hover:text-white rounded-md transition-colors",
                                  pathname === subItem.href &&
                                    "bg-purple-600 text-accent-foreground text-white"
                                )}
                              >
                                <span className="font-medium">
                                  {subItem.title}
                                </span>
                                {/* {subItem.description && (
                                  <span className="text-xs text-muted-foreground">
                                    {subItem.description}
                                  </span>
                                )} */}
                              </Link>
                            </SidebarMenuSub>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link href={item.href || "#"} className="w-full">
                        <SidebarMenuButton
                          className={cn(
                            "py-5 hover:bg-purple-600 hover:text-accent-foreground hover:text-white rounded-md transition-colors",
                            isActive &&
                              "bg-purple-600 text-accent-foreground text-white"
                          )}
                        >
                          <div className="flex items-center gap-2 text-base">
                            {item.icon && <item.icon className="h-5 w-5" />}
                            <span>{item.title}</span>
                          </div>
                        </SidebarMenuButton>
                      </Link>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center">
        <ThemeToggle />
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="secondary">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}

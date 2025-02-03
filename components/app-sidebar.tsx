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

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
        <SidebarHeader className="text-xl font-bold">
            Resume Ready
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
                              "relative",
                              isActive && "bg-accent text-accent-foreground"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              {item.icon && <item.icon className="h-4 w-4" />}
                              <span>{item.title}</span>
                            </div>
                            <ChevronRight className={cn(
                              "ml-auto h-4 w-4 shrink-0 transition-transform duration-200",
                              "group-data-[state=open]/collapsible:rotate-90"
                            )} />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {item.items.map((subItem) => (
                            <SidebarMenuSub key={subItem.href}>
                              <Link 
                                href={subItem.href}
                                className={cn(
                                  "flex flex-col gap-1 px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors",
                                  pathname === subItem.href && "bg-accent text-accent-foreground"
                                )}
                              >
                                <span className="font-medium">{subItem.title}</span>
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
                            isActive && "bg-accent text-accent-foreground"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            {item.icon && <item.icon className="h-4 w-4" />}
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
      <SignedOut>
            <SignInButton mode="modal">
              <Button variant="secondary">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}
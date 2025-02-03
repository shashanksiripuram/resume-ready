import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Mail,
  ShoppingCart,
  BarChart2,
  Bell,
  FolderTree,
  Shield,
  Home,
  ChevronRight,
} from "lucide-react";

// Menu items.
export type SidebarItem = {
  title: string;
  icon?: any;
  href?: string;
  items?: {
    title: string;
    href: string;
    description?: string;
  }[];
};

export const items: SidebarItem[] = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Analytics",
    icon: BarChart2,
    items: [
      {
        title: "Overview",
        href: "/analytics/overview",
        description: "View your analytics overview",
      },
      {
        title: "Reports",
        href: "/analytics/reports",
        description: "Generate and view reports",
      },
      {
        title: "Real-time",
        href: "/analytics/realtime",
        description: "Monitor real-time analytics",
      },
    ],
  },
  {
    title: "Users",
    icon: Users,
    items: [
      {
        title: "All Users",
        href: "/users",
        description: "Manage user accounts",
      },
      {
        title: "Roles",
        href: "/users/roles",
        description: "Manage user roles and permissions",
      },
      {
        title: "Teams",
        href: "/users/teams",
        description: "Manage team structures",
      },
    ],
  },
  {
    title: "Content",
    icon: FileText,
    items: [
      {
        title: "Pages",
        href: "/content/pages",
        description: "Manage website pages",
      },
      {
        title: "Blog Posts",
        href: "/content/posts",
        description: "Manage blog content",
      },
      {
        title: "Media Library",
        href: "/content/media",
        description: "Manage media files",
      },
    ],
  },
  {
    title: "Messages",
    icon: Mail,
    href: "/messages",
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    items: [
      {
        title: "Products",
        href: "/ecommerce/products",
        description: "Manage product catalog",
      },
      {
        title: "Orders",
        href: "/ecommerce/orders",
        description: "View and manage orders",
      },
      {
        title: "Customers",
        href: "/ecommerce/customers",
        description: "Manage customer information",
      },
    ],
  },
  {
    title: "Files",
    icon: FolderTree,
    items: [
      {
        title: "Documents",
        href: "/files/documents",
        description: "View and manage documents",
      },
      {
        title: "Shared",
        href: "/files/shared",
        description: "Access shared files",
      },
      {
        title: "Archives",
        href: "/files/archives",
        description: "View archived files",
      },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      {
        title: "Settings",
        href: "/security/settings",
        description: "Manage security settings",
      },
      {
        title: "Audit Log",
        href: "/security/audit",
        description: "View security audit logs",
      },
      {
        title: "Access Control",
        href: "/security/access",
        description: "Manage access controls",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

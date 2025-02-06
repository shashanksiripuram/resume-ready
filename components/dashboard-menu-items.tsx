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
  LucideFileText,
  LucideFiles,
  LucideHardHat,
  LucideBrainCircuit,
  LucideNavigation
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
  // {
  //   title: "Home",
  //   icon: Home,
  //   href: "/",
  // },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Documents",
    icon: LucideFiles,
    items: [
      {
        title: "Files",
        href: "/dashboard/documents/files",
        description: "View your analytics overview",
      },
      {
        title: "Reports",
        href: "/dashboard/documents/reports",
        description: "Generate and view reports",
      },
      {
        title: "Real-time",
        href: "/dashboard/documents/realtime",
        description: "Monitor real-time analytics",
      },
    ],
  },
  {
    title: "Job Search",
    icon: LucideHardHat,
    items: [
      {
        title: "Explore",
        href: "/dashboard/jobs/explore",
        description: "View your analytics overview",
      },
      {
        title: "Your List",
        href: "/dashboard/jobs/list",
        description: "Monitor real-time analytics",
      },
      {
        title: "History",
        href: "/dashboard/jobs/history",
        description: "Generate and view reports",
      },
    ],
  },
  {
    title: "Resume Builder",
    icon: LucideFileText,
    items: [
      {
        title: "Create New",
        href: "/dashboard/resume/create",
        description: "Create Resume",
      },
      {
        title: "Editor",
        href: "/dashboard/resume/editor",
        description: "Resume Editor WYSIWYG",
      },
      {
        title: "Imports",
        href: "/dashboard/resume/imports",
        description: "Uploaded resumes",
      },
      {
        title: "Exports",
        href: "/dashboard/resume/exports",
        description: "Downlaod edited resumes",
      },
    ],
  },
  {
    title: "AI Auto Apply",
    icon: LucideBrainCircuit,
    items: [
      {
        title: "Customize profile",
        href: "/dashboard/AI-apply/customize",
        description: "Manage user accounts",
      },
      {
        title: "Your List",
        href: "/dashboard/AI-apply/list",
        description: "Manage user roles and permissions",
      },
      {
        title: "History",
        href: "/dashboard/AI-apply/history",
        description: "Manage team structures",
      },
    ],
  },
  {
    title: "Job Tracking",
    icon: LucideNavigation,
    items: [
      {
        title: "Explore",
        href: "/dashboard/jobs/explore",
        description: "View your analytics overview",
      },
      {
        title: "Your List",
        href: "/dashboard/jobs/list",
        description: "Monitor real-time analytics",
      },
      {
        title: "History",
        href: "/dashboard/jobs/history",
        description: "Generate and view reports",
      },
    ],
  },
  // {
  //   title: "Content",
  //   icon: FileText,
  //   items: [
  //     {
  //       title: "Pages",
  //       href: "/content/pages",
  //       description: "Manage website pages",
  //     },
  //     {
  //       title: "Blog Posts",
  //       href: "/content/posts",
  //       description: "Manage blog content",
  //     },
  //     {
  //       title: "Media Library",
  //       href: "/content/media",
  //       description: "Manage media files",
  //     },
  //   ],
  // },
  {
    title: "Messages",
    icon: Mail,
    href: "/messages",
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

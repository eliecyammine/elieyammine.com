import {
  BriefcaseBusinessIcon,
  LayoutDashboardIcon,
  PaperclipIcon,
  SettingsIcon,
} from 'lucide-react';

/// ---------- || SIDEBAR ITEMS || ---------- ///

export const sidebarItems = [
  {
    name: 'Overview',
    link: '/portal',
    icon: <LayoutDashboardIcon size={20} />,
  },
  {
    name: 'Projects',
    link: '/portal/projects',
    icon: <BriefcaseBusinessIcon size={20} />,
  },
  {
    name: 'Blog',
    link: '/portal/blog',
    icon: <PaperclipIcon size={20} />,
  },
  {
    name: 'Settings',
    link: '/portal/settings',
    icon: <SettingsIcon size={20} />,
  },
];

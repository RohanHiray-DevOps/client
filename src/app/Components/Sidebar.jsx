"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  SquareKanban,
  ClipboardCheck,
  UsersRound,
  Calendar,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
 
  const pathname = usePathname();

  return (
    <div className="h-screen border-r border-border  text-text-primary w-64 bg-sidebar">

      {/* Logo */}
      <div className="px-4 py-6 text-center text-xl mb-2 font-semibold">
        Stack-Panel
      </div>

      {/* Menu */}
      <div className="flex flex-col w-full px-3 gap-2">

        <Link
          href="/"
          className={`flex items-center w-full px-4 py-2 rounded transition ${pathname === '/' ? 'bg-linear-to-r from-accent/60 via-accent/40 to-gray-200/40' : ''}`}
        >
          <LayoutDashboard className="mr-2" size={18} />
          Dashboard
        </Link>

        <Link
          href="/projects"
          className={`flex items-center w-full px-4 py-2 rounded transition ${pathname === '/projects' ? 'bg-gradient-to-r from-accent/60 via-accent/40 to-gray-200/40' : ''}`}
        >
          <SquareKanban className="mr-2" size={18} />
          Projects
        </Link>

        <Link
          href="/tasks"
          className={`flex items-center w-full px-4 py-2 rounded transition ${pathname === '/tasks' ? 'bg-gradient-to-r from-accent/60 via-accent/40 to-gray-200/40' : ''}`}
        >
          <ClipboardCheck className="mr-2" size={18} />
          My Tasks
        </Link>

        <Link
          href="/team"
          className={`flex items-center w-full px-4 py-2 rounded transition ${pathname === '/team' ? 'bg-linear-to-r from-accent/60 via-accent/40 to-gray-200/40' : ''}`}
        >
          <UsersRound className="mr-2" size={18} />
          Team Members
        </Link>

        <Link
          href="/attendance"
          className={`flex items-center w-full px-4 py-2 rounded transition ${pathname === '/attendance' ? 'bg-linear-to-r from-accent/60 via-accent/40 to-gray-200/40' : ''}`}
        >
          <Calendar className="mr-2" size={18} />
          Attendance
        </Link>

        <Link
          href="/settings"
          className={`flex items-center w-full px-4 py-2 rounded transition ${pathname === '/settings' ? 'bg-linear-to-r from-accent/60 via-accent/40 to-gray-200/40' : ''}`}
        >
          <Settings className="mr-2" size={18} />
          Settings
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;
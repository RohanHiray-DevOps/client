"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, User, Bell, Mail, CirclePower } from "lucide-react";

const Navbar = () => {
  const [date, setDate] = useState("");

  
  useEffect(() => {
    const fetchDate = () => {
      const today = new Date();

      const formattedDate = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setDate(formattedDate);
    };
    fetchDate();
  }, [date]);


  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="Navbar -ml-0.5 bg-navbar border-b border-border shadow-sm text-text-primary flex justify-between items-center w-full h-16 px-4">

      {/* Left Section */}
      <div className="MenuBar-SearchBar">
        <ul className="flex items-center gap-4 list-none p-2">

          <li>
            <Link href="/">
              <MenuIcon />
            </Link>
          </li>

          <li className="flex items-center w-full max-w-md border border-gray-300 rounded-xl px-4 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
            <input
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              type="text"
              placeholder="Search"
            />
          </li>

        </ul>
      </div>

      {/* Right Section */}
      <div className="Profile-Date-mail">
        <ul className="flex items-center gap-6 list-none p-2">

          <li>
            <Link href="/calendar">
              <span className="px-4 py-2 border shadow-sm border-border rounded-full">
                {date}
              </span>
            </Link>
          </li>

          <li>
            <Link href="/messages">
              <Mail />
            </Link>
          </li>

          <li>
            <Link href="/notifications">
              <Bell />
            </Link>
          </li>

          <li>
            <Link href="/profile">
              <User />
            </Link>
          </li>

          <li>
            <button onClick={toggleDarkMode}>
              <CirclePower />
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;





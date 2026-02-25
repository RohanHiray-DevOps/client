'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MenuIcon,User,Bell,Mail} from "lucide-react";


const Navbar = () => {

   const [date, setDate] = useState("");

  useEffect(() => {
    const fetchDate =() => {
      const today = new Date();
      setDate(today.toLocaleDateString());
      
    };
    fetchDate();
  }, []);



  return (
    <>
      <div className="Navbar flex justify-between items-center w-full h-16">
        <div className="MenuBar-SearchBar ">
          <ul className="flex item-center  gap-6 list-none p-2">
            <li className="">
          <button>
            <MenuIcon className="pt-2"/>
          </button>
          </li>
          <li className="flex items-center w-full max-w-md border border-gray-300 rounded-xl px-4 py-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
          <form action="">
            <input
            className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              title="Search"
              type="text"
              placeholder="Search"
              name="Search"
              id="Search"
            />
          </form>
          </li>
          </ul>
        </div>
        <div className="Profile-Date-mail">
          <ul className="flex  gap-6 list-none p-2">
            <li><button>{date}</button></li>
           <li> <button><Mail/></button></li>
           <li><button><Bell/></button></li>
           <li><button>
            <User/>
            </button></li>
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";


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
          <ul className="flex  gap-6 list-none p-2">
            <li>
          <button>
            <Image src={"Menu.svg"} alt="Example" width={10} height={10} />
          </button>
          </li>
          <li>
          <form action="">
            <input
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
           <li> <button>email</button></li>
           <li><button>notification</button></li>
           <li><button>profile</button></li>
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

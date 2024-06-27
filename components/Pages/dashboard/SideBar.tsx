"use client";
import { sidebarLinks } from "@/utils/constants";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import {  LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SideBarLinkComp from "./SideBarLinkComp";
import ProfileTabShow from "@/components/Common/ProfileTabShow";

const Sidebar = ({user}:{user:any}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen flex flex-col justify-between relative bg-base-200   transition-all duration-300 ease-in-out transform ${
        isOpen ? "w-72" : "w-20"
      } p-4`}
    >
        <div>

        
      <div className="flex items-center justify-between  text-base-100">
        <h1
          className={`text-xl font-bold text-primary-content ${
            isOpen ? "" : "hidden"
          }`}
        >
          Supalink
        </h1>
        <button
          onClick={toggleSidebar}
          className={`text-primary-content flex justify-center btn btn-ghost p-2 min-h-0 h-auto  ${
            isOpen ? "" : "w-full"
          }`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div className="mt-3  ">
        <div className="flex flex-col gap-2">
          {sidebarLinks.map((link, index) => (
            <SideBarLinkComp link={link} key={index} isOpen={isOpen}/>
          ))}
        </div>
      </div>
      </div>
      <div className=" justify-self-end flex flex-col gap-2 mb-3">
        <ProfileTabShow user={user} isOpen={isOpen}/>
        <LogoutLink className="btn w-full btn-ghost flex justify-between items-center">
          <h1 className={`${isOpen ? '' : 'hidden'}`}>Log Out</h1>
          <LogOut className="h-5 w-auto"/>
        </LogoutLink>
      </div>
    </div>
  );
};

export default Sidebar;

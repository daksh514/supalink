import Link from "next/link";
import React from "react";

function SideBarLinkComp({
  link,
  isOpen,
}: {
  link: { href: string; title: string; icon: React.ReactNode };
  isOpen: boolean;
}) {
  return (
    <div className="flex items-center  cursor-pointer">
      <Link
        href={link.href}
        className={`flex justify-between w-full  btn shadow-none  ${
          !isOpen ? "min-h-0 p-3" : ""
        }`}
      >
        <h1
          className={`text-base font-semibold transition-all ${
            isOpen ? "" : "hidden"
          }`}
        >
          {link.title}
        </h1>
        <h1 className={`${isOpen ? "hidden" : ""}`}>{link.icon}</h1>
      </Link>
    </div>
  );
}

export default SideBarLinkComp;

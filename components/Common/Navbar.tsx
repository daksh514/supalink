import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 px-0 py-4">
        <div className="flex-1 px-0">
          <a className="font-semibold text-xl">Supalink</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/dashboard'} className="font-semibold btn bg-opacity-10">Get Started</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

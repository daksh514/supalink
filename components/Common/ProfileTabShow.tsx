import { Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProfileTabShow({ user, isOpen }: { user: any; isOpen?: boolean }) {
  // console.log(user);
  return (
    <div>
      <div className="btn w-full justify-between">
        <div className={`flex items-center gap-2 ${isOpen ? "" : "hidden"}`}>
          <Image
            src={user.profileImage}
            alt="user profile picture"
            width={100}
            height={100}
            className="rounded-full h-10 w-auto"
          />
          <div className="max-w-[60%] overflow-x-hidden">
            <h1>{user.firstName}</h1>
          </div>
        </div>
        <Settings className="h-5 w-auto" />
      </div>
    </div>
  );
}

export default ProfileTabShow;

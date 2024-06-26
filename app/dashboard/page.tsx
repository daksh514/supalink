import { getUserByKindeId } from "@/actions/userActions";
import GhostBtn from "@/components/Common/GhostBtn";
import NewLinkModal from "@/components/Custom/NewLinkModal";
import LinksComp from "@/components/Pages/dashboard/LinksComp";
import SideBar from "@/components/Pages/dashboard/SideBar";
import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { redirect } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore} from "next/cache";
import { NextResponse } from "next/server";


async function page() {
  noStore()
  const user = await getUserByKindeId();

  if (!user?.domainSlug) {
    redirect("/chooseslug");
  }

  return (
    <div>
      <div className="widthContainer max-w-5xl pt-5">
        <div className="flex ">
          <div className="w-4/5">
            <div className="w-3/4">
            <div>
              <h1>Edit Page Content</h1>
              <NewLinkModal userId={user.id} userSlug={user.domainSlug}/>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              {
                user.links.map((link,index)=>(
                  <LinksComp linkData={link} key={index}/>
                ))
              }
            </div>
            </div>
          </div>
          <div className="mt-5">
            <iframe
              src={`/${user.domainSlug}`}
              className="shadow-lg border-4 aspect-[9/16] h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

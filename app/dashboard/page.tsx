import { getUserByKindeId } from "@/actions/userActions";
import GhostBtn from "@/components/Common/GhostBtn";
import NewLinkModal from "@/components/Custom/NewLinkModal";
import LinksComp from "@/components/Pages/dashboard/LinksComp";
import SideBar from "@/components/Pages/dashboard/SideBar";
import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const kindeUser = (await getUser()) as KindeUser;
  const user = await getUserByKindeId(kindeUser.id);

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
                user.links.map((link)=>(
                  <LinksComp linkData={link}/>
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

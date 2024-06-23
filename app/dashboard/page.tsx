import { getUserByKindeId } from "@/actions/userActions";
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
      <h1>I am hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
    </div>
  );
}

export default page;

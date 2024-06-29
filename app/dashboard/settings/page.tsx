import { getUserByKindeId } from "@/actions/userActions";
import SlugForm from "@/components/Pages/chooseSlug-Page/SlugForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = (await getUser()) as KindeUser;
  
  const userData = await getUserByKindeId(user.id);
  return (
    <div className=" widthContainer pt-5 ">
      <div className="">
        <h1 className="label text-sm font-semibold">Update Page Link</h1>
        <SlugForm
          userId={user.id}
          btnLabel="Update link"
          defaultInputValue={userData?.domainSlug as string}
          isWFull
        />
      </div>
    </div>
  );
}

export default page;

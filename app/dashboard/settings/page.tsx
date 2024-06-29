import { getUserByKindeId } from "@/actions/userActions";
import SlugForm from "@/components/Pages/chooseSlug-Page/SlugForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";

async function page() {
  unstable_noStore()
 
  const userData = await getUserByKindeId();
  return (
    <div className=" widthContainer pt-5 ">
      <div className="">
        <h1 className="label text-sm font-semibold">Update Page Link</h1>
        <SlugForm
          userId={userData?.id as string}
          btnLabel="Update link"
          defaultInputValue={userData?.domainSlug as string}
          isWFull
        />
      </div>
    </div>
  );
}

export default page;

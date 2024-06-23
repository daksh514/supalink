import SlugForm from "@/components/Pages/chooseSlug-Page/SlugForm";
import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser() as KindeUser;
  const user = await prisma.user.findUnique({
    where: {
      id: kindeUser.id,
    },
    select: {
      domainSlug: true,
    },
  });
  if (user?.domainSlug) {
    redirect("/dashboard");
  }
  return (
    <div className=" mt-32 widthContainer ">
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-2xl font-semibold">Choose your URL</h1>
        <SlugForm userId={kindeUser.id}/>
      </div>
    </div>
  );
}

export default page;

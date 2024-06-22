import prisma from "@/utils/db";
import {
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();
  if (!kindeUser) return redirect("/api/auth/login");
  const user = await prisma.user.findUnique({
    where: {
      id: kindeUser.id,
    },
    select: {
      domainSlug: true
    }
  });
  if(!user?.domainSlug){
    redirect("/dashboard/chooseslug");
  }
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}

export default page;

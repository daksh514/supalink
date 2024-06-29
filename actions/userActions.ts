"use server"

import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore} from "next/cache";
import { redirect } from "next/navigation";


export async function getUserByKindeId() {
  const {getUser} = getKindeServerSession()
  const kindeUser = await getUser()
  if(!kindeUser) return redirect('/api/auth/login')
  const userId = kindeUser.id
  
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      domainSlug: true,
      links: true,
      email: true,
      firstName: true,
      lastName: true,
      profileImage: true,

    },
  });

  return user;
}
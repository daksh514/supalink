"use server"

import prisma from "@/utils/db";


export async function getUserByKindeId(userId: string) {
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
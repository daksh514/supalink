"use server"

import prisma from "@/utils/db";


export async function getUserByKindeId(userId: string){
    const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      return user;
}
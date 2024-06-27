"use server";

import prisma from "@/utils/db";

export async function findDataBySlug(slug: string) {
    const slugData = await prisma.user.findUnique({
        where: {
            domainSlug: slug,
        },
    });

    return slugData;
}

export async function createPageBySlug(slug: string, userIs: string) {
    const slugData = await findDataBySlug(slug);
    if (slugData)
        return {
            status: "error",
            message: "Page with same URL already exists",
        };

    try {
        await prisma.user.update({
            where: {
                id: userIs,
            },
            data: {
                domainSlug: slug,
            },
        });

        return {
            status: "success",
            message: "Page created successfully",
        };
    } catch (error) {
        return {
            status: "error",
            message: "Something went wrong",
        };
    }
}



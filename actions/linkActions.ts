"use server"
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import * as zod from 'zod'

const newLinkSchema = zod.object({
    linkTitle: zod.string().min(1, {
        message: 'Link title is required',
    }),
    linkURL: zod.string().min(1, {
        message: 'Link URL is required',
    })
})


export async function getLinkById(id: string){
    const link = await prisma.user.findUnique({
        where: {
            id: id,
        },
        select: {
            links: {
                orderBy: {
                    orderInList: 'asc'
                }
            }
        }
    })

    return link;
}


export async function createLink(formData: FormData, userId: string, userSlug: string) {
    const dataObject = {
        linkTitle: formData.get('linkTitle'),
        linkURL: formData.get('linkURL'),
    }
    const validated = newLinkSchema.safeParse(dataObject)
    if (!validated.success) {
        return {
            status: 'error',
            message: validated.error.errors[0].message,
        }
    }
    try {
        const links = await getLinkById(userId)
        await prisma.link.create({
            data: {
                title: validated.data.linkTitle,
                url: validated.data.linkURL,
                userId: userId,
                orderInList: links?.links ? links.links.length : 0
            },
        })

        revalidatePath('/dashboard')
        revalidatePath('/'+userSlug)

        return {
            status: 'success',
            message: 'Link created successfully',
        }
    } catch (error) {
        return {
            status: 'error',
            message: 'Something went wrong, try again later',
        }
    }

}
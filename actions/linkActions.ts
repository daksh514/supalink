"use server"
import prisma from '@/utils/db'
import * as zod from 'zod'

const newLinkSchema = zod.object({
    linkTitle: zod.string().min(1, {
        message: 'Link title is required',
    }),
    linkURL: zod.string().min(1, {
        message: 'Link URL is required',
    })
})

export async function createLink(formData: FormData, userId: string) {
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
        await prisma.link.create({
            data: {
                title: validated.data.linkTitle,
                url: validated.data.linkURL,
                userId: userId
            },
        })

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
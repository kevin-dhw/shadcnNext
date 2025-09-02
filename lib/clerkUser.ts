import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const checkUser = async () => {
    const user = await currentUser()
    if(!user) return null
    const dbUser = await prisma.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    })
    if (dbUser) return dbUser
    const newUser = await prisma.user.create({
        data: {
            clerkUserId: user.id,
            email: user.emailAddresses[0]?.emailAddress || '',
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            imageUrl: user.imageUrl || ''
        }
    })
    return newUser
}
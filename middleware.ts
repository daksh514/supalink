import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/dashboard/chooseslug"]

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (protectedRoutes.includes(pathname)) {
        const { getUser } = getKindeServerSession()
        const kindeUser = await getUser()

        if (!kindeUser) return NextResponse.redirect(new URL('/api/auth/login', request.url).toString())
       

    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
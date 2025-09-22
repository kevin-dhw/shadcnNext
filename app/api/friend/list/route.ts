import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request:NextRequest) {
    const  param  = request.nextUrl.searchParams.get("page")
    const page = param ? parseInt(param) : 1
    const list = await prisma.student.findMany({
        skip: 0,
        take: 10,
        orderBy: {
           updatedAt: 'desc'
        }
    })
    return NextResponse.json({code: 0, data: {list}})
}
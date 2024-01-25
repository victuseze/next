import { NextResponse } from "next/server"

export function middleware(request){
    console.log({request})
    return NextResponse.json({success: "Middleware Is Successful!"})
}

export const config = {
    matcher: '/userslist',
  }
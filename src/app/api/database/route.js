import { NextResponse } from "next/server";
import {users} from '@/app/utility/db'

//Note that here, users was imported from an already made database 

export function GET (){
    const data = users
    return NextResponse.json({data})
}
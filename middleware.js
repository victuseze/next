import { NextResponse } from "next/server";

export function middleware(request) {
    console.log('Middleware Working')
    return NextResponse.json({result: 'Middle-ware Being Successful!'})
}

// Now we have to specify where we want our middleware to redirect us to.

export const config = {
    matcher: ["/userslist/user/:path*"]
}

// import { NextResponse } from "next/server";

// export function middleware(req, res) {
//   console.log('Middleware Working');
//   return NextResponse.json({ result: 'Middle-ware Being Successful!' });
// }

// export const config = {
//   matcher: '/mid/:path*',
// };

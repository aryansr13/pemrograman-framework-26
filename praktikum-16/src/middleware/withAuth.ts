import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse
} from "next/server";

const hanyaAdmin = ["/admin"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {

  return async (req: NextRequest, next: NextFetchEvent) => {

    const pathname = req.nextUrl.pathname;

    const token: any = await getToken({

      req,
      secret: process.env.NEXTAUTH_SECRET,

    });


    // cek apakah route butuh login
    const isProtected = requireAuth.some((path) =>
      pathname.startsWith(path)
    );


    // jika belum login
    if (isProtected && !token) {

      return NextResponse.redirect(
        new URL("/login", req.url)
      );

    }


    // khusus halaman admin → cek role
    if (

      token &&
      hanyaAdmin.some((path) => pathname.startsWith(path)) &&
      token.role !== "admin"

    ) {

      return NextResponse.redirect(
        new URL("/", req.url)
      );

    }


    return middleware(req, next);

  };

}
import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse
} from "next/server";

const hanyaAdmin = ["/admin"];
const hanyaEditor = ["/editor"]; 

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

    const isProtected = requireAuth.some((path) => pathname.startsWith(path));

    if (isProtected && !token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (token) {
      // Proteksi Halaman Admin
      if (hanyaAdmin.some((path) => pathname.startsWith(path)) && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // Proteksi Halaman Editor (Baru)
      if (hanyaEditor.some((path) => pathname.startsWith(path)) && token.role !== "editor" && token.role !== "admin") {
        // Note: Admin biasanya dibolehkan akses halaman editor, jika tidak hapus 'token.role !== "admin"'
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return middleware(req, next);
  };
}
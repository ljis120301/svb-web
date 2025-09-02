import { NextRequest, NextResponse } from "next/server";

async function sha256Hex(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const bytes = new Uint8Array(hashBuffer);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const method = req.method.toUpperCase();

  // Serve a no-content favicon to avoid 500s if no favicon asset exists
  if (pathname === "/favicon.ico" && method === "GET") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Content-Type": "image/x-icon",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  }

  const requiresAuthorAuth = pathname.startsWith("/author");
  const isAuthorLoginPage = pathname === "/author/login";
  const isArticleApi = pathname.startsWith("/api/articles");
  const isUploadApi = pathname.startsWith("/api/upload");
  const isAdminLoginApi = pathname.startsWith("/api/admin/login");

  // Allow public GET access to articles API for client viewing
  const requiresApiAuth = (isArticleApi && method !== "GET") || isUploadApi;

  // Allow the login API and login page without a session
  if (isAdminLoginApi || isAuthorLoginPage) {
    return NextResponse.next();
  }

  if (requiresAuthorAuth || requiresApiAuth) {
    const adminPassword = process.env.ADMIN_PASSWORD ?? "";
    if (!adminPassword) {
      return new NextResponse("ADMIN_PASSWORD not configured", { status: 500 });
    }
    const expected = await sha256Hex(adminPassword);
    const cookie = req.cookies.get("admin_session")?.value ?? "";
    if (cookie !== expected) {
      if (requiresAuthorAuth) {
        const url = req.nextUrl.clone();
        url.pathname = "/author/login";
        url.searchParams.set("next", req.nextUrl.pathname);
        return NextResponse.redirect(url);
      }
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/author/:path*",
    "/api/articles/:path*",
    "/api/upload",
    "/api/admin/login",
    "/favicon.ico",
  ],
};



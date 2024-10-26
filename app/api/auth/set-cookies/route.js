import { NextResponse } from "next/server";

export async function POST(request) {
  const { access, refresh } = await request.json();

  const response = NextResponse.json({ success: true });

  response.cookies.set("access_token", access, {
    httpOnly: false,
    secure: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "Lax",
  });

  response.cookies.set("refresh_token", refresh, {
    httpOnly: false,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "Lax",
  });

  return response;
}

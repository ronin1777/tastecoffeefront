import { getSession } from "next-auth/react";
import { cookies } from "next/headers";
import apiUrl from "@/services/config";

export async function GET(request) {
  const session = await getSession();
  const { status } = request.nextUrl.searchParams;
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const response = await fetch(
    `${apiUrl}/api/orders/orders?status=${status || ""}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}

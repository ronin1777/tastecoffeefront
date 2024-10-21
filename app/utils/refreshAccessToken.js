import { cookies } from "next/headers";
import apiUrl from "@/services/config";

export const refreshAccessToken = async (refreshToken) => {
  const response = await fetch(`${apiUrl}/api/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if (!response.ok) {
    throw new Error("Refresh token failed");
  }

  const data = await response.json();
  return data.access;
};

export const getAccessToken = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value || null;
  return accessToken;
};

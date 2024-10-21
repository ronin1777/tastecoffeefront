import { fetchUserData } from "@/services/user/userProfile";
import { refreshAccessToken } from "@/app/utils/refreshAccessToken";

export const getAccessTokenAndRefreshToken = (headers) => {
  const cookie = headers.get("cookie") || "";
  const accessToken = cookie
    ? cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1]
    : null;
  const refreshToken = cookie
    ? cookie
        .split("; ")
        .find((row) => row.startsWith("refresh_token="))
        ?.split("=")[1]
    : null;

  return { accessToken, refreshToken };
};

export const fetchUserDataWithToken = async (accessToken, refreshToken) => {
  let user = null;

  try {
    user = await fetchUserData(accessToken);
  } catch (error) {
    console.error("Error fetching user data5:", error.message);
    if (error.message === "Unauthorized" && refreshToken) {
      try {
        const newAccessToken = await refreshAccessToken(refreshToken);
        console.log(newAccessToken);
        user = await fetchUserData(newAccessToken);
      } catch (refreshError) {
        console.error("Error refreshing access token:", refreshError.message);
        throw new Error("Refresh token failed"); // Propagate the error
      }
    } else {
      throw error;
    }
  }

  return user;
};

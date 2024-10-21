import apiUrl from "@/services/config";

export const fetchOrderDetail = async (accessToken, id) => {
  const response = await fetch(`${apiUrl}/api/orders/orders-detail/${id}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorMessage =
      response.status === 401 ? "Unauthorized" : response.statusText;
    throw new Error(errorMessage);
  }

  return await response.json();
};

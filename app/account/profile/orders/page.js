import { cookies } from "next/headers";

import PaginationComponent from "@/app/_components/product/PaginationComponent";
import OrdersFilter from "@/app/_components/user/OrdersFilter";
import OrdersTable from "@/app/_components/user/OrdersTable";
import apiUrl from "@/services/config";

export default async function ProfileOrders({ searchParams }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const currentPage = parseInt(searchParams.page) || 1;
  const itemsPerPage = 10;

  const queryParams = new URLSearchParams({
    ...searchParams,
    page: currentPage,
    page_size: itemsPerPage,
  }).toString();

  const res = await fetch(`${apiUrl}/api/orders/orders/?${queryParams}`, {
    method: "GET",
    next: { revalidate: 10 },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "خظا در دریافت اطلاعات");
  }

  const { results: orders, count } = await res.json();
  const url = "account/profile/orders";

  return (
    <div className="container mt-20 mx-auto">
      <h1 className="text-2xl text-zinc-700 dark:text-white font-bold mb-4">
        لیست سفارشات
      </h1>
      <OrdersFilter />
      <OrdersTable orders={orders} accessToken={accessToken} />
      <PaginationComponent
        count={count}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        searchParams={searchParams}
        url={url}
      />
    </div>
  );
}

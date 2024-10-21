"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import EditOrderForm from "@/app/_components/order/EditOrderForm";
import {
  convertCoffeeType,
  formatPrice,
  formatWeight,
  getStatusInPersian,
} from "@/app/utils/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PaymentButton from "@/app/_components/order/PaymentButton";
import apiUrl from "@/services/config";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxWidth: "100%",
  margin: "20px auto",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: theme.shadows[5],
  overflowX: "auto",
}));

const StyledTable = styled(Table)(({ theme }) => ({
  width: "100%",
  minWidth: "650px",
  "& thead th": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  "& tbody tr": {
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "16px",
  borderBottom: `1px solid ${theme.palette.divider}`,
  textAlign: "center",
}));

export default function OrderDetailPage({ params }) {
  const router = useRouter();
  const accessToken = Cookies.get("access_token");
  const { id } = params;

  if (!accessToken) {
    router.push("/");
  }

  const [order, setOrder] = useState(null); // برای ذخیره‌سازی داده‌های سفارش
  const [showEditForm, setShowEditForm] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  // بارگذاری داده‌های سفارش از API
  const fetchOrder = async () => {
    const res = await fetch(`${apiUrl}/api/orders/orders-detail/${id}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const orderData = await res.json();
    setOrder(orderData); // ذخیره داده‌های سفارش
  };

  useEffect(() => {
    fetchOrder(); // بارگذاری داده‌ها در اولین بار
  }, [id]);

  const handleUpdate = (updatedOrder) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      ...updatedOrder,
    }));
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed); // تغییر وضعیت checkbox
  };

  return (
    <div className="container mx-auto my-20 p-8 shadow-lg rounded-lg">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center text-zinc-700 dark:text-white">
        جزئیات محصولات
      </h1>

      {/* Cart Products Table */}
      <StyledTableContainer component={Paper} className="mb-10">
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell className="font-semibold text-lg">
                نام محصول
              </StyledTableCell>
              <StyledTableCell className="font-semibold text-lg">
                نوع قهوه
              </StyledTableCell>
              <StyledTableCell className="font-semibold text-lg">
                وزن
              </StyledTableCell>
              <StyledTableCell className="font-semibold text-lg">
                تعداد
              </StyledTableCell>
              <StyledTableCell className="font-semibold text-lg">
                قیمت کل
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order?.items?.map((item) => (
              <TableRow key={item.id}>
                <StyledTableCell>{item.product_name}</StyledTableCell>
                <StyledTableCell>
                  {convertCoffeeType(item.coffee_type)}
                </StyledTableCell>
                <StyledTableCell>{formatWeight(item.weight)}</StyledTableCell>
                <StyledTableCell>{item.quantity}</StyledTableCell>
                <StyledTableCell>{formatPrice(item.price)}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>

      {/* Order Summary */}
      <div className="mb-10 text-zinc-700 dark:text-white">
        <h2 className="text-3xl font-semibold mb-4">جزئیات سفارش</h2>
        <p className="text-lg  mb-2">
          <strong>نام کاربر:</strong> {order?.user_name}
        </p>
        <p className="text-lg  mb-2">
          <strong>وضعیت:</strong> {getStatusInPersian(order?.status)}
        </p>
        <p className="text-lg  mb-2">
          <strong>روش ارسال:</strong> {order?.shipping_method_name}
        </p>
        <p className="text-lg  mb-2">
          <strong>آدرس ارسال:</strong> {order?.shipping_address}
        </p>
        <p className="text-lg font-bold mt-4">
          <strong>جمع کل:</strong> {formatPrice(order?.final_price)}
        </p>
      </div>

      {/* Edit Order Form */}
      <div className="mb-10">
        <h2 className="text-3xl text-zinc-700 dark:text-white font-semibold mb-4">
          ویرایش سفارش
        </h2>
        <button
          onClick={() => setShowEditForm(!showEditForm)}
          className="p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
        >
          {showEditForm ? "پنهان کردن فرم ویرایش" : "نمایش فرم ویرایش"}
        </button>
        {showEditForm && (
          <EditOrderForm
            initialData={order}
            accessToken={accessToken}
            onUpdate={handleUpdate}
          />
        )}
      </div>

      {/* Checkbox for Terms and Conditions */}
      <div className="flex items-center gap-2 mt-4 mb-10">
        <input
          type="checkbox"
          id="terms"
          checked={isAgreed}
          onChange={handleCheckboxChange}
          className="h-5 w-5 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <label
          htmlFor="terms"
          className="ml-2 text-lg text-zinc-700 dark:text-white"
        >
          <Link href="/rules">من مقررات را خوانده‌ام و موافقم</Link>
        </label>
      </div>

      {/* Payment Button */}
      <div className="flex justify-center">
        <PaymentButton
          orderId={id}
          disabled={!isAgreed}
          accessToken={accessToken}
        />
      </div>
    </div>
  );
}

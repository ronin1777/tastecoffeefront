"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import formatCommentDate, {
  convertCoffeeType,
  formatPrice,
  formatWeight,
  getStatusInPersian,
} from "@/app/utils/utils";
import { CgDetailsMore } from "react-icons/cg";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { MdOutlineEditOff } from "react-icons/md";
import apiUrl from "@/services/config";
import { HiOutlineX } from "react-icons/hi";

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

const StyledImageCell = styled(StyledTableCell)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function OrdersTable({ orders, accessToken }) {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const fetchOrder = async (id) => {
    const res = await fetch(`${apiUrl}/api/orders/orders-detail/${id}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch order:", res.status, res.statusText);
      return;
    }

    const orderData = await res.json();
    setSelectedOrder(orderData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedOrder(null);
  };

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>تاریخ ثبت</StyledTableCell>
            <StyledTableCell>وضعیت</StyledTableCell>
            <StyledTableCell>کد رهگیری</StyledTableCell>
            <StyledTableCell>نحوه ارسال</StyledTableCell>
            <StyledTableCell>قیمت محصولات</StyledTableCell>
            <StyledTableCell>هزینه نهایی</StyledTableCell>
            <StyledTableCell>ویرایش و پرداخت</StyledTableCell>
            <StyledTableCell>جزئیات</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableRow key={order.id}>
              <StyledTableCell>
                {formatCommentDate(order?.created_at)}
              </StyledTableCell>
              <StyledTableCell>
                {getStatusInPersian(order?.status)}
              </StyledTableCell>
              <StyledTableCell>{order?.ref_id || "-"}</StyledTableCell>
              <StyledTableCell>
                {order.shipping_method_name || "نامشخص"}
              </StyledTableCell>
              <StyledTableCell>
                {formatPrice(order?.total_price)}
              </StyledTableCell>
              <StyledTableCell>
                {formatPrice(order?.final_price)}
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                {order?.status === "pending" ? (
                  <Link href={`/order/${order.id}`}>
                    <CiEdit className="w-7 h-7" />
                  </Link>
                ) : (
                  <MdOutlineEditOff className="w-6 h-6" />
                )}
              </StyledTableCell>
              <StyledTableCell>
                <Button onClick={() => fetchOrder(order.id)}>
                  <CgDetailsMore className="w-7 h-7" />
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>

      {/* Modal for Order Details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.8)", // رنگ تیره‌تر برای بک‌دراپ
              backdropFilter: "blur(8px)", // افکت بلور
            },
          },
        }}
      >
        <div
          style={{
            backgroundColor: "transparent",
            width: "100%",
            padding: "20px",
            position: "relative",
            borderRadius: "10px",
            overflowY: "auto",
            textAlign: "center",
          }}
        >
          <h2 id="modal-title">جزئیات سفارش</h2>
          {selectedOrder ? (
            <div>
              {/* جدول جزئیات محصولات */}
              <StyledTableContainer
                component={Paper}
                style={{ marginTop: "20px" }}
              >
                <StyledTable>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>محصول</StyledTableCell>
                      <StyledTableCell>وزن</StyledTableCell>
                      <StyledTableCell>نوع</StyledTableCell>
                      <StyledTableCell>قیمت</StyledTableCell>
                      <StyledTableCell>تعداد</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedOrder.items?.length > 0 ? (
                      selectedOrder.items.map((item) => (
                        <TableRow key={item?.id}>
                          <StyledTableCell>
                            {item?.product_name}
                          </StyledTableCell>
                          <StyledTableCell>
                            {formatWeight(item?.weight)}
                          </StyledTableCell>
                          <StyledTableCell>
                            {convertCoffeeType(item?.coffee_type)} قهوه
                          </StyledTableCell>
                          <StyledTableCell>
                            {formatPrice(item?.price)}
                          </StyledTableCell>
                          <StyledTableCell>{item.quantity}</StyledTableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <StyledTableCell
                          colSpan={4}
                          style={{ textAlign: "center" }}
                        >
                          هیچ موردی یافت نشد
                        </StyledTableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </StyledTable>
                <Button
                  onClick={handleCloseModal}
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    minWidth: "40px",
                    minHeight: "40px",
                    padding: "0",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <HiOutlineX size={24} />
                </Button>
              </StyledTableContainer>
            </div>
          ) : (
            <p>در حال بارگذاری...</p>
          )}
        </div>
      </Modal>
    </StyledTableContainer>
  );
}

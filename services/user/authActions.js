"use server";

import apiUrl from "@/services/config";

export const sendOtpAction = async (phoneNumber) => {
  try {
    const response = await fetch(`${apiUrl}/api/user/send-otp/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone_number: phoneNumber }),
    });

    if (!response.ok) {
      const data = await response.json();
      const errorMessage = data.error ? data.error : "مشکل در ارسال کد.";
      const error = new Error(errorMessage);
      error.status = response.status;
      throw error;
    }

    return await response.json();
  } catch (error) {
    throw error; // برای ادامه در مدیریت خطا
  }
};

export const verifyOtpAction = async (otp) => {
  try {
    const response = await fetch(`${apiUrl}/api/user/verify-otp/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
    });

    const data = await response.json();

    // بررسی وضعیت
    if (!response.ok) {
      const error = new Error(data.error || "Failed to verify OTP");
      error.status = response.status;
      throw error;
    }
    return {
      access: data.access_token,
      refresh: data.refresh_token,
      status: response.status,
      cartExists: data.cartExists,
    };
  } catch (error) {
    throw error;
  }
};

export const completeRegistrationAction = async (data) => {
  try {
    const response = await fetch(`${apiUrl}/api/user/complete-registration/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const errorMessages = responseData.email
        ? responseData.email[0]
        : "خطا در تکمیل ثبت‌نام.";
      const error = new Error(errorMessages);
      error.status = response.status;
      throw error;
    }

    return {
      access: responseData.access_token,
      refresh: responseData.refresh_token,
    };
  } catch (error) {
    throw error;
  }
};

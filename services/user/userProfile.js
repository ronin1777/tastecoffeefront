

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchUserData = async (accessToken) => {
    const response = await fetch(`http://localhost:8000/api/user/user-profile/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const errorMessage = response.status === 401 ? 'Unauthorized' : response.statusText;
        throw new Error(errorMessage);
    }

    return await response.json();
};

export const updateUserProfile = async (data, accessToken) => {

  const formDataToSend = new FormData();

  Object.keys(data).forEach((key) => {
    if (key === "profile_picture" && data[key].length > 0) {
      formDataToSend.append(key, data[key][0]);
    } else if (key !== "profile_picture") {
      formDataToSend.append(key, data[key]);
    }
  });

  try {
    const response = await fetch("http://localhost:8000/api/user/user-update/", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formDataToSend,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "خطا در بروزرسانی، لطفا دوباره امتحان کنید.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "خطای شبکه، لطفا دوباره امتحان کنید.");
  }
};

export async function fetchUserProfile(accessToken) {
  const response = await fetch('http://localhost:8000/api/user/user-profile/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  })

  if (response.ok) {
    return await response.json()
  } else if (response.status === 401) {
    // اگر اکسس توکن منقضی شده باشد، 401 برمی‌گرداند
    throw new Error('Access token expired')
  } else {
    throw new Error('Failed to fetch user profile')
  }
}



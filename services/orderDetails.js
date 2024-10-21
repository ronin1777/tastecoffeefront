export const fetchOrderDetail = async (accessToken, id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/orders/orders-detail/${id}/`, {
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
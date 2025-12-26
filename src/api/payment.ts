import axiosInstance from "./axiosInstance";

interface CreateOrderPayload {
  planType: string;
  userId: string;
}

export const createPaymentOrder = async ({
  planType,
  userId,
}: CreateOrderPayload) => {
  const { data } = await axiosInstance.post("/payment/create-order", {
    planType,
    userId,
  });

  return data;
};

export const verifyPayment = async (payload: any) => {
  const { data } = await axiosInstance.post("/payment/verify", payload);
  return data;
};

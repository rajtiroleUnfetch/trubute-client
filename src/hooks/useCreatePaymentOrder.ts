import { useMutation } from "@tanstack/react-query";
import { createPaymentOrder } from "../api/payment";

interface CreateOrderPayload {
  planType: string;
  userId: string;
}

export const useCreatePaymentOrder = () => {
  return useMutation({
    mutationFn: (payload: CreateOrderPayload) =>
      createPaymentOrder(payload),
  });
};

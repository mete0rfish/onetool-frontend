import { useQuery } from "@tanstack/react-query";
import { fetchPaymentWidgets } from "../utils/api";
import { nanoid } from "nanoid";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";

interface OrderListsProps {
  customerEmail: string;
  customerName: string;
  customerMobilePhone: string;
  bluePrintNames: string[];
}

export const usePaymentWidget = () => {
  const { data: paymentWidget } = useQuery({
    queryKey: ["payment-widget", clientKey],
    queryFn: fetchPaymentWidgets,
  });

  const handlePaymentRequest = async (orderList: OrderListsProps) => {
    // 결제를 요청하기 전에 orderId, amount를 서버(토스)에 저장하세요.
    // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName:
          orderList.bluePrintNames.length > 1
            ? `${orderList.bluePrintNames[0]} 외 ${
                orderList.bluePrintNames.length - 1
              }개`
            : `${orderList.bluePrintNames[0]}`,
        successUrl: `${window.location.origin}/payment/loading`,
        failUrl: `${window.location.origin}/payment/fail`,
        customerEmail: orderList.customerEmail,
        customerName: orderList.customerName,
        customerMobilePhone: orderList.customerMobilePhone,
      });
    } catch (error) {
      console.error("Error requesting payment:", error);
    }
  };

  return { paymentWidget, handlePaymentRequest };
};

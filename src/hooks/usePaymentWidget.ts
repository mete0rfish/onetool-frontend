import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import {
  loadTossPayments,
  WidgetAgreementWidget,
  WidgetPaymentMethodWidget,
} from "@tosspayments/tosspayments-sdk";

interface OrderListsProps {
  customerEmail: string;
  customerName: string;
  customerMobilePhone: string;
  bluePrintNames: string[];
}

interface WidgetsProps {
  setAmount: ({
    currency,
    value,
  }: {
    currency: string;
    value: number;
  }) => Promise<void>;
  renderPaymentMethods: ({
    selector,
    variantKey,
  }: {
    selector: string;
    variantKey: string;
  }) => Promise<WidgetPaymentMethodWidget>;
  requestPayment: ({
    orderId,
    orderName,
    successUrl,
    failUrl,
    customerEmail,
    customerName,
    customerMobilePhone,
  }: {
    orderId: string;
    orderName: string;
    successUrl: string;
    failUrl: string;
    customerEmail: string;
    customerName: string;
    customerMobilePhone: string;
  }) => Promise<void>;
  renderAgreement: ({
    selector,
    variantKey,
  }: {
    selector: string;
    variantKey: string;
  }) => Promise<WidgetAgreementWidget>;
}

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "xaszxdbW4vJ08QWeRLRdT";

export const usePaymentWidget = () => {
  const [paymentWidget, setpaymentWidgets] = useState<WidgetsProps>();
  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey,
      });
      // 비회원 결제
      // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

      setpaymentWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

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

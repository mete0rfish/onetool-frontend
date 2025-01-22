import {
  loadTossPayments,
  ANONYMOUS,
  WidgetPaymentMethodWidget,
  WidgetAgreementWidget,
} from "@tosspayments/tosspayments-sdk";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";

const customerKey = "xaszxdbW4vJ08QWeRLRdT";

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

export default function TossWidget() {
  const [amount, setAmount] = useState({
    currency: "KRW",
    value: 1000,
  });
  const [ready, setReady] = useState(false);
  const { paymentWidget } = usePaymentWidget();
  const paymentMethodsWidgetRef = useRef<WidgetsProps>();

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (paymentWidget == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await paymentWidget.setAmount(amount);

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        paymentWidget.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        // ------  이용약관 UI 렌더링 ------
        paymentWidget.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [paymentWidget]);

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    paymentWidget.setAmount(amount);
  }, [paymentWidget, amount]);

  return (
    <div className="wrapper">
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용약관 UI */}
        <div id="agreement" />
        {/* 쿠폰 체크박스 */}

        {/* 결제하기 버튼 */}
      </div>
    </div>
  );
}

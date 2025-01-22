import { useEffect, useRef, useState } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";
import { WidgetPaymentMethodWidget } from "@tosspayments/tosspayments-sdk";

export default function TossWidget() {
  const [amount, setAmount] = useState({
    currency: "KRW",
    value: 1000,
  });
  const { paymentWidget } = usePaymentWidget();
  const paymentMethodsWidgetRef = useRef<Promise<WidgetPaymentMethodWidget>>();

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (paymentWidget == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await paymentWidget.setAmount(amount);

      // ------  결제 UI 렌더링 ------
      paymentMethodsWidgetRef.current = paymentWidget.renderPaymentMethods({
        selector: "#payment-method",
        variantKey: "DEFAULT",
      });
      // ------  이용약관 UI 렌더링 ------
      paymentWidget.renderAgreement({
        selector: "#agreement",
        variantKey: "AGREEMENT",
      });
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

import styled from "styled-components";
import { Title, Wrapper as FAQWrapper } from "./FAQ"; // FAQ에서 export한 Title과 Wrapper를 import합니다.
import { Link } from "react-router-dom";
import FaqBackButton from "./components/FaqBackButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Answer = styled.div`
  padding: 12px;
  line-height: 1.6;
`;

const FAQDetail = () => {
  // 예시로 사용할 질문과 답변
  const faqData = [
    {
      id: 1,
      question: "제품 배송은 어떻게 이루어지나요?",
      answer:
        "저희는 배송을 국내외 모두 지원하며, 배송은 보통 주문 완료 후 1-3일 정도 소요됩니다.",
    },
    {
      id: 2,
      question: "환불 정책에 대해 알고 싶습니다.",
      answer:
        "환불은 제품 수령 후 7일 이내에 신청 가능하며, 제품이 사용되지 않았고 원래 포장이 손상되지 않았을 경우 가능합니다.",
    },
    {
      id: 3,
      question: "제품 보증 기간은 어떻게 되나요?",
      answer:
        "저희 제품은 보통 1년 보증 기간을 제공합니다. 보증 기간 내에 제품에 문제가 발생할 경우 무상으로 수리 혹은 교환해드립니다.",
    },
    {
      id: 4,
      question: "상품 재고 문의를 할 수 있는 방법은 무엇인가요?",
      answer:
        "상품 재고에 대한 문의는 고객센터를 통해 전화나 이메일로 문의해주시면 됩니다.",
    },
  ];

  return (
    <Container>
      <Title>문의사항</Title>
      <FAQWrapper>
        {faqData.map((faq) => (
          <div key={faq.id}>
            <h3>{faq.question}</h3>
            <Answer>{faq.answer}</Answer>
          </div>
        ))}
      </FAQWrapper>
      <Link to={"/faq"}>
        <FaqBackButton>&larr; 뒤로가기</FaqBackButton>
      </Link>
    </Container>
  );
};

export default FAQDetail;

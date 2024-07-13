import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

const Line = styled(Link)`
  border-bottom: 0.5px solid #3e3e3e;
  width: 900px;
  padding: 12px;
  color: black; /* 링크 색상 */
  &:hover {
    color: gray; /* 마우스 호버시 색상 변경 */
  }
`;

const WriteButton = styled(Link)`
  margin-top: 36px;
  margin-left: auto; /* 버튼을 오른쪽으로 이동 */
`;

const FAQ = () => {
  const faqItems = [
    "제품 배송은 어떻게 이루어지나요?",
    "환불 정책에 대해 알고 싶습니다.",
    "제품 보증 기간은 어떻게 되나요?",
    "상품 재고 문의를 할 수 있는 방법은 무엇인가요?",
  ]; //api로 불러올 내용들

  return (
    <>
      <Title>문의사항</Title>
      <Wrapper>
        {faqItems.map((item, index) => (
          <Line key={index} to={`/faq/${index + 1}`}>
            {item}
          </Line>
        ))}
        <WriteButton to={"/faq/write"}>작성하기</WriteButton>
      </Wrapper>
    </>
  );
};

export default FAQ;

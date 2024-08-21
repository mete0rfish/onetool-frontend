import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin: 55px 0px 15px 10px;
`;

const SmallTitle = styled.h4`
  font-size: 23px;
  font-weight: 700;
  margin: 0; /* Remove default margin */
`;

const FaqPrefix = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: lightgray;
  margin-right: 8px; /* Space between FAQ and the title */
`;

const Line = styled(Link)`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #3e3e3e;
  width: 900px;
  padding: 12px;
  color: black; /* 링크 색상 */
  &:hover {
    color: gray; /* 마우스 호버시 색상 변경 */
  }
`;

const QuestionPrefix = styled.span`
  color: lightgray; /* Q의 색상 */
  margin-right: 8px; /* Q와 질문 간의 간격 */
  font-weight: 600;
`;

const WriteButton = styled(Link)`
  margin-top: 36px;
  margin-left: auto; /* 버튼을 오른쪽으로 이동 */
  padding: 13px 20px 11px 20px;
  border: 1px solid lightgrey; /* Light grey border */
  background-color: white; /* White background */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none;
  color: black; /* Text color */
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgrey; /* Change background on hover */
    
  }
`;

const FAQ = () => {
  const faqItems = [
    "제품 배송은 어떻게 이루어지나요?",
    "환불 정책에 대해 알고 싶습니다.",
    "제품 보증 기간은 어떻게 되나요?",
    "상품 재고 문의를 할 수 있는 방법은 무엇인가요?",
  ]; // API로 불러올 내용들

  return (
    <>
      <Title>문의사항</Title>
      <SmallTitleRow>
        <FaqPrefix>FAQ</FaqPrefix>
        <SmallTitle>자주 묻는 질문</SmallTitle>
      </SmallTitleRow>
      <Wrapper>
        {faqItems.map((item, index) => (
          <Line key={index} to={`/faq/${index + 1}`}>
            <QuestionPrefix>Q</QuestionPrefix>
            {item}
          </Line>
        ))}
        <WriteButton to={"/faq/write"}>문의 작성하기</WriteButton>
      </Wrapper>
    </>
  );
};

export default FAQ;

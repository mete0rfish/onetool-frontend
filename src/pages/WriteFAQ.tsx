import styled from "styled-components";
import { Title, Wrapper } from "./FAQ";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FAQForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 779px;
  height: 41px;
`;

const TextArea = styled.textarea`
  width: 779px;
  height: 200px;
  resize: none;
`;

const UploadButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  margin-top: 24px;
  margin-left: auto;
`;

export const BackButton = styled.button`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

const WriteFAQ = () => {
  return (
    <Container>
      <Title>문의사항</Title>
      <Wrapper>
        <FAQForm>
          <Label>제목</Label>
          <Input />
          <Label>본문</Label>
          <TextArea />
        </FAQForm>
        <UploadButton>업로드하기</UploadButton>
      </Wrapper>
      <Link to={"/faq"}>
        <BackButton>&larr; 뒤로가기</BackButton>
      </Link>
    </Container>
  );
};

export default WriteFAQ;

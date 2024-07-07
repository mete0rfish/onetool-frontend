import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  MainContent,
} from "./Login";

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const InnerTab = styled(Link)<{ isActive: boolean }>`
  width: 171.5px;
  height: 40px;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? "#333333" : "#cccccc")};
  text-align: center;
  color: ${(props) => (props.isActive ? "#333333" : "#cccccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`;

const FindIdButton = styled(Button)`
  background-color: #999999;
  color: #ffffff;
`;

const FindUserInfo = ({ isID }: { isID: boolean }) => {
  return (
    <Container>
      <TopNavBar />
      <MainContent>
        <Tab>
          <InnerTab to="/users/find/id" isActive={isID}>
            <span>아이디 찾기</span>
          </InnerTab>
          <InnerTab to="/users/find/password" isActive={!isID}>
            <span>비밀번호 찾기</span>
          </InnerTab>
        </Tab>
        <Form>
          <FormGroup>
            <Label>이름</Label>
            <Input type="text" placeholder="이름을 입력해주세요." />
          </FormGroup>
          <FormGroup>
            <Label>전화번호</Label>
            <Input type="text" placeholder="전화번호를 입력해주세요." />
          </FormGroup>
          <FindIdButton>아이디 찾기</FindIdButton>
        </Form>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default FindUserInfo;

import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import UserFormGroup from "./components/UserFormGroup";
import UserLabel from "./components/UserLabel";
import { Button } from "./Login";

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

const Message = styled.div`
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  margin: 50px 0;
  line-height: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FindUserPassword = () => {
  return (
    <>
      <Tab>
        <InnerTab to="/users/find/id" isActive={false}>
          <span>아이디 찾기</span>
        </InnerTab>
        <InnerTab to="/users/find/password" isActive={true}>
          <span>비밀번호 찾기</span>
        </InnerTab>
      </Tab>
      <Form>
        <Message>
          회원정보의 이메일로
          <br />
          비밀번호 재설정 메일이 발송됩니다.
        </Message>
        <UserFormGroup>
          <UserLabel>아이디</UserLabel>
          <Input type="text" placeholder="아이디를 입력해주세요." />
        </UserFormGroup>
        <FindIdButton>이메일 발송</FindIdButton>
      </Form>
    </>
  );
};

export default FindUserPassword;

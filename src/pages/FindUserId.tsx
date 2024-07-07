import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import { Button, Form, FormGroup, Input, Label } from "./Login";
import { useState } from "react";

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

const SuccessWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  span {
    font-weight: 700;
  }
  font-weight: 400;
  font-size: 15px;
`;

const FindUserId = () => {
  const [idSuccess, setIDSuccess] = useState<boolean>(false);

  const onClick = () => {
    setIDSuccess((prev) => !prev);
  };
  // test목적으로 사용됨.

  return (
    <>
      <Tab>
        <InnerTab to="/users/find/id" isActive={true}>
          <span>아이디 찾기</span>
        </InnerTab>
        <InnerTab to="/users/find/password" isActive={false}>
          <span>비밀번호 찾기</span>
        </InnerTab>
      </Tab>
      {idSuccess ? (
        <SuccessWrapper>
          <span>정재민</span>님의 아이디는
          <br />
          <span>onetool@gmail.com</span> 입니다.
        </SuccessWrapper>
      ) : (
        <Form>
          <FormGroup>
            <Label>이름</Label>
            <Input type="text" placeholder="이름을 입력해주세요." />
          </FormGroup>
          <FormGroup>
            <Label>전화번호</Label>
            <Input type="text" placeholder="전화번호를 입력해주세요." />
          </FormGroup>
          <FindIdButton onClick={onClick}>아이디 찾기</FindIdButton>
        </Form>
      )}
    </>
  );
};

export default FindUserId;

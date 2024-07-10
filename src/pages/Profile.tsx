import styled from "styled-components";
import Input from "../components/Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  span {
    margin-right: 8px;
  }
`;

const LogOutButton = styled.button`
  width: 65px;
  height: 26px;
  border: 1.5px solid red;
  border-radius: 20px;
  color: red;
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: 800;
`;

const Rank = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #a2a2a4;
`;

const Email = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #a2a2a4;
`;

const Banner = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 24px;
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  p {
    color: #0029ff;
    font-size: 11px;
    font-weight: 400;
  }
`;

const PasswordChangeButton = styled.button`
  width: 122px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  font-size: 13px;
  font-weight: 700;
  margin-left: 8px;
`;

const TableRow = styled.div`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  span {
    display: flex;
    align-items: center;
    min-width: 170px;
    padding: 0 20px;
    background-color: #f9f9f9;
  }
  i {
    color: #0029ff;
  }
  p {
    font-size: 14px;
    padding: 24px 0 24px 10px;
  }
  input {
    margin-left: 8px;
  }
`;

const TableRowDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 8px;
  padding: 24px 0;
`;

const TableRowCheckBoxDiv = styled.div`
  display: flex;
  padding-top: 24px;
  flex-direction: column;
  align-items: baseline;
  div {
    display: flex;
    align-items: center;
  }
`;

const WithDrawButton = styled.button`
  margin-top: 24px;
  font-size: 15px;
  font-weight: 400;
  text-decoration: underline;
  color: #4e4eff;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 80px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`;

const AcceptButton = styled(Button)`
  color: white;
  background-color: #0034ba;
`;

const HistoryWrapper = styled.div`
  width: 100%;
  margin-top: 72px;
`;

const HitoryTitle = styled.div`
  text-align: center;
  padding: 24px 0;
  border-bottom: 1px solid #cdcdcd;
`;

const HistoryListBox = styled.ul`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fafafc;
  border-bottom: 1px solid #eaeaea;
`;

const HistoryElementBox = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
`;

const Profile = () => {
  return (
    <Container>
      <Title>회원정보</Title>
      <UserProfile>
        <UserProfileWrapper>
          <img src="/user.png" alt="user profile" />
          <UserProfileDetail>
            <div>
              <Name>정재민</Name>
              <Rank>일반회원</Rank>
            </div>
            <div>
              <Email>wjdwoals579@naver.com</Email>
            </div>
          </UserProfileDetail>
        </UserProfileWrapper>
        <LogOutButton>로그아웃</LogOutButton>
      </UserProfile>
      <Banner>
        <span>기본정보</span>
        <p>* 표시는 반드시 입력하셔야 하는 항목입니다.</p>
      </Banner>
      <TableRow>
        <span>아이디</span>
        <p>wjdwoals579@naver.com</p>
      </TableRow>
      <TableRow>
        <span>비밀번호</span>
        <TableRowDiv>
          <PasswordChangeButton>비밀번호 변경</PasswordChangeButton>
          <Input type="text" placeholder="현재 비밀번호" />
          <Input type="text" placeholder="새 비밀번호" />
          <Input type="text" placeholder="새 비밀번호 확인" />
        </TableRowDiv>
      </TableRow>
      <TableRow>
        <span>
          이름<i>*</i>
        </span>
        <TableRowDiv>
          <Input type="text" placeholder="이름" />
        </TableRowDiv>
      </TableRow>
      <TableRow>
        <span>
          이메일<i>*</i>
        </span>
        <TableRowCheckBoxDiv>
          <Input type="text" placeholder="onetool@gmail.com" />
          <div>
            <input type="checkbox" />
            <p>이벤트 등의 마케팅 소식을 이메일로 받습니다.</p>
          </div>
        </TableRowCheckBoxDiv>
      </TableRow>
      <TableRow>
        <span>
          휴대폰 번호<i>*</i>
        </span>
        <TableRowCheckBoxDiv>
          <Input type="text" placeholder="'-' 없이 입력 (예시) 01012345678" />
          <div>
            <input type="checkbox" />
            <p>이벤트 등의 마케팅 소식을 SMS로 받습니다.</p>
          </div>
        </TableRowCheckBoxDiv>
      </TableRow>
      <WithDrawButton>회원 탈퇴하기 {">>"}</WithDrawButton>
      <ButtonWrapper>
        <AcceptButton>수정완료</AcceptButton>
        <Button>취소</Button>
      </ButtonWrapper>
      <HistoryWrapper>
        <HitoryTitle>
          <span>최근 주문 내역</span>
        </HitoryTitle>
        <HistoryListBox>
          <li>상품 정보</li>
          <li>주문 번호</li>
          <li>상품 금액</li>
          <li>주문 상태</li>
        </HistoryListBox>
        <HistoryElementBox>
          <p>최근 주문 내역이 없습니다.</p>
        </HistoryElementBox>
      </HistoryWrapper>
      <HistoryWrapper>
        <HitoryTitle>
          <span>나의 문의 내역</span>
        </HitoryTitle>
        <HistoryListBox>
          <li>날짜</li>
          <li>문의 제목</li>
          <li>문의 내용</li>
          <li>문의 상태</li>
        </HistoryListBox>
        <HistoryElementBox>
          <p>최근 상품 문의 내역이 없습니다.</p>
        </HistoryElementBox>
      </HistoryWrapper>
    </Container>
  );
};

export default Profile;

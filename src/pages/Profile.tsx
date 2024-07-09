import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Profile = () => {
  return (
    <Container>
      <span>회원정보</span>
      <div>
        <img src="/user.png" />
        <div>
          <span>정재민</span>
          <span>일반회원</span>
        </div>
        <div>
          <span>wjdwoals579@naver.com</span>
        </div>
      </div>
    </Container>
  );
};

export default Profile;

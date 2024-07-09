import styled from "styled-components";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px 300px;
`;

const CenterLayout = () => {
  return (
    <Container>
      <TopNavBar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Container>
  );
};

export default CenterLayout;

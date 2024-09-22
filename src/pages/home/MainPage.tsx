import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import TopNavBar from "../../components/TopNavBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainBanner from "../../components/MainBanner";
import Footer from "../../components/Footer";
import { blueprint } from "../../dummy/blueprint";
import { formatPrice } from "../../utils/formatPrice";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const DetailContainer = styled.div`
  width: 100%;
  padding: 48px 40px;
`;

const BannersContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
`;

const Banner2 = styled.div`
  width: 100%;
  height: 274px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #203a92;
  img {
    width: 200px;
  }
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 24px;
`;

const BluePrintList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 64px;
`;

const BluePrintCard = styled.div`
  border: 1px solid #e7e7e8;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const BluePrintName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 12px;
`;

const BluePrintCreator = styled.span`
  font-size: 14px;
  color: #88888a;
  margin-bottom: 8px;
`;

const BluePrintPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const OriginalPrice = styled.span`
  color: red;
  font-weight: 700;
  margin-right: 8px;
`;

const Hits = styled.span`
  font-size: 12px;
  color: #88888a;
  margin-top: 4px;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/items/${id}`);
  };

  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <DetailContainer>
            <BannersContainer>
              <MainBanner />
              <Link
                to={
                  "https://garrulous-bearskin-817.notion.site/ONETOOL-e7a9e586415142ab9a2f49d3b4f0146d?pvs=4"
                }
                target="_blank"
              >
                <Banner2>
                  <img src="/banner2.png" />
                  <p>
                    처음 방문하셨나요? <br />
                    ONETOOL을 소개합니다.
                  </p>
                </Banner2>
              </Link>
            </BannersContainer>

            <BluePrintList>
              {blueprint.map((item) => (
                <BluePrintCard key={item.id} onClick={() => onClick(item.id)}>
                  <img src={item.blueprintImg} alt={item.blueprintName} />
                  <BluePrintName>{item.blueprintName}</BluePrintName>
                  <BluePrintCreator>{item.creatorName}</BluePrintCreator>
                  <BluePrintPrice>
                    <OriginalPrice>
                      {formatPrice(item.standardPrice)}원
                    </OriginalPrice>
                  </BluePrintPrice>
                  <Hits>{item.blueprintDetails}</Hits>
                </BluePrintCard>
              ))}
            </BluePrintList>
          </DetailContainer>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainPage;

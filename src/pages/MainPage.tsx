import styled from "styled-components";
import TopNavBar from "../components/TopNavBar";
import LeftSidebar from "../components/LeftSidebar";
import { Link } from "react-router-dom";

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
  grid-template-columns: 2.5fr 1fr;
  gap: 32px;
`;

const Banner1 = styled.div<{ url: string }>`
  width: 100%;
  height: 274px;
  border-radius: 16px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  padding-left: 64px;
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

const HorizontalBanners = styled.div`
  width: 100%;
  margin-top: 82px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const HorizontalBannerTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const HorizontalElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  img {
    width: 100%;
    max-height: 248px;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
  }
`;

const FamousProductContainer = styled.div`
  border: 1px solid #e7e7e8;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;

const FamousProduct = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 145px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
`;

const FamousProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  gap: 4px;
`;

const FamousProductTitle = styled.span`
  font-size: 11px;
  color: #a0a0a0;
`;

const FamousProductName = styled.span`
  font-size: 13px;
`;

const FamousProductPrice = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

const MainPage = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <LeftSidebar />
          <DetailContainer>
            <BannersContainer>
              <Banner1 url="/banner1.png">
                <p>무료 CAD 소스가 이렇게 좋다고?</p>
                <p>킨텍스 도면 보러가기</p>
              </Banner1>
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
            <HorizontalBanners>
              <HorizontalElementContainer>
                <HorizontalBannerTitle>
                  지금 놓치면 가격이 올라가요
                </HorizontalBannerTitle>
                <img src="/horizontal1.png" alt="" />
              </HorizontalElementContainer>
              <HorizontalElementContainer>
                <HorizontalBannerTitle>
                  많은 사람들이 구매했어요
                </HorizontalBannerTitle>
                <FamousProductContainer>
                  <FamousProduct>
                    <img src="/horizontal1.png" alt="" />
                    <FamousProductInfoWrapper>
                      <FamousProductTitle>네모</FamousProductTitle>
                      <FamousProductName>
                        효과음 오토액션&스타일
                      </FamousProductName>
                      <FamousProductPrice>9,900원</FamousProductPrice>
                    </FamousProductInfoWrapper>
                  </FamousProduct>
                  <FamousProduct>
                    <img src="/horizontal2.png" alt="" />
                    <FamousProductInfoWrapper>
                      <FamousProductTitle>네모</FamousProductTitle>
                      <FamousProductName>
                        효과음 오토액션&스타일
                      </FamousProductName>
                      <FamousProductPrice>9,900원</FamousProductPrice>
                    </FamousProductInfoWrapper>
                  </FamousProduct>
                  <FamousProduct>
                    <img src="/horizontal3.png" alt="" />
                    <FamousProductInfoWrapper>
                      <FamousProductTitle>네모</FamousProductTitle>
                      <FamousProductName>
                        효과음 오토액션&스타일
                      </FamousProductName>
                      <FamousProductPrice>9,900원</FamousProductPrice>
                    </FamousProductInfoWrapper>
                  </FamousProduct>
                </FamousProductContainer>
              </HorizontalElementContainer>
              <HorizontalElementContainer>
                <HorizontalBannerTitle>
                  한 손에 잡히는 도구, ONETOOL 활용법
                </HorizontalBannerTitle>
              </HorizontalElementContainer>
            </HorizontalBanners>
          </DetailContainer>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default MainPage;

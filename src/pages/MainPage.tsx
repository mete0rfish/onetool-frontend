import React from "react";
import styled from "styled-components";
import TopNavBar from "../components/TopNavBar";
import LeftSidebar from "../components/LeftSidebar";
import Banner from "../components/Banner";
import BannerWithText from "../components/BannerWithText";
import ItemCard from "../components/ItemCard";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

const BannersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorizontalBanners = styled.div`
  display: flex;
  margin-top: 1rem; /* Adjust margin as needed */
`;

const BannerWrapper = styled.div`
  flex: 1; /* Each banner takes equal space */
  margin-right: 1rem; /* Adjust margin between banners */
`;

const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%; /* Adjust based on the width of the sidebar */
`;

const items = [
  { id: 1, name: "Item 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Item 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Item 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Item 4", image: "https://via.placeholder.com/150" },
  // Add more items as needed
];

const MainPage = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <LeftSidebar />
          <div>
            <BannersContainer>
              <Banner text="Banner 1" />
              <Banner text="Banner 2" />
            </BannersContainer>
            <HorizontalBanners>
              <BannerWrapper>
                <BannerWithText text="Sub Banner 1" bannerText="Banner 1" />
              </BannerWrapper>
              <BannerWrapper>
                <BannerWithText text="Sub Banner 2" bannerText="Banner 2" />
              </BannerWrapper>
              <BannerWrapper>
                <BannerWithText text="Sub Banner 3" bannerText="Banner 3" />
              </BannerWrapper>
            </HorizontalBanners>
            <h2 style={{ marginLeft: "2rem" }}>Our Products</h2>
            <ItemsGrid>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </ItemsGrid>
            <h2 style={{ marginLeft: "2rem" }}>Our Products</h2>
            <ItemsGrid>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </ItemsGrid>
            <h2 style={{ marginLeft: "2rem" }}>Our Products</h2>
            <ItemsGrid>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </ItemsGrid>
          </div>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default MainPage;

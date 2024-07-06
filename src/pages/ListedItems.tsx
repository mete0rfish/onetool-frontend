import React from "react";
import styled from "styled-components";
import TopNavBar from "../components/TopNavBar";
import LeftSidebar from "../components/LeftSidebar";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border: 1px solid red; /* Debug style */
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex: 1;
  border: 1px solid blue; /* Debug style */
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  border: 1px solid green; /* Debug style */
`;

const items = [
  { id: 1, name: "Item 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Item 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Item 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Item 4", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Item 5", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Item 6", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Item 7", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Item 8", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Item 9", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Item 10", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Item 11", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Item 12", image: "https://via.placeholder.com/150" },
  { id: 13, name: "Item 13", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Item 14", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Item 15", image: "https://via.placeholder.com/150" },
  { id: 16, name: "Item 16", image: "https://via.placeholder.com/150" },
];

const ListedItems = () => {
  console.log("ListedItems rendered");
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <LeftSidebar />
          <ItemsGrid>
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ItemsGrid>
        </ContentContainer>
        <Footer />
      </MainContainer>
    </>
  );
};

export default ListedItems;

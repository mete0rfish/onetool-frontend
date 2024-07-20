import React from "react";
import styled from "styled-components";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import ItemCard from "../../components/ItemCard";

const OuterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 32px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 8px 0px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #88888A;
`;

const FirstContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  width: 780px;
  height: 595px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 631.39px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 277px;
  gap: 14px;
  border-radius: 0px 0px 1px 0px;
  padding: 22px 0px 23px 0px;
  border-bottom: 1px solid #88888A50;
`;

const CompanyName = styled.div`
  height: 20px;
  gap: 4px;
  font-weight: 400;
  font-size: 13.13px;
  line-height: 20px;
  color: #88888A;
`;

const ItemName = styled.div`
  height: 38px;
  padding: 7px 0px 0px 0px;
  font-weight: 700;
  font-size: 20.8px;
  line-height: 30.8px;
  color: #18181B;
`;

const PriceContainer = styled.div`
  height: 126px;
  padding: 10px 0px 30px 0px;
  gap: 10px;
  border-bottom: 1px solid #88888A50;
`;

const OriginalPrice = styled.div`
  height: 27px;
  padding: 2px 0px 6px 0px;
  font-weight: 400;
  font-size: 15.13px;
  line-height: 19px;
  color: #88888A;
  text-decoration: line-through;
`;
const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 33px;
  gap: 6px;
`;
const SalePercentage = styled.div`
  font-weight: 800;
  font-size: 28px;
  line-height: 33px;
  color: #FF5C00;
`;

const CurrentPrice = styled.div`
  font-weight: 700;
  font-size: 26.91px;
  line-height: 33px;
  color: #18181B;
`;

const SaleTimer = styled.div`
  height: 26px;
  border-radius: 6px;
  background-color: #FF5C00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46%;
`;

const TextBox = styled.div`
  height: 26px;
  font-weight: 700;
  font-size: 15.13px;
  line-height: 25.6px;
  color: #313135;
`;

const InnerTextBox = styled.div`
  height: 22px;
  font-weight: 500;
  font-size: 13.23px;
  line-height: 22px;
  color: #00000087;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: -10px 0px 16px 0px;
`;

const Tag = styled.div`
  padding: 5px 7px;
  border: 1px solid #88888A;
  border-radius: 11px;
  font-size: 14px;
  color: #313135;

  font-weight: 400;
  font-size: 11.44px;
  line-height: 12px;
  color: #4C4C50;
`;

const CompatibleProgramsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: -10px 0px 16px 0px;
`;

const CompatibleProgram = styled.div`
  padding: 4px 6px;
  border: 1px solid #88888A;
  border-radius: 4px;
  gap: 4px;
  font-size: 14px;
  color: #313135;
  font-weight: 400;
  font-size: 11.44px;
  line-height: 12px;
  color: #4C4C50;
`;

const FileExtension = styled.div`
  height: 14px;
  margin: -10px 0px 16px 0px;
  font-weight: 400;
  font-size: 13.45px;
  line-height: 14px;
  color: #6D6D70;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  gap: 1rem;
`;

const BuyButton = styled.button`
  height: 48px;
  padding: 12px 152.35px 12px 152.34px;
  border: none;
  color: white;
  background-color: #4E4EFF;
  cursor: pointer;
  border-radius: 8px;

  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartButton = styled.button`
  height: 40px;
  padding: 10px 37.29px;
  cursor: pointer;
  border-radius: 8px;
  gap: 8px;
  border: 1px solid #D3D3D3;
  color: #313135;

  font-weight: 600;
  font-size: 13.13px;
  line-height: 20px;
  text-align: center;

  &:hover {
    background-color: #D3D3D3;
  }
`;

const SecondContainer = styled.div`
  width: 80%;
  height: 1000px;
  border: 1px solid red;
  padding: 1rem;
  margin: 50px;
`;

const ThirdContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SuggestionsTitle = styled.div`
  font-weight: 700;
  font-size: 20.63px;
  line-height: 33px;
  color: #313135;
`;

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const DetailedItem = () => {
  const tags = ["건축", "인테리어 도면"];
  const compatiblePrograms = ["SketchUp", "AutoCAD"];
  const otherItems = [
    { id: 1, name: "Other Item 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Other Item 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Other Item 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Other Item 4", image: "https://via.placeholder.com/150" },
  ];

  return (
    <>
      <TopNavBar />
      <OuterContainer>
        <MainContainer>
          <CategoryContainer>건축-주거 | 인테리어-주거</CategoryContainer>
          <FirstContainer>
            <ImageContainer>
              <img src="" alt="Big Item" />
            </ImageContainer>
            <RightContainer>
              <CompanyName>ONETOOL 회사명</CompanyName>
              <ItemName>건축 도면</ItemName>
              <PriceContainer>
                <OriginalPrice>80000원</OriginalPrice>
                <PriceBox>
                  <SalePercentage>30%</SalePercentage>
                  <CurrentPrice>56000원</CurrentPrice>
                </PriceBox>
                <SaleTimer>남은 시간 2일 10:13:50</SaleTimer>
              </PriceContainer>
              <InfoContainer>
                <TextBox>상품정보</TextBox>
                <InnerTextBox>태그</InnerTextBox>
                <Tags>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
                <InnerTextBox>파일 확장자</InnerTextBox>
                <FileExtension>skp / dwg</FileExtension>
                <InnerTextBox>사용 가능 프로그램</InnerTextBox>
                <CompatibleProgramsContainer>
                  {compatiblePrograms.map((program, index) => (
                    <CompatibleProgram key={index}>{program}</CompatibleProgram>
                  ))}
                </CompatibleProgramsContainer>
              </InfoContainer>
              <ButtonsContainer>
                <BuyButton>구매하기</BuyButton>
                <CartButton>장바구니</CartButton>
              </ButtonsContainer>
            </RightContainer>
          </FirstContainer>
          <SecondContainer>
            {/* Specific details of the item go here */}
          </SecondContainer>
          <ThirdContainer>
            <SuggestionsTitle>작가님의 다른 도면들이에요 </SuggestionsTitle>
            <SuggestionsGrid>
              {otherItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </SuggestionsGrid>
          </ThirdContainer>
        </MainContainer>
      </OuterContainer>
      <Footer />
    </>
  );
};

export default DetailedItem;

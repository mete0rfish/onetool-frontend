import styled from "styled-components";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { blueprint, IBluePrintDetail } from "../../dummy/blueprint";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";

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
  color: #88888a;
`;

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8rem;
`;

const ImageContainer = styled.div`
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
  border-bottom: 1px solid #88888a50;
`;

const CompanyName = styled.div`
  gap: 4px;
  font-weight: 400;
  font-size: 13.13px;
  line-height: 20px;
  color: #88888a;
`;

const ItemName = styled.div`
  padding: 7px 0px 0px 0px;
  font-weight: 700;
  font-size: 20.8px;
  line-height: 30.8px;
  color: #18181b;
`;

const PriceContainer = styled.div`
  height: 60px;
  padding: 10px 0px 30px 0px;
  gap: 10px;
  border-bottom: 1px solid #88888a50;
`;

const OriginalPrice = styled.div`
  height: 27px;
  padding: 2px 0px 6px 0px;
  font-weight: 400;
  font-size: 15.13px;
  line-height: 19px;
  color: #88888a;
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
  color: #ff5c00;
`;

const CurrentPrice = styled.div`
  font-weight: 700;
  font-size: 26.91px;
  line-height: 33px;
  color: #18181b;
`;

const SaleTimer = styled.div`
  height: 26px;
  border-radius: 6px;
  background-color: #ff5c00;
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
  border: 1px solid #88888a;
  border-radius: 11px;
  font-size: 14px;
  color: #313135;

  font-weight: 400;
  font-size: 11.44px;
  line-height: 12px;
  color: #4c4c50;
`;

const CompatibleProgramsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: -10px 0px 16px 0px;
`;

const CompatibleProgram = styled.div`
  padding: 4px 6px;
  border: 1px solid #88888a;
  border-radius: 4px;
  gap: 4px;
  font-size: 14px;
  color: #313135;
  font-weight: 400;
  font-size: 11.44px;
  line-height: 12px;
  color: #4c4c50;
`;

const FileExtension = styled.div`
  height: 14px;
  margin: -10px 0px 16px 0px;
  font-weight: 400;
  font-size: 13.45px;
  line-height: 14px;
  color: #6d6d70;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  gap: 1rem;
`;

const BuyButton = styled(Link)`
  height: 48px;
  width: 100%;
  border: none;
  color: black;
  background-color: #3912e7;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    background-color: #0e3aeb;
  }
`;

const CartButton = styled.button`
  height: 40px;
  padding: 10px 37.29px;
  cursor: pointer;
  border-radius: 8px;
  gap: 8px;
  border: 1px solid #d3d3d3;
  color: #313135;

  font-weight: 600;
  font-size: 13.13px;
  line-height: 20px;
  text-align: center;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const SecondContainer = styled.div`
  width: 80%;
  padding: 1rem;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleBar = styled.div`
  width: 1200px;
  height: 47px;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 800;
  font-size: 15.13px;
  line-height: 24px;
  color: #313135;
`;

const BlueBox = styled.div`
  width: 1200px;
  border-radius: 8px;
  padding: 16px 24px;
  margin-bottom: 24px;
  gap: 16px;
  background-color: #ecf9fd;
  font-weight: 600;
  font-size: 13.13px;
  line-height: 20px;
  color: #07afe4;
`;

const MainImg = styled.img`
  width: 700px;
  height: 700px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`;

const QRImg = styled.img`
  width: 200px;
`;

const DetailImg = styled.img`
  width: 800px;
`;

const DetailedItem = () => {
  const params = useParams();
  const data: IBluePrintDetail = blueprint[Number(params.id) - 1];

  return (
    <>
      <>
        <TopNavBar />
        <OuterContainer>
          <MainContainer>
            <CategoryContainer>{data.categoryId}</CategoryContainer>
            <FirstContainer>
              <MainImg src={`${data.blueprintImg}`} alt="Big Item" />
              <RightContainer>
                <CompanyName>ONETOOL</CompanyName>
                <ItemName>{data.blueprintName}</ItemName>
                <PriceContainer>
                  <CurrentPrice>
                    {formatPrice(data.standardPrice)}원
                  </CurrentPrice>
                </PriceContainer>
                <InfoContainer>
                  <TextBox>상품정보</TextBox>
                  <InnerTextBox>확장자</InnerTextBox>
                  <FileExtension>{data.extension}</FileExtension>
                  <InnerTextBox>프로그램</InnerTextBox>
                  <CompatibleProgramsContainer>
                    <CompatibleProgram>{data.program}</CompatibleProgram>
                  </CompatibleProgramsContainer>
                  <InnerTextBox>카테고리</InnerTextBox>
                  <Tags>
                    <Tag>{data.categoryId}</Tag>
                  </Tags>
                </InfoContainer>
                <ButtonsContainer>
                  <BuyButton
                    to={
                      "https://docs.google.com/forms/d/e/1FAIpQLSdRLzlCtOT-Gce34D3BDqxG6JzKj0bQXSQizRFMpuTJ9x82EQ/viewform"
                    }
                    target="_blank"
                  >
                    구매문의 하기
                  </BuyButton>
                  <QRImg src="/qr.png" alt="" />
                </ButtonsContainer>
              </RightContainer>
            </FirstContainer>
            <SecondContainer>
              <ToggleBar>
                <ToggleButton>상세설명</ToggleButton>
              </ToggleBar>
              <BlueBox>{data.blueprintDetails}</BlueBox>
              <DetailImg src={`${data.blueprintDetailImg}`} alt="" />
            </SecondContainer>
          </MainContainer>
        </OuterContainer>
        <Footer />
      </>
    </>
  );
};
export default DetailedItem;

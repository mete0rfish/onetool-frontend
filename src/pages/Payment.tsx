import styled from "styled-components";
import Item from "../components/Item";

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  margin-right: auto;
`;

const Banner = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 24px;
  width: 100%;
  margin-top: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid black;
  }
`;

const ItemImage = styled.img`
  width: 145px;
  height: 95px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 24px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
`;

const ItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ItemPriceDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 343px;
  height: 40px;
  padding: 8px;
  border: 1px solid #dbe0e4;
`;

const BoxTitle = styled.span`
  margin: 24px 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Box = styled.div`
  width: 294px;
  height: 218px;
  padding: 25px;
  border: 1px solid #4e4eff;
  border-radius: 4px;
  background-color: #4e4eff0a;
  span {
    margin-left: 8px;
  }
  p {
    margin-top: 20px;
  }
`;

const Payment = () => {
  const items = [
    {
      image: "./img1.png",
      name: "판타지 초원 환경(Fantasy GrassField)",
      price: 13000,
      checked: false,
    },
    {
      image: "./img1.png",
      name: "판타지 초원 환경(Fantasy GrassField)",
      price: 13000,
      checked: false,
    },
  ];

  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  return (
    <Wrapper>
      <Title>주문서</Title>
      <Banner>
        <span>주문상품</span>
      </Banner>
      {items.map((item, index) => (
        <CartItem>
          <ItemImage src={item.image} alt={item.name} />
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
          </ItemDetails>
          <ItemPriceDetail>
            <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
          </ItemPriceDetail>
        </CartItem>
      ))}
      <Banner>
        <span>주문자</span>
      </Banner>
      <Form>
        <FormGroup>
          <Label>주문자명</Label>
          <Input type="text" placeholder="(예시)홍길동" />
        </FormGroup>
        <FormGroup>
          <Label>휴대폰 번호</Label>
          <Input type="text" placeholder="휴대폰 번호" />
        </FormGroup>
        <FormGroup>
          <Label>이메일</Label>
          <Input type="text" placeholder="example@example.com" />
        </FormGroup>
      </Form>
      <Banner>
        <span>사용권</span>
      </Banner>
      <BoxTitle>사용권 유형</BoxTitle>
      <BoxWrapper>
        <Box>
          <input type="radio" />
          <span>개인 사용권</span>
          <p>
            필명이 작품에 반드시 표시되어야 해요. 본인만 사용 가능하고, 공유할
            수 없어요. 여러 작품에 사용 가능해요. 작품마다 다 른 필명을 사용할
            경우, 모든 필명을 입력 해주세요.
          </p>
        </Box>
        <Box>
          <input type="radio" />
          <span>기업 사용권</span>
          <p>
            등록한 1개의 작품에만 사용할 수 있어 요. 등록한 작품명과 실제 사용
            작품명이 반 드시 일치해야 해요. 등록한 작품을 작업하는 모든 작가가
            사 용할 수 있어요.
          </p>
        </Box>
      </BoxWrapper>
      <Banner>
        <span>결제 금액</span>
      </Banner>
      <div>
        <div>
          <span>총 상품 금액</span>
          <span>{totalAmount.toLocaleString()}</span>
        </div>
        <div>
          <span>총 할인 금액</span>
          <span>-{4000}</span>
        </div>
      </div>
      <div>
        <span>최종 결제 금액</span>
        <span>{(totalAmount - 4000).toLocaleString()}</span>
      </div>
    </Wrapper>
  );
};

export default Payment;

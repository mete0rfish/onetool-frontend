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
      <span>사용권 유형</span>
    </Wrapper>
  );
};

export default Payment;

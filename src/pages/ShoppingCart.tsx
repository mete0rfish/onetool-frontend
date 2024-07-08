import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import styled from "styled-components";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Circle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #3e3e3e3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 64px;
`;

const Empty = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
`;
const Go = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #7c7c7c;
  margin-bottom: 12px;
`;

const FamLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  border: 1px solid black;
  padding: 13px 23px;
  border-radius: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  margin-right: auto;
  margin-bottom: 32px;
`;

const SelectButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #88888a;
`;

const MainSection = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  width: 812px;
  height: auto;
`;

const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fafafc;
  gap: 12px;
  border-radius: 6px;
  width: 360px;
  max-height: 400px;
  height: fit-content;
`;

const SummaryText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  font-weight: 600;

  &:last-of-type {
    border-top: 2px solid #e5e7eb;
    padding-top: 8px;
  }

  &:nth-of-type(2) {
    color: #4e4eff;
  }
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

const ToTalPrice = styled.span`
  font-size: 24px;
  font-weight: 800;
`;

const Button = styled.button`
  font-size: 15px;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OrderButton = styled(Button)`
  background-color: #4e4eff;
  color: white;
`;

const ShoppingButton = styled(Button)`
  border: 1px solid #4e4eff;
  color: #4e4eff;
`;

export const CheckBoxStyled = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

const ShoppingCart = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [items, setItems] = useState([
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
  ]);

  const ToggleAllChecked = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    const newItems = items.map((item) => ({ ...item, checked: newAllChecked }));
    setItems(newItems);
  };

  const toggleSingleChecked = (index: number) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
    setAllChecked(newItems.every((item) => item.checked));
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const totalAmount = items.reduce((total, item) => total + item.price, 0);
  const discount = 4000;
  const finalAmount = totalAmount - discount;

  return (
    <div>
      {isEmpty ? (
        <Wrapper>
          <Circle>
            <BsCart4 />
          </Circle>
          <Empty>장바구니가 비어있어요.</Empty>
          <Go>지금 담으러 가볼까요?</Go>
          <FamLink to={"/items"}>인기 작품 구경 가기 &rarr;</FamLink>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>장바구니</Title>
          <SelectButtons>
            <CheckBoxStyled
              type="checkbox"
              onChange={ToggleAllChecked}
              checked={allChecked}
            />
            <Label>전체선택</Label>
          </SelectButtons>
          <MainSection>
            <CartItems>
              {items.map((item, index) => (
                <Item
                  key={index}
                  item={item}
                  checked={item.checked}
                  onToggle={() => toggleSingleChecked(index)}
                />
              ))}
            </CartItems>
            <CartSummary>
              <SummaryText>
                <span>총 상품 금액</span>
                <Price>{formatPrice(totalAmount)}원</Price>
              </SummaryText>
              <SummaryText>
                <span>총 할인 금액</span>
                <Price>-{formatPrice(discount)}원</Price>
              </SummaryText>
              <SummaryText>
                <span>결제 금액</span>
                <ToTalPrice>{formatPrice(finalAmount)}원</ToTalPrice>
              </SummaryText>
              <OrderButton>주문하기</OrderButton>
              <ShoppingButton>
                <Link to="/items">계속 쇼핑하기</Link>
              </ShoppingButton>
            </CartSummary>
          </MainSection>
        </Wrapper>
      )}
    </div>
  );
};

export default ShoppingCart;

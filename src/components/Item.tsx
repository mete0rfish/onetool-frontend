import { useState } from "react";
import { GoX } from "react-icons/go";
import styled from "styled-components";
import { CheckBoxStyled } from "../pages/ShoppingCart";

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
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
  font-size: 14px;
  color: #777;
`;

const Xbutton = styled(GoX)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

interface IItemProps {
  item: {
    image: string;
    name: string;
    price: number;
  };
  checked: boolean;
  onToggle: () => void;
}

const Item = ({ item, checked, onToggle }: IItemProps) => {
  const [singleChecked, setSingleChecked] = useState(checked);

  const onChange = () => {
    const newChecked = !singleChecked;
    setSingleChecked(newChecked);
    onToggle(); // 부모 컴포넌트로 체크 상태 업데이트를 전달
  };

  return (
    <CartItem>
      <CheckBoxStyled
        type="checkbox"
        checked={singleChecked}
        onChange={onChange}
      />
      <ItemImage src={item.image} alt={item.name} />
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
      </ItemDetails>
      <ItemPriceDetail>
        <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
        <Xbutton />
      </ItemPriceDetail>
    </CartItem>
  );
};

export default Item;

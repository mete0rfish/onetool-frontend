import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 292px;
  height: 340px;
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  width: 290px;
  height: 200px;
  border-radius: 6.65px;
  border: 1px solid #EEEEEE;
`;

const BelowContainer = styled.div`
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BrandName = styled.h3`
  font-weight: 400;
  font-size: 11.25px;
  line-height: 12px;
  color: #A0A0A0;
`;

const ItemName = styled.h3`
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #1A1A1A;
`;

const PriceName = styled.h3`
  font-weight: 500;
  font-size: 15.38px;
  line-height: 16px;
  color: #000000;
`;

const TagBox = styled.h3`
  margin: 0.5rem 0;
`;


interface IItem {
  id: number;
  name: string;
  image: string;
}

interface ItemCardProps {
  item: IItem;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <ItemCardContainer>
      <Link to={`/items/${item.id}`}>
        <ItemImage src={item.image} alt={item.name} />
        <BelowContainer>
          <BrandName>작가명</BrandName>
          <ItemName>{item.name}</ItemName>
          <PriceName>가격</PriceName>
          <TagBox></TagBox>
        </BelowContainer>
      </Link>
    </ItemCardContainer>
  );
};

export default ItemCard;

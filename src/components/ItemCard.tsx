import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  text-align: center;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const ItemName = styled.h3`
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
        <ItemName>{item.name}</ItemName>
      </Link>
    </ItemCardContainer>
  );
};

export default ItemCard;

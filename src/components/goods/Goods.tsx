import React from 'react';
import styled from 'styled-components';
import { GoodsType } from '../../types/goods';

const Goods = ({ data }: GoodsType) => {
  return (
    <Container>
      <ItemImg src={data.representationImage.imageHref} alt="product_image" />
      <ItemTop>
        <div>
          <Name>{data.productName}</Name>
        </div>
        <div>
          <FavoriteIcon className="fas fa-heart"></FavoriteIcon>
          <FavoriteNum></FavoriteNum>
        </div>
      </ItemTop>

      <Price>{data.productPrice.toLocaleString()} 원</Price>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f8f9fb;
  border: 1px solid #d9d9d9;
  margin: 0 10px;
  width: 215px;
  min-height: 310px;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 195px;
  transition: all 0.1s;
  overflow: hidden;
`;

const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 5px 0;
`;

const Name = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const FavoriteIcon = styled.i`
  color: red;
`;

const FavoriteNum = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const Price = styled.p`
  display: inline-block;
  font-size: 18px;
  margin: 30px 5px 0;
  cursor: pointer;
`;

export default Goods;

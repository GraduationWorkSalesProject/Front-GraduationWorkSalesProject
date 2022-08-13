import React from 'react';
import styled, { css } from 'styled-components';
import { GoodsType } from '../../types/goods';

const Goods = ({ data }: GoodsType) => {
  return (
    <Container>
      <div className="imageWrapper">
        <ItemImg src={data.representationImage.imageHref} alt="product_image" />
      </div>
      <ItemTop>
        <div>
          <Name>{data.productName}</Name>
        </div>
        <div>
          <FavoriteIcon className="fas fa-heart"></FavoriteIcon>
          <FavoriteNum></FavoriteNum>
        </div>
        <Price>{data.productPrice.toLocaleString()} 원</Price>
      </ItemTop>
    </Container>
  );
};

export const hoverZoomImg = css`
  & img {
    transition: all 0.2s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Container = styled.div`
  background-color: #f8f9fb;
  border: 1px solid #d9d9d9;
  margin: 0 10px;
  min-height: 330px;
  overflow: hidden;

  .imageWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100%;
    overflow: hidden;

    & > img {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }

  &:hover {
    ${hoverZoomImg}
  }
`;

const ItemImg = styled.img`
  width: 100%;
  height: 195px;
  transition: all 0.1s;
  overflow: hidden;
`;

const ItemTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 10px 0;
  height: 100px;
`;

const Name = styled.span`
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
  font-size: 18px;
  cursor: pointer;
`;

export default Goods;

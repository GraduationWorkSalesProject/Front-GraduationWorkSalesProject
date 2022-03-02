import React from 'react';
import palette from '../../styles/palette';
import styled from 'styled-components';
import Skeleton from './Skeleton';
import Button from '../common/Button';

const DetailSkeleton = () => {
  return (
    <Wrapper>
      <ImgViewer>
        <div className="product-image__items">
          <Skeleton
            type="CARD"
            size="X_LARGE"
            width="70px"
            height="70px"
            margin="5px 10px;"
          />
        </div>
        <MainImage>
          <Skeleton type="CARD" size="X_LARGE" width="300px" height="300px" />
        </MainImage>
      </ImgViewer>
      <ProductOverviewContent>
        <h1 className="product-content__title">
          <Skeleton type="TEXT" width="14rem" height="2rem" />
        </h1>
        <strong className="product-content__price">
          <Skeleton type="TEXT" width="10rem" height="2rem" />
        </strong>
        <div>
          <span className="product-content__delivery_content">
            <Skeleton
              type="TEXT"
              width="10rem"
              height="1.2rem"
              margin="5px 0"
            />
          </span>
        </div>
        <div>
          <span className="product-content__delivery_content">
            <Skeleton
              type="TEXT"
              width="10rem"
              height="1.2rem"
              margin="5px 0"
            />
          </span>
        </div>
        <div>
          <span className="product-content__delivery_period_content">
            <Skeleton
              type="TEXT"
              width="10rem"
              height="1.2rem"
              margin="5px 0"
            />
          </span>
        </div>
        <div className="product-content__buttons">
          <Button inverted className="product-content__like_button">
            찜하기
          </Button>
          <Button className="product-content__chat_button">채팅하기</Button>
        </div>
      </ProductOverviewContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 90px;
`;

const ImgViewer = styled.div`
  display: flex;
  margin-right: 65px;
  .product-image__items {
    display: flex;
    flex-direction: column;
  }
`;

const MainImage = styled.div`
  width: 300px;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 20px;
`;

const ProductOverviewContent = styled.div`
  position: relative;
  width: 430px;
  display: flex;
  flex-direction: column;
  .product-content__title {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 50px;
  }
  .product-content__price {
    display: inline-block;
    font-size: 28px;
    margin-bottom: 30px;
  }
  .product-content__delivery_title,
  .product-content__delivery_period_title {
    display: inline-block;
    color: ${palette.grey};
    margin: 0 25px 10px 0;
  }
  .product-content__buttons {
    position: absolute;
    bottom: 0;
    .product-content__like_button {
      width: 200px;
      border-radius: 6px;
      border: 1px solid ${palette.purple};
      width: 200px;
      height: 50px;
      margin-right: 10px;
    }
    .product-content__chat_button {
      border-radius: 6px;
      width: 200px;
      height: 50px;
    }
  }
`;

export default DetailSkeleton;

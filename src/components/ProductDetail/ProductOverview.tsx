import styled from 'styled-components';
import { useHistory } from 'react-router';
import palette from '../../styles/palette';
import { ImageProps } from '../../types/goods';
import Button from '../common/Button';

interface IProps {
  productName: string;
  productPrice: number;
  productDeliveryPrice: number;
  productDeliveryTerm: number;
  representationImage: ImageProps;
  productImageList: ImageProps[];
  likeCount: number;
  handleLike: () => void;
}

const ProductOverview = ({
  productName,
  productPrice,
  productDeliveryPrice,
  productDeliveryTerm,
  representationImage,
  productImageList,
  likeCount,
  handleLike,
}: IProps) => {
  const history = useHistory();
  const handleChatting = () => {
    alert('로그인을 해주세요');
    history.push('/login');
  };
  return (
    <Wrapper>
      <ImgViewer>
        <div className="product-image__items">
          {productImageList.map((image, index) => (
            <Thumbnail
              src={image.imageHref}
              key={index}
              alt="image-thumbnail"
            />
          ))}
        </div>
        <MainImage src={representationImage.imageHref} alt="product image" />
      </ImgViewer>
      <ProductOverviewContent>
        <h1 className="product-content__title">{productName}</h1>
        <strong className="product-content__price">
          {productPrice.toLocaleString()}원
        </strong>
        <div>
          <span className="product-content__delivery_title">배송비</span>
          <span className="product-content__delivery_content">
            {productDeliveryPrice.toLocaleString()}원
          </span>
        </div>
        <div>
          <span className="product-content__delivery_title">좋아요</span>
          <span className="product-content__delivery_content">{likeCount}</span>
        </div>
        <div>
          <span className="product-content__delivery_period_title">
            배송시작
          </span>
          <span className="product-content__delivery_period_content">
            최대 {productDeliveryTerm}일 이내
          </span>
        </div>
        <div className="product-content__buttons">
          <Button
            inverted
            className="product-content__like_button"
            onClick={handleLike}
          >
            찜하기
          </Button>
          <Button
            className="product-content__chat_button"
            onClick={handleChatting}
          >
            채팅하기
          </Button>
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

const MainImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 20px;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  max-width: 70px;
  max-height: 70px;
  cursor: pointer;
  opacity: 0.5;
  margin: 5px 10px;
  border-radius: 10px;
  :hover {
    opacity: 1;
    border: 1px solid ${palette.purple};
  }
  .active {
    opacity: 1;
  }
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

export default ProductOverview;

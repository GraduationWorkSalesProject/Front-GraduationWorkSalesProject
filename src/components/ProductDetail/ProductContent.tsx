import styled from 'styled-components';
import { useHistory } from 'react-router';
import palette from '../../styles/palette';
import { ImageProps } from '../../types/goods';
import Button from '../common/Button';
import { parseDate } from '../../utils/parseDate';

interface IProps {
  productInformation: string;
  representationImage: ImageProps;
  productImageList: ImageProps[];
  sellerName: string;
  registerDate: string;
}

const ProductContent = ({
  productInformation,
  representationImage,
  productImageList,
  sellerName,
  registerDate,
}: IProps) => {
  const history = useHistory();
  const handleFollow = () => {
    alert('로그인을 해주세요');
    history.push('/login');
  };
  return (
    <Wrapper>
      <ContentBox>
        <div id="product-info">
          <ProductImage
            src={representationImage.imageHref}
            alt="product-MainImage"
            className="productImage"
          />
          {productImageList.map((image, index) => (
            <ProductImage
              src={image.imageHref}
              key={index}
              alt="product-subImage"
              className="productImage"
            />
          ))}
        </div>
      </ContentBox>
      <div>
        <ArtistCard>
          <Profile>
            <img src="/asset/profile.png" alt="profile-img" />
            <SellerInfo>
              <div className="sellerName">{sellerName}</div>
              <div className="RegisterDate">{parseDate(registerDate)}</div>
            </SellerInfo>
          </Profile>
          <ProductInfo>{productInformation}</ProductInfo>
          <Button onClick={handleFollow} className="follow-button" inverted>
            팔로우
          </Button>
        </ArtistCard>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1020px;
  display: flex;
  flex: 2 1;
`;

const ContentBox = styled.div`
  min-width: 680px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ArtistCard = styled.div`
  min-width: 340px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid ${palette.brightGrey};
  border-radius: 6px;
  margin: 10px;

  .follow-button {
    border: 1px solid ${palette.purple};
  }
`;

const Profile = styled.div`
  display: flex;
  height: 50px;
  img {
    width: 50px;
    cursor: pointer;
  }
`;

const SellerInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;

  & .sellerName {
    font-size: 18px;
  }
  & .RegisterDate {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const ProductInfo = styled.span`
  white-space: pre-wrap;
  padding: 0;
`;

export default ProductContent;

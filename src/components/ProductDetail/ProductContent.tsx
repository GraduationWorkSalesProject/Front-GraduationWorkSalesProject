import styled from 'styled-components';
import { useHistory } from 'react-router';
import palette from '../../styles/palette';
import { ImageProps } from '../../types/goods';
import Button from '../common/Button';

interface IProps {
  productInformation: string;
  representationImage: ImageProps;
  productImageList: ImageProps[];
}

const ProductContent = ({
  productInformation,
  representationImage,
  productImageList,
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
          <div>
            <img src="" alt="" />
          </div>
          <p>{productInformation}</p>
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
  max-width: 340px;
  padding: 20px;
  border: 1px solid ${palette.brightGrey};
  border-radius: 6px;
  margin: 10px;
  .follow-button {
    border: 1px solid ${palette.purple};
  }
`;

export default ProductContent;

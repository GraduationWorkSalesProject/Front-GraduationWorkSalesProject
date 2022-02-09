import styled from 'styled-components';
import palette from '../../styles/palette';
import { ImageProps } from '../../types/goods';
import Button from '../common/Button';

interface IProps{
  productInformation:string;
  representationImage : ImageProps;
  productImageList: ImageProps[];
} 

const ProductContent = ({productInformation, representationImage, productImageList }:IProps) => { 
  return (
    <Wrapper>
      <div>
        <div id="product-info">
          <ProductImage
            src={representationImage.imageHref}
            alt="product-MainImage"
            className="productImage"
          />
          {productImageList.map((image)=>(
            <ProductImage src={image.imageHref} alt='product-subImage' className="productImage"/>
          ))}
        </div> 
      </div>
      <div>
        <ArtistCard>
          <div>
            <img src="" alt="" /> 
          </div>
          <p>
          {productInformation}
          </p>
          <Button className="follow-button" inverted>
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
  flex: 8 1;
 
`;

const ProductImage = styled.img`
  width: 100%;
`

const ArtistCard = styled.div`
  min-width: 300px;
  padding: 20px;
  border: 1px solid ${palette.brightGrey};
  border-radius: 6px;
  margin: 10px;
  .follow-button {
    border: 1px solid ${palette.purple};
  }
`;

export default ProductContent;

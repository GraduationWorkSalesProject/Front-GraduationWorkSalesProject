import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';
import Skeleton from './Skeleton';

const DetailContentSkeleton = () => {
  return (
    <Wrapper>
      <ContentBox>
        <div id="product-info">
          <ProductImage>
            <Skeleton type="CARD" size="X_LARGE" width="100%" height="30rem" />
          </ProductImage>
        </div>
      </ContentBox>
      <div>
        <ArtistCard>
          <Skeleton type="TEXT" width="100%" height="2rem" margin="2rem 0" />
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
  flex: 2 1;
`;

const ContentBox = styled.div`
  min-width: 680px;
`;

const ProductImage = styled.div`
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

export default DetailContentSkeleton;

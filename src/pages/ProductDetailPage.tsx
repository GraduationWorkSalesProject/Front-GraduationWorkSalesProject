import styled from 'styled-components';
import palette from '../styles/palette';
import ProductOverview from '../components/ProductDetail/ProductOverview';
import ProductContent from '../components/ProductDetail/ProductContent';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { likeProduct, loadLikeCount } from '../api/like';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { loadProduct } from '../api/product';
import DetailSkeleton from '../components/Skeleton/DetailSkeleton';
import DetailContentSkeleton from '../components/Skeleton/DetailContentSkeleton';
import useHeader from '../components/Header/useHeader';

interface IParam {
  id: string;
}

const ProductDetailPage = () => {
  const { id }: IParam = useParams();
  const history = useHistory();
  const [likeCount, setLikeCount] = useState<number>(0);
  const { token, user, handleLogout } = useHeader();

  const { isLoading, data: { data } = {} } = useQuery(
    ['product-detail', id],
    () => loadProduct(Number(id)),
    {
      onError: (error: Error) => {
        alert(error.message);
      },
    },
  );

  const handleLike = async () => {
    if (!token) {
      alert('로그인을 해주세요');
      history.push('/login');
      return;
    }
    mutate();
  };

  const handleLikeCount = async () => {
    const response = await loadLikeCount(Number(id));
    if (response === null) {
      return;
    }
    setLikeCount(response.data.like_num);
  };

  useEffect(() => {
    handleLikeCount();
  }, []);

  const { mutate } = useMutation(() => likeProduct(Number(id)), {
    onSuccess: () => {
      alert('좋아요를 눌렀습니다');
      handleLikeCount();
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <Wrapper>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <ProductOverview
          productName={data.productName}
          productPrice={data.productPrice}
          productDeliveryPrice={data.productDeliveryPrice}
          productDeliveryTerm={data.productDeliveryTerm}
          representationImage={data.representationImage}
          productImageList={data.productImageList}
          likeCount={likeCount}
          hashtagList={data.hashtagList}
          handleLike={handleLike}
        />
      )}

      <Nav>
        <nav>
          <ol className="product-detail__list">
            <li className="product-detail__list_item active">
              <a href="#info">작품정보</a>
            </li>
            <li className="product-detail__list_item">
              <a href="#caution">주의사항</a>
            </li>
            <li className="product-detail__list_item">
              <a href="#truth-safety">신뢰와 안전</a>
            </li>
          </ol>
        </nav>
      </Nav>
      {isLoading ? (
        <DetailContentSkeleton />
      ) : (
        <ProductContent
          productInformation={data.productInformation}
          representationImage={data.representationImage}
          productImageList={data.productImageList}
          sellerName={data.sellerName}
          registerDate={data.productRegisterDate}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const Nav = styled.div`
  width: 100%;
  border-top: 0.5px solid ${palette.brightGrey};
  border-bottom: 0.5px solid ${palette.brightGrey};
  .product-detail__list {
    width: 1020px;
    display: flex;
    margin: 0 auto;
  }
  .product-detail__list_item {
    display: flex;
    margin-right: 10px;
    padding: 16px 28px;
    color: ${palette.grey};
    cursor: pointer;
  }
  .active {
    color: ${palette.purple};
    border-bottom: 1px solid ${palette.purple};
  }
`;

export default ProductDetailPage;

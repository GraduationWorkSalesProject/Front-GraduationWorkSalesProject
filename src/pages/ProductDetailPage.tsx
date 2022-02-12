import styled from 'styled-components'; 
import palette from '../styles/palette';
import ProductOverview from '../components/ProductDetail/ProductOverview'; 
import ProductContent from '../components/ProductDetail/ProductContent';
import { useParams } from 'react-router-dom'; 

import useProductDetail from '../hooks/useProductDetail'; 
import { likeProduct, loadLikeCount } from '../api/like';
import { useEffect, useState } from 'react';

interface IParam {
  id: string;
}

const ProductDetailPage = () => {
  const { id }:IParam  = useParams();
  const [likeCount, setLikeCount] = useState<number>(0);

  const { product, loading, responseOK } = useProductDetail(id); 

  const handleLike =async () => {
    const response = await likeProduct(Number(id)); 
    if(response===null){
      alert(response.message);
    } 
    alert(response.message);
  }

  const handleLikeCount = async() => {
    const response = await loadLikeCount(Number(id)); 
    if(response===null){
      return;
    } 
    setLikeCount(response.data.like_num) 
  }

  useEffect(()=>{
    handleLikeCount()
  },[])
  
  if(!product) {
    return <div>로딩중...</div>
  }

  if(loading) {
    return <div>로딩중... </div>
  }

  if(!loading && !responseOK) {
    return <div>Not Found</div>
  }
 
  return (
    <Wrapper>
      <ProductOverview 
          productName={product.productName}
          productPrice={product.productPrice}
          productDeliveryPrice={product.productDeliveryPrice} 
          productDeliveryTerm={product.productDeliveryTerm}
          representationImage={product.representationImage}
          productImageList={product.productImageList}
          likeCount={likeCount}
          handleLike={handleLike}
     />
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
      <ProductContent
          productInformation={product.productInformation}
          representationImage={product.representationImage}
          productImageList={product.productImageList}
      />
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

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import palette from '../styles/palette';
import ProductOverview from '../components/ProductDetail/ProductOverview';
import ProductContent from '../components/ProductDetail/ProductContent';
import { useEffect, useState } from 'react';
import { loadProduct } from '../api/product';  
import { GoodsProps, ProductResponse } from '../types/goods';

const ProductDetailPage = () => {    
  const [product, setProduct] = useState<GoodsProps>();
 
  const {id}:any = useParams(); 
  
  const getData = async() => {
    const response: ProductResponse = await loadProduct(id); 
    setProduct(response.data);
  }
  console.log('b',product)
  useEffect(() => {
    getData();   
  }, []);

  if(!product) {
    return <div>로딩중... </div>
  }
 
  return (
    <Wrapper>
      <ProductOverview 
          productName={product.productName}
          productPrice={product.productPrice}
          productDeliveryPrice={product.productDeliveryPrice} 
          productDeliveryTerm={product.productDeliveryTerm}
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

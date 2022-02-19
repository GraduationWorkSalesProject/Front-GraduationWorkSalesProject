import React from 'react';
import { useLocation } from 'react-router';
import SearchProduct from '../components/Search/SearchProduct';
import useSearch from '../hooks/useSearch';

interface LocationProps {
  state: string;
}

const ProductSearchPage = () => {
  const location: LocationProps = useLocation();
  const keyword = location.state;
  const { product, loading, responseOK } = useSearch(keyword);

  if (!product) {
    return <div>로딩중...</div>;
  }

  if (loading) {
    return <div>로딩중... </div>;
  }

  if (!loading && !responseOK) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <SearchProduct data={product} />
    </div>
  );
};

export default ProductSearchPage;

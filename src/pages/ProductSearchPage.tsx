import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { searchProduct } from '../api/product';
import NoSearchResults from '../components/Search/NoSearchResults';
import SearchProduct from '../components/Search/SearchProduct';
import usePageTitle from '../hooks/usePageTitle';

interface LocationProps {
  state: string;
}

const ProductSearchPage = () => {
  const location: LocationProps = useLocation();
  const keyword = location.state;
  const sort = '최신순';
  const page = 0;
  const { data: { data } = {}, isLoading } = useQuery(
    ['product-detail', keyword],
    () => searchProduct(keyword, sort, page),
    {
      onError: (error: Error) => {
        alert(error.message);
      },
    },
  );

  usePageTitle(`${keyword} 검색 결과`);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      {data.length ? (
        <SearchProduct data={data} />
      ) : (
        <NoSearchResults search={keyword || ''} />
      )}
    </div>
  );
};

export default ProductSearchPage;

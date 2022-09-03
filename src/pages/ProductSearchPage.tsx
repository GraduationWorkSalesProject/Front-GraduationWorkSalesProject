import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { searchProduct } from '../api/product';
import Skeleton from '../components/Skeleton/Skeleton';
import NoSearchResults from '../components/Search/NoSearchResults';
import SearchProduct from '../components/Search/SearchProduct';
import SkeletonList from '../components/Skeleton/SkeletonList';
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

  return (
    <div>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <SearchProduct data={data} keyword={keyword} />
      )}
    </div>
  );
};

export default ProductSearchPage;

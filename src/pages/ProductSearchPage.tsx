import React from 'react';
import { useLocation } from 'react-router';
import Skeleton from '../components/common/Skeleton';
import NoSearchResults from '../components/Search/NoSearchResults';
import SearchProduct from '../components/Search/SearchProduct';
import usePageTitle from '../hooks/usePageTitle';
import useSearch from '../hooks/useSearch';

interface LocationProps {
  state: string;
}

const ProductSearchPage = () => {
  const location: LocationProps = useLocation();
  const keyword = location.state;
  const { product, loading, responseOK } = useSearch(keyword);

  usePageTitle(`${keyword} 검색 결과`);

  const getSkeletonUI = () => (
    <>
      <Skeleton type="TEXT" size="MEDIUM" width="14rem" margin="1rem 2rem" />
     </>
  );

  if (!loading && !responseOK) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      {loading ? (
        getSkeletonUI()
      ) : product.length ? (
        <SearchProduct data={product} />
      ) : (
        <NoSearchResults search={keyword || ''} />
      )}
    </div>
  );
};

export default ProductSearchPage;

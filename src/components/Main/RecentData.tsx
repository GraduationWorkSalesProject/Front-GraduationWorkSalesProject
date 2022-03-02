import React from 'react';
import { useQuery } from 'react-query';
import { loadProductsRecent } from '../../api/product';
import ListGoods from '../list-goods/List-goods';
import SearchSkeleton from '../Skeleton/SearchSkeleton';

const RecentData = () => {
  const { data: { data } = {}, isLoading } = useQuery(
    ['product-recent'],
    () => loadProductsRecent(),
    {
      onError: (error: Error) => {
        alert(error.message);
      },
    },
  );

  return (
    <>
      {isLoading ? (
        <SearchSkeleton />
      ) : (
        <ListGoods data={data} title="New ITEMS" />
      )}
    </>
  );
};

export default RecentData;

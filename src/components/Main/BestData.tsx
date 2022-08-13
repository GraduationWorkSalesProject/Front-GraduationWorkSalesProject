import React from 'react';
import { useQuery } from 'react-query';
import { loadProductsBest } from '../../api/product';
import ListGoods from '../list-goods/List-goods';
import SearchSkeleton from '../Skeleton/SearchSkeleton';

const BestData = () => {
  const { data: { data } = {}, isLoading } = useQuery(
    ['product-best'],
    () => loadProductsBest(),
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
        <ListGoods data={data} title="지금 가장 핫한 작품" />
      )}
    </>
  );
};

export default BestData;

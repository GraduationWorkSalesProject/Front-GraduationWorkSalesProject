import React from 'react';
import { useQuery } from 'react-query';
import { loadProductsRecent } from '../../api/product';
import ListGoods from '../list-goods/List-goods';
import SkeletonList from '../Skeleton/SkeletonList';

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
        <SkeletonList />
      ) : (
        <ListGoods data={data} title="새로 들어온 작품" />
      )}
    </>
  );
};

export default RecentData;
